import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AuthContext from "../../store/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/auth");
  };

  return (
    <header className={classes.header}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>React Auth</Navbar.Brand>
          </LinkContainer>
          <Nav as="ul" className="justify-content-end">
            {!isLoggedIn && (
              <LinkContainer to="/auth">
                <Nav.Link>Login in</Nav.Link>
              </LinkContainer>
            )}
            {isLoggedIn && (
              <LinkContainer to="/profile">
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
            )}
            {isLoggedIn && (
              <Button variant="outline-danger" onClick={logoutHandler}>
                Logout
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default MainNavigation;
