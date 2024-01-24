import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { ExpandMore, Logout } from "@mui/icons-material";

interface Props {
    className?: string
    dark: boolean;
}

const ProfileNav = ({ className, dark }: Props) => {

    const [activeDD, setActiveDD] = useState(false)
    const [user, setUser] = useState<null | User>(null);
    const [loading, isLoading] = useState(true)
    // const [error, isError] = useState(false)

    const auth = getAuth(app);
    useEffect(() => {
        onAuthStateChanged(auth, (userCred) => {
            if (userCred) {
                setUser(userCred);
                console.log(userCred);
            } else {
                setUser(null);
            }
            isLoading(false)
        })
    }, [auth]);

    return (
        <div className={className}>
            {
                loading ? <div>
                    <CircularProgress sx={{color: `${dark ? "black" : "white"}`}}/>
                </div> : (
                user ? (
                    <>
                        <div onClick={() => setActiveDD(!activeDD)}>
                            <img src={user.photoURL as string} alt="Profile picture" />
                            <ExpandMore sx={{color: "initial", width: "20px", height: "20px"}}/>
                        </div>
                        {
                            activeDD && <div className="dd">
                                <p>Profile</p>
                                <div>
                                    <Logout />
                                    <p>Logout</p>
                                </div>
                            </div>
                        }
                    </>
                ) : (
                    <>
                        {/* <Switch
                            aria-label="Switch-demo"
                            color="success"
                            checked={dark}
                            onChange={() => isDark(!dark)}
                        /> */}
                    </>
                )
            )}
        </div>
    );
};
export default ProfileNav;
