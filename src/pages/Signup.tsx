import { Helmet } from "react-helmet-async";
import background from "../assets/background1.jpg";
import logo from "../../public/logo.png";
import googleLogo from "../assets/googleLogo.jpg";
import unknownPerson from "../assets/unknownPerson.jpg"
import {
    Alert,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useRef, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import { app } from "../firebaseConfig";
import { setCredentials } from "../features/auth/authSlice";
import { useAppDispatch } from "../store";

interface SignupProps {
    className?: string;
    dark: boolean;
}

const Signup = ({ className }: SignupProps) => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const signupRef = useRef(null)
    const gSignupRef = useRef(null)

    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        comPassword: "",
    });
    const [uniError, setUniError] = useState({
        status: false,
        msg: "",
    });
    const [fullNameErr, setFullNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState({
        status: false,
        msg: "",
    });
    const [passwordErr, setPasswordErr] = useState({
        status: false,
        msg: "",
    });
    const [comPasswordErr, setComPasswordErr] = useState(false);
    const [pwdVisibility, setPwdVisibility] = useState(false);

    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;

    const submitHandler = () => {
        const errors = {
            fullName: user.fullName.trim() === "",
            email: user.email.trim() === "" || !emailReg.test(user.email),
            password: user.password.trim().length <= 8,
            comPassword: user.comPassword.trim() === "",
            passwordMismatch: user.password !== user.comPassword,
        };

        // Set error states based on conditions
        setFullNameErr(errors.fullName);
        setEmailErr({
            status: errors.email,
            msg: errors.email ? "Invalid email format\nexample@test.com" : "",
        });
        setPasswordErr({
            status: errors.password,
            msg: errors.password
                ? "Password should be more than 8 characters"
                : "",
        });
        setComPasswordErr(errors.comPassword);
        setUniError({
            status: errors.passwordMismatch,
            msg: errors.passwordMismatch ? "Passwords do not match" : "",
        });

        // If any errors exist, stop further processing
        if (Object.values(errors).some((error) => error)) {
            return;
        }

        const signupBtn = signupRef.current as unknown as HTMLButtonElement
        signupBtn.disabled = true
        signupBtn.innerText = "Signing"
        signupBtn.style.cursor = "not-allowed"

        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                console.log(userCredential);
                updateProfile(userCredential.user, {
                    displayName: user.fullName,
                    photoURL: unknownPerson
                })
                    .then(() => {
                        userCredential.user.getIdToken()
                            .then(idTok => {
                                dispatch(setCredentials({
                                    user: userCredential.user,
                                    accessToken: idTok
                                }))
                                navigate("/")
                            })
                    })
                    .catch((err) => {
                        console.log(err);
                        if (err.code == "auth/network-request-failed") {
                            setUniError({
                                status: true,
                                msg: "No internet connetion",
                            });
                        } else {
                            setUniError({
                                status: true,
                                msg: "An error occured",
                            });
                        }
                    });
            })
            .catch((err) => {
                console.log(err);
                if (err.code == "auth/network-request-failed") {
                    setUniError({
                        status: true,
                        msg: "No internet connetion",
                    });
                } else if(err.code == "auth/email-already-in-use"){
                    setUniError({
                        status: true,
                        msg: "This email address is in use by another account",
                    });
                }else {
                    setUniError({
                        status: true,
                        msg: "An error occured",
                    });
                }
            })
            .finally(() => {
                setUser({
                    fullName: "",
                    email: "",
                    password: "",
                    comPassword: "",
                })
                signupBtn.disabled = false
                signupBtn.innerText = `<b style={{ color: "white !important" }}>SIGN UP</b>`
                signupBtn.style.cursor = "pointer"
            })
    };

    const signWithGoogle = () => {
        const gSignupBtn = gSignupRef.current as unknown as HTMLButtonElement
        gSignupBtn.disabled = true
        if(gSignupBtn.lastElementChild) gSignupBtn.lastElementChild.innerHTML = "Signing..."
        gSignupBtn.style.cursor = "not-allowed"
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
            console.log(GoogleAuthProvider.credentialFromResult(result))
            dispatch(setCredentials({
                user: result.user,
                accessToken: GoogleAuthProvider.credentialFromResult(result)?.idToken
            }))
            navigate("/")
        }).catch((error) => {
            console.log(error)
            console.log(GoogleAuthProvider.credentialFromError(error))
            if(error.code == "auth/network-request-failed"){
                setUniError({
                    status: true,
                    msg: "No internet connection"
                })
            }else{
                setUniError({
                    status: true,
                    msg: "An error occured"
                })
            }
        }).finally(() => {
            setUser({
                fullName: "",
                email: "",
                password: "",
                comPassword: "",
            })
            gSignupBtn.disabled = false
            if(gSignupBtn.lastElementChild) gSignupBtn.lastElementChild.innerHTML = "Sign up with Google"
            gSignupBtn.style.cursor = "pointer"
        })
    }

    const focusHandler = () => {
        setUniError({
            status: false,
            msg: "",
        });
        setFullNameErr(false);
        setEmailErr({
            status: false,
            msg: "",
        });
        setPasswordErr({
            status: false,
            msg: "",
        });
        setComPasswordErr(false);
    };

    return (
        <main className={className}>
            <Helmet>
                <title>Signup - Quizon</title>
            </Helmet>
            <div>
                <img src={background} alt="Background" />
            </div>
            <div className="signup">
                <img src={logo} alt="Quizon logo" />
                <Typography
                    variant="h4"
                    color="initial"
                    sx={{ fontWeight: "500" }}
                >
                    Create Account
                </Typography>
                <Typography
                    variant="body2"
                    color="initial"
                    sx={{ opacity: ".8" }}
                >
                    Please enter your details
                </Typography>
                <Alert
                    severity="error"
                    variant="filled"
                    sx={{ display: `${uniError.status ? "flex" : "none"}` }}
                >
                    {uniError.msg}
                </Alert>
                <FormControl
                    variant="standard"
                    sx={{ marginTop: "1.3em" }}
                    error={fullNameErr || uniError.status}
                    fullWidth
                >
                    <InputLabel
                        htmlFor="fullName"
                        sx={{ color: "initial !important" }}
                    >
                        Full Name
                    </InputLabel>
                    <Input
                        id="fullName"
                        aria-describedby="fullName-text"
                        value={user.fullName}
                        sx={{ color: "initial" }}
                        onChange={(e) =>
                            setUser({ ...user, fullName: e.target.value })
                        }
                        onFocus={focusHandler}
                    />
                    <FormHelperText
                        id="fullname-text"
                        hidden={!fullNameErr || uniError.status}
                    >
                        Full Name field is required
                    </FormHelperText>
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{ margin: "1.3em 0" }}
                    error={emailErr.status || uniError.status}
                    fullWidth
                >
                    <InputLabel
                        htmlFor="email"
                        sx={{ color: "initial !important" }}
                    >
                        Email
                    </InputLabel>
                    <Input
                        id="email"
                        aria-describedby="email-text"
                        value={user.email}
                        sx={{ color: "initial" }}
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                        onFocus={focusHandler}
                    />
                    <FormHelperText
                        id="fullname-text"
                        dangerouslySetInnerHTML={{ __html: emailErr.msg }}
                        hidden={!emailErr.status}
                    ></FormHelperText>
                </FormControl>
                <FormControl
                    variant="standard"
                    error={passwordErr.status || uniError.status}
                    fullWidth
                >
                    <InputLabel
                        htmlFor="password"
                        sx={{ color: "initial !important" }}
                    >
                        Password
                    </InputLabel>
                    <Input
                        id="password"
                        aria-describedby="password-text"
                        type={pwdVisibility ? "text" : "password"}
                        value={user.password}
                        sx={{ color: "initial" }}
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                        onFocus={focusHandler}
                    />
                    {!pwdVisibility ? (
                        <VisibilityOutlined
                            sx={{
                                cursor: "pointer",
                                position: "absolute",
                                right: "15px",
                                top: "30px",
                                transform: "translate(-50%, -50%)",
                            }}
                            onClick={() => setPwdVisibility(!pwdVisibility)}
                        />
                    ) : (
                        <VisibilityOffOutlined
                            sx={{
                                cursor: "pointer",
                                position: "absolute",
                                right: "15px",
                                top: "30px",
                                transform: "translate(-50%, -50%)",
                            }}
                            onClick={() => setPwdVisibility(!pwdVisibility)}
                        />
                    )}
                    <FormHelperText
                        id="password-text"
                        hidden={!passwordErr.status}
                    >
                        {passwordErr.msg}
                    </FormHelperText>
                </FormControl>
                <FormControl
                    variant="standard"
                    error={comPasswordErr || uniError.status}
                    sx={{ margin: "1.3em 0" }}
                    fullWidth
                >
                    <InputLabel
                        htmlFor="com-password"
                        sx={{ color: "initial !important" }}
                    >
                        Comfirm Password
                    </InputLabel>
                    <Input
                        id="com-password"
                        aria-describedby="com-password"
                        type="password"
                        value={user.comPassword}
                        sx={{ color: "initial" }}
                        onChange={(e) =>
                            setUser({ ...user, comPassword: e.target.value })
                        }
                        onFocus={focusHandler}
                    />
                </FormControl>
                <button
                    ref={signupRef}
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "500",
                        color: "white !important",
                        marginTop: "1.3em",
                    }}
                    onClick={submitHandler}
                >
                    <b style={{ color: "white !important" }}>SIGN UP</b>
                </button>
                <div className="or">
                    <hr />
                    <Typography variant="body1" color="initial">
                        OR
                    </Typography>
                </div>
                <button
                    className="google-signup"
                    ref={gSignupRef}
                    style={{ fontSize: "1.2rem" }}
                    onClick={signWithGoogle}
                >
                    <img
                        src={googleLogo}
                        alt="google Logo"
                        width={25}
                        height={25}
                    />
                    <b>Sign up with Google</b>
                </button>
                <Typography variant="body1" color="initial">
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
            </div>
        </main>
    );
};

export default Signup;
