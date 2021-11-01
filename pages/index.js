import React from "react";
import LandingPage from "../Components/LandingPage";
import { Provider } from "react-redux";
import stores from "../redux/store";

export default function Index() {
  return (
    <Provider store={stores}>
      <div>
        <LandingPage />
      </div>
    </Provider>
  );
}
