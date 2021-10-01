import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '922510844654-2hiieh70goe700jfo7qk5ppvf1ov0rt7.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div className="buttonLogout">
      <GoogleLogout
        clientId={clientId}
        buttonText="Salir"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;