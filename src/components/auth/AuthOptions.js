import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import userContext from "../../context/UserContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(userContext);
  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push("/login");
  };
  return (
    <nav className="auth-options">
      {userData.user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <button onClick={register}>Register</button>
          <button onClick={login}>Log in</button>
        </>
      )}
    </nav>
  );
}
