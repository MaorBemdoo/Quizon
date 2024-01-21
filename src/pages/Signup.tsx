import { Helmet } from "react-helmet-async";
import background from "../assets/background1.jpg";
import logo from "../../public/logo.png";
import googleLogo from "../assets/googleLogo.jpg";
import {
    Alert,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";

interface SignupProps {
    className?: string;
    dark: boolean;
}

const Signup = ({ className }: SignupProps) => {

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
                    // sx={{ display: `${uniError ? "flex" : "none"}` }}
                >
                    Incorrect credentials
                </Alert>
                <FormControl
                    variant="standard"
                    sx={{ marginTop: "1.3em" }}
                    // error={emailError || uniError}
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
                        // value={user.email}
                        sx={{ color: "initial" }}
                        // onChange={(e) =>
                        //     // setUser({ ...user, email: e.target.value })
                        // }
                        onFocus={() => {
                            // setEmailError(false);
                            // setPwdError(false);
                            // setUniError(false);
                        }}
                    />
                    {/* <FormHelperText id="fullname-text" hidden={!emailError}>
                            
                        </FormHelperText> */}
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{ margin: "1.3em 0" }}
                    // error={emailError || uniError}
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
                        // value={user.email}
                        sx={{ color: "initial" }}
                        // onChange={(e) =>
                        //     // setUser({ ...user, email: e.target.value })
                        // }
                        onFocus={() => {
                            // setEmailError(false);
                            // setPwdError(false);
                            // setUniError(false);
                        }}
                    />
                    {/* <FormHelperText id="fullname-text" hidden={!emailError}>
                            {user.email.trim() == ""
                                ? "Email field is required"
                                : "Invalid email format: example@test.com"}
                        </FormHelperText> */}
                </FormControl>
                <FormControl
                    variant="standard"
                    // error={pwdError || uniError}
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
                        // type={pwdVisibility ? "text" : "password"}
                        // value={user.password}
                        sx={{ color: "initial" }}
                        // onChange={(e) =>
                        //     // setUser({ ...user, password: e.target.value })
                        // }
                        onFocus={() => {
                            // setEmailError(false);
                            // setPwdError(false);
                            // setUniError(false);
                        }}
                    />
                    {/* {!pwdVisibility ? (
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
                        )} */}
                    {/* <FormHelperText id="password-text" hidden={!pwdError}>
                            Password field is required
                        </FormHelperText> */}
                </FormControl>
                <FormControl
                    variant="standard"
                    // error={pwdError || uniError}
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
                        // value={user.password}
                        sx={{ color: "initial" }}
                        // onChange={(e) =>
                        //     // setUser({ ...user, password: e.target.value })
                        // }
                        onFocus={() => {
                            // setEmailError(false);
                            // setPwdError(false);
                            // setUniError(false);
                        }}
                    />
                </FormControl>
                <button
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: "500",
                        color: "white !important",
                        marginTop: "1.3em",
                    }}
                    // onClick={submitHandler}
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
                    style={{ fontSize: "1.2rem" }}
                    // onClick={signWithGoogle}
                >
                    <img
                        src={googleLogo}
                        alt="google Logo"
                        width={25}
                        height={25}
                    />
                    <b>Log in with Google</b>
                </button>
                <Typography variant="body1" color="initial">
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
            </div>
        </main>
    );
};

export default Signup;
