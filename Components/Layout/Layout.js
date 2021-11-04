import React, { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import Sidebar from "../Header/Sidebar";
import { useRouter } from "next/router";
import BottomBar from "../Header/BottomBar";

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
    <Flex pos="relative" direction={["column","row"]}>
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
        pos={"relative"}
        w="100%"
        h="full"
        zIndex={1}
        bgColor={!bgColor}
        opacity={1}
      >
        {props.children}
      </Box>
      <BottomBar
        bgColor={bgColor}
        toggleColorMode={toggleColorMode}
        txtColor={txtColor}
        colorMode={useColorMode().colorMode}
        url={uri}
      />
    </Flex>
  );
}
