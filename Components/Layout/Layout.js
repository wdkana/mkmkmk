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
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const txtColor = useColorModeValue("black.300", "#999FFF");

  useEffect(() => {
    const pathName = router.pathname.split('/')
    setUri(menu??pathName[1]);
  }, [router]);

  const onChangeNavSize = (data) => {
    changeNavSize(data);
  };

  return (
    <Flex>
      <Sidebar
        bgColor={bgColor}
        toggleColorMode={toggleColorMode}
        txtColor={txtColor}
        colorMode={useColorMode}
        url={uri}
        onChangeNavSize={onChangeNavSize}
        navSize={navSize}
      />
      <Box
        display={
          props.navSize == "small" ? "block" : { base: "none", md: "block" }
        }
        w="100%"
        maxH="100vh"
        overflow="auto scroll"
      >
        {props.children}
      </Box>
    </Flex>
  );
}
