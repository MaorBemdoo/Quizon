import { Alert, Button, Card, Typography } from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getAuth, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { app } from "../firebaseConfig";
import { ArrowBack, MailOutline } from "@mui/icons-material";
import { Link, useSearchParams } from "react-router-dom";

interface ResetPasswordProps {
    className?: string;
    dark: boolean;
}
const ResetPassword = ({ className }: ResetPasswordProps) => {

    const auth = getAuth(app)
    const [searchParams] = useSearchParams()

    const [email, setEmail] = useState("");
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
                        JHIBUKUHG
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
                            Send Link
                        </Button>
                    </Card>
                    )
            }
        </>
    );
};
export default ResetPassword;
