import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
const logoutBtnCss = {
  // backgroundColor: "#FF8C00",
  backgroundColor: "black",
  // color: "blue",
  color: "#FFA500",
  fontWidth: "5px",
  borderColor: "#FFA500",
};

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      className="btn-margin"
      style={logoutBtnCss}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
