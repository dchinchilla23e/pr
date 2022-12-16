// configuracion de google para boton de acceso
import React, { useEffect, useState } from "react";
import { GoogleLogin } from 'react-google-login';
import { auth } from "./firebase";

function Appgoogle() {
  const [ responseGoogle] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        responseGoogle(user.displayName);
      } else responseGoogle("");
    });
  }, []);

  return (
    <div className="App">
      <br></br>
      
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
    </div>
  );
}

export default Appgoogle;
