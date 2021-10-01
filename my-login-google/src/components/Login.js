import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '922510844654-2hiieh70goe700jfo7qk5ppvf1ov0rt7.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    let usuario = res.profileObj;
    alert(
      '\n Bienvenido ' + res.profileObj.name + ' \n Tu ingreso a sido exitoso 😍  ');
    refreshTokenSetup(res);
    console.log(usuario.googleId);
    console.log(usuario.name);
    console.log(usuario.email);


  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢`
    );
  };

  return (
    <div className="buttonLogin">
      <GoogleLogin
        clientId={clientId}
        buttonText="Ingresar"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        //style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
