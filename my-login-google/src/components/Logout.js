import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  'INGRESA TU ID GOOGLE';

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