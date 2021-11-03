import React, { useState, useEffect } from "react";
import LandingPage from "../Components/LandingPage";
import { Provider } from "react-redux";
import stores from "../redux/store";
import Cookies from 'universal-cookie';

export default function Index() {

  useEffect(() => {
    const cookies = new Cookies()
    if(cookies.get('private_key') != undefined){
      window.location.href = '/dashboard'
    }
  }, []);

  return (
    <Provider store={stores}>
      <div>
        <LandingPage />
      </div>
    </Provider>
  );
}
