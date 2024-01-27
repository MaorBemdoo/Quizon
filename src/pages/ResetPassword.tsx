import { Button, Card, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getAuth, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { app } from "../firebaseConfig";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface ResetPasswordProps {
    className?: string;
    dark: boolean;
}
const ResetPassword = ({ className }: ResetPasswordProps) => {

    const auth = getAuth(app)

    const [email, setEmail] = useState("");
    const [codeSent, isCodeSent] = useState(false);

    const codeMail = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        sendPasswordResetEmail(auth, email)
            .then((res) => {
                console.log(res)
                isCodeSent(true)
            })
            .catch((error) => {
                console.log(error.code)
            });
    };

    return (
        <>
            <Helmet>
                <title>Reset Password - Quizon | Login</title>
            </Helmet>
            {codeSent ? (
                <Card
                    component="form"
                    className={`${className} update-pwd`}
                ></Card>
            ) : (
                <Card component="form" className={`${className} send-link`}>
                    <div>
                        <Link to="/login"><ArrowBack/></Link>
                        <Typography variant="h4">Password reset</Typography>
                    </div>
                    <Typography variant="body2" sx={{opacity: ".8"}}>A link will be sent to your email to reset your password</Typography>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "tranparent" }}
                        type="submit"
                        onClick={codeMail}
                    >
                        Send Link
                    </Button>
                </Card>
            )}
        </>
    );
};
export default ResetPassword;
