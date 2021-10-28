import React, { useState, useEffect } from "react";
import LandingPage from "../Components/LandingPage";
import { useRouter } from "next/router";
import Dashboard from "../Components/Content/Dashboard";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Index() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}
