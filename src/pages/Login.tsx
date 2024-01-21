import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import background from "../assets/background1.jpg"
import logo from "../../public/logo.png"
import googleLogo from "../assets/googleLogo.jpg"
import { Alert, FormControl, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebaseConfig";
import { setCredentials } from "../features/auth/authSlice";

interface LoginProps{
    className?: string
    dark: boolean
}

const Login = ({ className }: LoginProps) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [emailError, setEmailError] = useState(false)
    const [pwdError, setPwdError] = useState(false)
    const [uniError, setUniError] = useState({
        status: false,
        msg: ''
    })

    const [pwdVisibility, setPwdVisibility] = useState(false)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g

    const submitHandler = () => {
        if(user.email.trim() == "" || !emailReg.test(user.email)){
            setEmailError(true)
            if(user.password.trim() !== ""){
                return;
            }
        }
        if(user.password.trim() == ""){
            setPwdError(true)
            return;
        }

        setEmailError(false)
        setPwdError(false)

        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                console.log(userCredential)
                userCredential.user.getIdToken().then(idToken => {
                    setCredentials({
                        user: userCredential.user,
                        accessToken: idToken
                    })
                })
                setUniError({
                    status: false,
                    msg: ''
                })
            })
            .catch((error) => {
                console.log(error.code)
                if(error.code == "auth/network-request-failed"){
                    setUniError({
                        status: true,
                        msg: 'No internet connection'
                    })
                }else if(error.code == "auth/invalid-credential"){
                    setUniError({
                        status: true,
                        msg: 'Incorrect credentials'
                    })
                }else{
                    setUniError({
                        status: true,
                        msg: 'An error occured'
                    })
                }
            })
            .finally(() => {
                setUser({
                    email: '',
                    password: ''
                })
            })
    }

    const signWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
                console.log(GoogleAuthProvider.credentialFromResult(result))
                setCredentials({
                    user: result.user,
                    accessToken: GoogleAuthProvider.credentialFromResult(result)?.accessToken
                })
            }).catch((error) => {
                console.log(error)
                console.log(GoogleAuthProvider.credentialFromError(error))
                if(error.code == "auth/internal-error"){
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
                    email: '',
                    password: ''
                })
            })
    }

    return (
        <main className={className}>
            <Helmet>
                <title>Login - Quizon</title>
            </Helmet>
            <div><img src={background} alt="Background" /></div>
            <div className="login">
                <img src={logo} alt="Quizon logo" />
                <Typography variant="h4" color="initial" sx={{fontWeight: "500"}}>Welcome back!</Typography>
                <Typography variant="body2" color="initial" sx={{opacity: ".8"}}>Please enter your details</Typography>
                <Alert severity="error" variant="filled" sx={{display: `${uniError.status ? "flex" : "none"}`}}>{uniError.msg}</Alert>
                <FormControl variant="standard" sx={{margin: "1.3em 0"}} error={emailError || uniError.status} fullWidth>
                    <InputLabel htmlFor="email" sx={{color: "initial !important"}}>Email</InputLabel>
                    <Input
                    id="email"
                    aria-describedby="email-text"
                    value={user.email}
                    sx={{color: "initial"}}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    onFocus={() => {setEmailError(false); setPwdError(false); setUniError({status: false, msg: ''})}}
                    />
                    <FormHelperText id="fullname-text" hidden={!emailError}>{user.email.trim() == "" ? "Email field is required" : "Invalid email format: example@test.com"}</FormHelperText>
                </FormControl>
                <FormControl variant="standard" error={pwdError || uniError.status} fullWidth>
                    <InputLabel htmlFor="password" sx={{color: "initial !important"}}>Password</InputLabel>
                    <Input
                    id="password"
                    aria-describedby="password-text"
                    type={pwdVisibility ? "text" : "password"}
                    value={user.password}
                    sx={{color: "initial"}}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    onFocus={() => {setEmailError(false); setPwdError(false); setUniError({status: false, msg: ''})}}
                    />
                    {!pwdVisibility ? <VisibilityOutlined sx={{cursor: "pointer", position: "absolute", right: "15px", top: "30px", transform: "translate(-50%, -50%)"}} onClick={() => setPwdVisibility(!pwdVisibility)}/> : <VisibilityOffOutlined sx={{cursor: "pointer", position: "absolute", right: "15px", top: "30px", transform: "translate(-50%, -50%)"}} onClick={() => setPwdVisibility(!pwdVisibility)}/>}
                    <FormHelperText id="password-text" hidden={!pwdError}>Password field is required</FormHelperText>
                </FormControl>
                <Typography variant="body2" color="initial" className="forgot-pwd">Forgot password?</Typography>
                <button style={{fontSize: "1.2rem", fontWeight: "500", color: "white !important"}} onClick={submitHandler}><b style={{color: "white !important"}}>LOGIN</b></button>
                <div className="or">
                    <hr />
                    <Typography variant="body1" color="initial">OR</Typography>
                </div>
                <button className="google-login" style={{fontSize: "1.2rem"}} onClick={signWithGoogle}>
                    <img src={googleLogo} alt="google Logo" width={25} height={25}/>
                    <b>Log in with Google</b>
                </button>
                <Typography variant="body1" color="initial">Don't have an account? <Link to="/signup">Sign Up</Link></Typography>
            </div>
        </main>
    );
};

export default Login;
