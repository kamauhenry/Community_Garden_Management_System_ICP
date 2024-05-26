import React, { useEffect, useState, useCallback } from "react";
import { login } from "../../utils/auth";
import { Notification } from "../../components/utils/Notifications";
import Wallet from "../../components/Wallet";
import UserDashboard from "./UserDashboard";
import CreateUserProfile from "../../components/UserManager/CreateUserProfile";
import { getUserProfileByOwner } from "../../utils/communityGarden";
import Login from "./Login";
import { Nav } from "react-bootstrap";
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
        })
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <>
      <Notification />
      {isAuthenticated ? (
        !loading ? (
          user?.name ? (
            <>
              <Nav className="justify-content-end pt-3 pb-5 mr-4">
                <Nav.Item>
                  <Wallet />
                </Nav.Item>
              </Nav>
              <main>
                <UserDashboard user={user} />
              </main>
            </>
          ) : (
            <CreateUserProfile fetchUserProfile={fetchUserProfile} />
          )
        ) : (
          <Loader />
        )
      ) : (
        <Login login={login} />
      )}
    </>
  );
};

export default UserProfile;
