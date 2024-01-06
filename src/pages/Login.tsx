import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import background from "../assets/background1.jpg"
import logo from "../../public/logo.png"
import googleLogo from "../assets/googleLogo.jpg"
import { FormControl, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import { Link } from "react-router-dom";

interface LoginProps{
    className?: string
    dark: boolean
}

const Login = ({ className }: LoginProps) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [pwdVisibility, setPwdVisibility] = useState(false)

    const submitHandler = () => {

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
                <FormControl variant="standard" sx={{margin: "1.3em 0"}} fullWidth>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                    id="email"
                    aria-describedby="email-text"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                    <FormHelperText id="fullname-text">Email field is required</FormHelperText>
                </FormControl>
                <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                    id="password"
                    aria-describedby="password-text"
                    type={pwdVisibility ? "text" : "password"}
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                    {!pwdVisibility ? <VisibilityOutlined sx={{cursor: "pointer", position: "absolute", right: "15px", top: "30px", transform: "translate(-50%, -50%)"}} onClick={() => setPwdVisibility(!pwdVisibility)}/> : <VisibilityOffOutlined sx={{cursor: "pointer", position: "absolute", right: "15px", top: "30px", transform: "translate(-50%, -50%)"}} onClick={() => setPwdVisibility(!pwdVisibility)}/>}
                    <FormHelperText id="password-text">Password field is required</FormHelperText>
                </FormControl>
                <Typography variant="body2" color="initial" className="forgot-pwd">Forgot password?</Typography>
                <button style={{fontSize: "1.2rem", fontWeight: "500", color: "white !important"}}><b style={{color: "white !important"}}>Log In</b></button>
                <div className="or">
                    <hr />
                    <Typography variant="body1" color="initial">OR</Typography>
                </div>
                <button className="google-login" style={{fontSize: "1.2rem"}}>
                    <img src={googleLogo} alt="google Logo" width={25} height={25}/>
                    <b>Log in with Google</b>
                </button>
                <Typography variant="body1" color="initial">Don't have an account? <Link to="/signup">Sign Up</Link></Typography>
            </div>
        </main>
    );
};

export default Login;
