import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { ExpandMore, LogoutOutlined, PersonOutline, SettingsOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { setCredentials, logOut } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../store";

interface Props {
    className?: string
    dark: boolean;
}

const ProfileNav = ({ className, dark }: Props) => {

    const { user, accessToken } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const [activeDD, setActiveDD] = useState(false)
    const [loading, isLoading] = useState(true)
    // const [error, isError] = useState(false)

    const auth = getAuth(app);

    const aLogOut = () => {
        signOut(auth)
            .then((res) => {
                console.log(res);
                dispatch(logOut())
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (userCred) => {
            if (userCred) {
                // there is a logged in user
                userCred.getIdToken().then(idToken => {
                    dispatch(setCredentials({
                        user: userCred,
                        accessToken: idToken
                    }))
                })
                console.log(userCred);
            } else {
                // no logged in user
                dispatch(setCredentials({
                    user: null,
                    accessToken: null
                }))
            }
            isLoading(false)
        })
    }, [auth, dispatch]);

    return (
        <div className={className}>
            {
                loading ? <div className="loading">
                    <CircularProgress sx={{color: `${dark ? "black" : "white"}`}}/>
                </div> : (
                accessToken ? (
                    <>
                        <div onClick={() => setActiveDD(!activeDD)}>
                            <img src={user?.photoURL as string} alt="Profile picture" />
                            <ExpandMore sx={{color: "initial", width: "20px", height: "20px"}}/>
                        </div>
                        {
                            activeDD && <div className="dd">
                                <Link to="">
                                    <PersonOutline/>
                                    <p>Profile</p>
                                </Link>
                                <Link to="">
                                    <SettingsOutlined/>
                                    <p>Settings</p>
                                </Link>
                                <div onClick={aLogOut}>
                                    <LogoutOutlined />
                                    <p>Logout</p>
                                </div>
                            </div>
                        }
                    </>
                ) : (
                    <>
                        <Link to="/login"><button className="loginBtn">Login</button></Link>
                        <Link to="/signup" style={{marginLeft: "1em"}}><button className="signupBtn">Signup</button></Link>
                    </>
                )
            )}
        </div>
    );
};
export default ProfileNav;
