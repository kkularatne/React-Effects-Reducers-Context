import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Bad way of checking whether the user has already logged in
  // This will create an infinity loop, as everytime state changes, the component re-render itself.
  /*
  const userLoggedIn = localStorage.getItem("isLoggedIn");
  if (userLoggedIn === "1") {
    setIsLoggedIn(true);
  }
  */

  // Correct way of checking above is, useEffect hook.
  // NOTE: This function will run when the component renders very first time, as the dependacies have not set/ changed.
  // after that, it will only execute when one of the dependacies changed.
  // ALSO NOTE: This function will execute after the component is rendered successfully.
  // If user has not specify any dependacies, this execute only once. which is the very first component render.
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === "1") {
      setIsLoggedIn(true); // this will force component to re-render. But the re-render won't execute useEffect block.
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
