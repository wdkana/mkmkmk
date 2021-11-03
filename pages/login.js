import React from "react";
import Login from "../Components/LandingPage/login";
import { Provider } from "react-redux";
import stores from "../redux/store";

export default function LoginPage() {
  return (
    <Provider store={stores}>
      <div>
        <Login />
      </div>
    </Provider>
  );
}
