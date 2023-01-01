import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import axios from "axios";
import Profile from "../components/Profile/Profile";
import { NotificationFailure } from "../components/Notification/Notification";
import { SESSION_URL } from "../utils/helpers";

const ProfilePage = () => {
  const history = useNavigate();
  const {token, user} = useContext(AuthContext);
  const [profileUser, setProfileUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getUser = (token) => {
    setIsLoading(true);
    axios
      .get(SESSION_URL + "/auth/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setProfileUser(response.data.user);
        } else {
          let errorMessage = "Authentication failed!";
          if (response && response.error && response.error.message) {
            errorMessage = response.error.message;
          }
          throw new Error(errorMessage);
        }
      })
      .catch((error) => {
        NotificationFailure(error.message);
        history("/login");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!user) {
      getUser(token);
    } else {
      setIsLoading(false);
      setProfileUser(user);
    }
  }, [token,user]);

  return <Profile user={profileUser} isLoading={isLoading} />;
};

export default ProfilePage;
