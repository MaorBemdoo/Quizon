import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebaseConfig";
import React, { useEffect, useState } from "react";
import { Switch } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface Props {
    className?: string
    dark: boolean;
    isDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileNav = ({ className, dark, isDark }: Props) => {
    const [user, setUser] = useState<null | User>(null);

    const auth = getAuth(app);
    useEffect(() => {
        onAuthStateChanged(auth, (userCred) => {
            if (userCred) {
                setUser(userCred);
                console.log(userCred);
            } else {
                setUser(null);
            }
        });
    }, [auth]);

    return (
        <div className={className}>
            {user ? (
                <>
                    <img src={user.photoURL as string} alt="Profile picture" />
                    <ExpandMore />
                </>
            ) : (
                <>
                    <Switch
                        aria-label="Switch-demo"
                        color="success"
                        checked={dark}
                        onChange={() => isDark(!dark)}
                    />
                </>
            )}
        </div>
    );
};
export default ProfileNav;
