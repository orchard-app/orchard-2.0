import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
const loginBtnCss = {
  // backgroundColor: "#FF8C00",
  backgroundColor: "black",
  // color: "blue",
  color: "#FFA500",
  fontWidth: "5px",
  borderColor: "#FFA500",
};

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() => loginWithRedirect()}
      style={loginBtnCss}
      className="btn-margin"
    >
      Log In
    </Button>
  );
};

export default LoginButton;
