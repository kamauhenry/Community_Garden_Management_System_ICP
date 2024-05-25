import React, { useEffect, useState, useCallback } from "react";
import { login } from "../../utils/auth";
import { Notification } from "../../components/utils/Notifications";
import { getUserProfileByOwner } from "../../utils/communityGarden";
import Login from "./Login";
import SignUser from "../../components/UserManager/SignUser";
import Loader from "../../components/utils/Loader";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const isAuthenticated = window.auth.isAuthenticated;

    const fetchUserProfile = useCallback(async () => {
        try {
            setLoading(true);
            setUser(
                await getUserProfileByOwner().then(async (res) => {
                    console.log(res);
                    return res;
        }));
        setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    });

    console.log("User", user);

    useEffect(() => {
        fetchUserProfile();
    }, []);

    return (
        <>
        <Notification />
        {isAuthenticated ? (
            !loading ? (
                user?.name ? (
                    <main>
                        <h1>Profile</h1>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.phoneNumber}</p>
                    </main>
                ) : (   
                    <SignUser fetchUserProfile={fetchUserProfile} />
                )
            ) : (
                <Loader />
            )
        ) : (
            <Login login={login}/>
        )}
        
        </>
    );
}

export default UserProfile;

