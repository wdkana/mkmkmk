import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import { useRouter } from "next/router";
import Dashboard from "../Components/Content/Dashboard";
import Explore from "../Components/Content/Explore";
import Tools from "../Components/Content/Tools";
import Maps from "../Components/Content/Maps";
import Class from "../Components/Content/Class";
import Setting from "../Components/Content/Setting";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function IndexPage() {
  const router = useRouter();
  const { menu } = router.query;
  const [uri, setUri] = useState("");
  const [navSize, changeNavSize] = useState("small");

  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const txtColor = useColorModeValue("black.300", "#999FFF");

  useEffect(() => {
    setUri(menu);
  }, [menu]);

  const onChangeNavSize = (data) => {
    changeNavSize(data);
  };

  return (
    <Layout
      bgColor={bgColor}
      url={uri}
      toggleColorMode={toggleColorMode}
      colorMode={useColorMode}
      txtColor={txtColor}
      onChangeNavSize={onChangeNavSize}
      navSize={navSize}
    >
      {showMenu(uri)}
    </Layout>
  );
}

const showMenu = (url) => {
  switch (url) {
    case "dashboard":
      return <Dashboard menu={url} />;
    case "explore":
      return <Explore menu={url} />;
    case "project":
      return <Tools menu={url} />;
    case "peyimpanan":
      return <Maps menu={url} />;
    case "karir":
      return <Class menu={url} />;
    case "library":
      return <Setting menu={url} />;
    case "link":
      return <Setting menu={url} />;
    case "pinned":
      return <Setting menu={url} />;
    case "pengaturan":
      return <Setting menu={url} />;

    default:
      break
  }
};
