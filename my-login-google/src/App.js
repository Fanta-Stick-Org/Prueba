import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Logo from './Logo.png';

//import LoginHooks from './components/LoginHooks'       <LoginHooks />
 //     <LogoutHooks />;
//import LogoutHooks from './components/LogoutHooks'        <h2>The Hooks way</h2>;

function App() {
  return (
    
    <div className="App">
      <img className='Logo' src={Logo} alt='Logo' />
      <h2>Inicio de Sesión</h2>
      <Login />
      <br/>
      <Logout />
      <br />
      <h6>No compartas tu contraseña con nadie</h6>
      <a href="https://github.com/Fanta-Stick-Org/Fanta-Stick-Store">
        <br></br><h6>Copyright-Fanta-Stick-Org-2021</h6>
      </a>
    </div>
  );
}

export default App;