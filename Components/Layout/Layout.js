import React, { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import Sidebar from "../Header/Sidebar";
import { useRouter } from "next/router";

export default function Layout(props) {
  const router = useRouter();
  const { menu } = router.query;
  const [uri, setUri] = useState("");
  const [navSize, changeNavSize] = useState("small");

  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.200", "#5c5f65");
  const txtColor = useColorModeValue("black.300", "#999FFF");

  useEffect(() => {
    const pathName = router.pathname.split('/')
    setUri(menu??pathName[1]);
  }, [router]);

  const onChangeNavSize = (data) => {
    changeNavSize(data);
  };

  return (
    <Flex pos="relative">
      <Sidebar
        bgColor={bgColor}
        toggleColorMode={toggleColorMode}
        txtColor={txtColor}
        colorMode={useColorMode().colorMode}
        url={uri}
        onChangeNavSize={onChangeNavSize}
        navSize={navSize}
      />
      <Box
        pos={[navSize == "small" ? "relative" : "absolute", "relative"]}
        w="100%"
        maxH="100vh"
        overflow="auto scroll"
        zIndex={1}
        bgColor={!bgColor}
        opacity={[navSize == "small" ? 1 : .3, 1]}
      >
        {props.children}
      </Box>
    </Flex>
  );
}
