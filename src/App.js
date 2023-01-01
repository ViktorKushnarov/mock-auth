import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";
import NotFound from "./pages/ErrorPages/NotFound";
import Unautorized from "./pages/ErrorPages/Unautorized";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        {!authCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
        <Route
          path="/profile"
          element={authCtx.isLoggedIn ? <ProfilePage /> : <Unautorized />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
