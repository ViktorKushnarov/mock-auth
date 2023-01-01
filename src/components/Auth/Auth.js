import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import { NotificationFailure } from "../Notification/Notification";
import Cart from "../Card/Card";
import { SESSION_URL, MSEC_IN_HOUR } from "../../utils/helpers";
import AuthForm from "../AuthForm/AuthForm";
import classes from "./Auth.module.css";

const Auth = () => {
  const history = useNavigate();

  const authCtx = useContext(AuthContext);

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const { email, password, firstName, lastName } = formState;
    setIsLoading(true);
    if (isLogin) {
      axios
        .post(
          SESSION_URL + "/auth/login",
          { email: email, password: password },
          {
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            const expirationTime = new Date(
              new Date().getTime() + MSEC_IN_HOUR
            );

            authCtx.login(response.data.token, expirationTime);
            history("/profile");
          } else {
            let errorMessage = "Authentication failed!";
            console.log("response", response);
            if (response && response.error && response.error.message) {
              errorMessage = response.error.message;
            }

            throw new Error(errorMessage);
          }
        })
        .catch((error) => {
          console.log(error);
          NotificationFailure(error.response.data.message ?? error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      axios
        .post(
          SESSION_URL + "/auth/signup",
          {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
          },
          {
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status === 201) {
            const expirationTime = new Date(
              new Date().getTime() + MSEC_IN_HOUR
            );
            authCtx.login(
              response.data.token,
              expirationTime,
              response.data.user
            );
            history("/profile");
          } else {
            let errorMessage = "Authentication failed!";
            if (response && response.error && response.error.message) {
              errorMessage = response.error.message;
            }

            throw new Error(errorMessage);
          }
        })
        .catch((error) => {
          NotificationFailure(error.response.data.message ?? error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleChange = (event) => {
    setFormState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  return (
    <Cart className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <AuthForm
        submitHandler={submitHandler}
        isLogin={isLogin}
        formState={formState}
        handleChange={handleChange}
        isLoading={isLoading}
        switchAuthModeHandler={switchAuthModeHandler}
      />
    </Cart>
  );
};

export default Auth;
