import { Alert, Button, Card, Typography } from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getAuth, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { app } from "../firebaseConfig";
import { ArrowBack, MailOutline, VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

interface ResetPasswordProps {
    className?: string;
    dark: boolean;
}
const ResetPassword = ({ className }: ResetPasswordProps) => {

    const auth = getAuth(app)
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [comPassword, setComPassword] = useState("")
    const [pwdVisibility, setPwdVisibility] = useState(false)
    const [passwordErr, setPasswordErr] = useState({
        status: false,
        msg: ""
    })
    const [emailErr, setEmailErr] = useState({
        status: false,
        msg: ""
    })
    const [uniError, setUniError] = useState({
        status: false,
        msg: ""
    })
    const [loading, isLoading] = useState(false)
    const [codeSent, isCodeSent] = useState(() => {
        const getCodeSent = localStorage.getItem("codeSent")
        return getCodeSent ? JSON.parse(getCodeSent) : false
    });

    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g

    useEffect(() => {
        localStorage.setItem("codeSent", JSON.stringify(codeSent))
    }, [codeSent])

    const codeMail = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(email.trim() == ""){
            setEmailErr({
                status: true,
                msg: "Your email is required"
            })
            return
        }else if(!emailReg.test(email)){
            setEmailErr({
                status: true,
                msg: "Incorrect Email format: example@test.com"
            })
            return
        }

        isLoading(true)

        sendPasswordResetEmail(auth, email)
            .then((res) => {
                console.log(res)
                localStorage.setItem("email", email)
                isCodeSent(true)
            })
            .catch((error) => {
                console.log(error.code)
                if(error.code == "auth/network-request-failed"){
                    setUniError({
                        status: true,
                        msg: "You lost connection"
                    })
                }else{
                    setUniError({
                        status: true,
                        msg: "An error occured"
                    })
                }
            })
            .finally(() => {
                isLoading(false)
            })
    };

    const resetPwd = () => {
        if(password.trim().length <= 8){
            setPasswordErr({
                status: true,
                msg: "Password should be more than 8 characters"
            })
            return
        }
        if(password.trim() !== comPassword.trim()){
            setUniError({
                status: true,
                msg: "Passwords do not match"
            })
            return 
        }

        isLoading(true)
        confirmPasswordReset(auth, searchParams.get("oobCode") as string, password)
            .then((res) => {
                console.log(res);
                localStorage.removeItem("codeSent")
                localStorage.removeItem("email")
                navigate("/login")
            })
            .catch((err) => {
                console.log(err.code);
                if(err.code == "auth/network-request-failed"){
                    setUniError({
                        status: true,
                        msg: "You lost connection"
                    })
                }else if(err.code == "auth/expired-action-code"){
                    setUniError({
                        status: true,
                        msg: "Sorry this service has expired. Try Again"
                    })
                }else{
                    setUniError({
                        status: true,
                        msg: "An error occured"
                    })
                }
            })
            .finally(() => {
                isLoading(false)
            })
    }

    return (
        <>
            <Helmet>
                <title>Reset Password - Quizon | Login</title>
            </Helmet>
            {codeSent && localStorage.getItem("email")?.trim() !== "" ? 
                searchParams.get("oobCode") ? (
                    <Card
                    component="form"
                    className={`${className} reset-pwd`}
                    >
                        <Typography variant="h4">Password reset</Typography>
                        <div>
                            <Alert variant="filled" severity="error" sx={{display: `${uniError.status ? "flex" : "none"}`, width: "100%"}}>{uniError.msg}</Alert>
                            <div style={{position: "relative", marginTop: "1em"}}>
                                <input type={pwdVisibility ? "text" : "password"} placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} onFocus={() => {setUniError({status: false, msg: ""}); setPasswordErr({status: false, msg: ""})}}/>
                                {pwdVisibility ? <VisibilityOffOutlined onClick={() => setPwdVisibility(!pwdVisibility)}/> : <VisibilityOutlined onClick={() => setPwdVisibility(!pwdVisibility)}/>}
                                <p hidden={!passwordErr.status} style={{color: "red", textAlign: "start"}}>{passwordErr.msg}</p>
                            </div>
                            <input type="password" placeholder="Comfirm password" value={comPassword} onChange={(e) => setComPassword(e.target.value)} onFocus={() => {setUniError({status: false, msg: ""}); setPasswordErr({status: false, msg: ""})}} style={{marginTop: "1em"}}/>
                        </div>
                        <Button variant="contained" onClick ={resetPwd} disabled={loading}><b>{loading ? "Resetting..." : "Reset"}</b></Button>
                    </Card>
                ) : (
                    <Card className={`${className} link-sent`}>
                        <MailOutline/>
                        <Typography variant="body1">We've sent you an email with a link to {localStorage.getItem("email")} to reset your password</Typography>
                        <div>
                            <Button variant="contained" onClick={() => isCodeSent(false)}>Change Email</Button>
                            <Button variant="contained" onClick={() => {isCodeSent(false); setEmail(localStorage.getItem("email") as string)}}>Resend Code</Button>
                        </div>
                    </Card>
                )
                : (
                    <Card component="form" className={`${className} send-link`}>
                        <div>
                            <Link to="/login"><ArrowBack/></Link>
                            <Typography variant="h4">Password reset</Typography>
                        </div>
                        <Alert severity="error" variant="filled" sx={{display: `${uniError.status ? "flex" : "none"}`}}>{uniError.msg}</Alert>
                        <Typography variant="body2" sx={{opacity: ".8"}}>A link will be sent to your email to reset your password</Typography>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => {setEmailErr({status: false, msg: ""}); setUniError({status: false, msg: ""})}}
                            placeholder="E-mail Address"
                        />
                        <p style={{color: "red"}} hidden={!emailErr.status}>{emailErr.msg}</p>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: "tranparent" }}
                            type="submit"
                            onClick={codeMail}
                            disabled={loading}
                        >
                            <b>{loading ? "Sending..." : "Send link"}</b>
                        </Button>
                    </Card>
                    )
            }
        </>
    );
};
export default ResetPassword;
