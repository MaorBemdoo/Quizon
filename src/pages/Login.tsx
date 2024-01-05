import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import background from "../assets/background1.jpg"
import logo from "../../public/logo.png"
import googleLogo from "../assets/googleLogo.jpg"
import { FormControl, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import { Link } from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [pwdVisibility, setPwdVisibility] = useState(false)

    const submitHandler = () => {

    }

    return (
        <main>
            <Helmet>
                <title>Login - Quizon</title>
            </Helmet>
            <div><img src={background} alt="Background" /></div>
            <div>
                <img src={logo} alt="Quizon logo" />
                <Typography variant="h4" color="initial">Welcome back!</Typography>
                <Typography variant="body1" color="initial">Welcome back!</Typography>
                <FormControl variant="standard">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                    id="email"
                    aria-describedby="email-text"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                    <FormHelperText id="fullname-text">Email field is required</FormHelperText>
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                    id="password"
                    aria-describedby="password-text"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                    <FormHelperText id="password-text">Pssword field is required</FormHelperText>
                </FormControl>
                <Typography variant="body1" color="initial">Forgot password?</Typography>
                <button>Log In</button>
                <div>
                    <hr />
                    <Typography variant="body1" color="initial">OR</Typography>
                </div>
                <button>
                    <img src={googleLogo} alt="google Logo" />
                    <b><Typography variant="h5" color="initial">Log in with Google</Typography></b>
                </button>
                <Typography variant="body1" color="initial">Don't have an account? <Link to="/signup">Sign Up</Link></Typography>
            </div>
        </main>
    );
};

export default Login;
