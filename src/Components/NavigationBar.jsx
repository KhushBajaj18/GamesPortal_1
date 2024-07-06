import React from 'react';
import './NavigationBar.css';
import { useAuth0 } from "@auth0/auth0-react";


function NavigationBar() {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar border-b-4 border-yellow-400 w-screen absolute top-0 left-0 px-10 pb-3">
      {
        isAuthenticated ? (<button  className="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>)
        :
        (
          <button className="button" onClick={() => loginWithRedirect()}>Log In</button>

        )

      }
    

      <div className="nav-title text-3xl">
        <span className="white-text">GAME</span>
        <span className="yellow-text">ZONE</span>
      </div>
      <div className="nav-right">
      </div>
    </div>
  );
}

export default NavigationBar;
