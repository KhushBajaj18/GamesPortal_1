import React from 'react';
import './NavigationBar.css';
import { useAuth0 } from "@auth0/auth0-react";


function NavigationBar() {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar">
      {
        isAuthenticated ? (<button  className="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>)
        :
        (
          <button className="button" onClick={() => loginWithRedirect()}>Log In</button>

        )

      }
    

      <div className="nav-title">
        <span className="white-text">GAME</span>
        <span className="yellow-text">ZONE</span>
      </div>
      <div className="nav-right">
        🔔
      </div>
    </div>
  );
}

export default NavigationBar;
