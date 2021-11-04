import React, { useEffect } from "react";
import Login from "../Components/LandingPage/login";
import { Provider } from "react-redux";
import stores from "../redux/store";
import Cookies from 'universal-cookie';

export default function LoginPage() {

  useEffect(() => {
    const cookies = new Cookies()
    if(cookies.get('private_key') != undefined){
      window.location.href = '/dashboard'
    }
  }, []);

  return (
    <Provider store={stores}>
      <div>
        <Login />
      </div>
    </Provider>
  );
}
