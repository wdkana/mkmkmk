import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import { useRouter } from "next/router";
import Dashboard from "../Components/Content/Dashboard";
import Server from "../Components/Content/Server";
import Tools from "../Components/Content/Tools";
import Maps from "../Components/Content/Maps";
import Class from "../Components/Content/Class";
import Setting from "../Components/Content/Setting";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function IndexPage() {
  const router = useRouter();
  const { menu } = router.query;
  const [uri, setUri] = useState("");

  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const txtColor = useColorModeValue("black.300", "#999FFF");



  useEffect(() => {
      setUri(menu);
  }, [menu]);

  return (
    <Layout bgColor={bgColor} url={uri} toggleColorMode={toggleColorMode} colorMode={useColorMode} txtColor={txtColor}>
      {/* {showMenu(uri)} */}
    </Layout>
  );
}

const showMenu = (url) => {
  switch (url) {
    case "server":
      return <Server menu={url} />;
    case "tools":
      return <Tools menu={url} />;
    case "maps":
      return <Maps menu={url} />;
    case "class":
      return <Class menu={url} />;
    case "setting":
      return <Setting menu={url} />;
    default:
      return <Dashboard menu={url} />;
  }
};
