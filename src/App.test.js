import { createContext } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup);

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token, expirationTime, user) => {},
  logout: () => {},
});

test("renders App title", () => {
  render(
    <BrowserRouter>
      <AuthContextProvider value={AuthContext}>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  );
  
  expect(screen.getByText("React Auth")).toBeInTheDocument();
  expect(screen.getByText("Welcome on Board!")).toBeInTheDocument();
});
