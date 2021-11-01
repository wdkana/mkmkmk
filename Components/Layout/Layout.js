import React, { useEffect, useState } from 'react'
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../Header/Sidebar";

export default function Layout(props) {
  const [url, setUrl] = useState("")
  useEffect(() => {
    setUrl(props.url)
  }, [props.url])

  return (
    <Flex>
      <Sidebar
        bgColor={props.bgColor}
        toggleColorMode={props.toggleColorMode}
        txtColor={props.txtColor}
        colorMode={props.colorMode().colorMode}
        url={url}
        onChangeNavSize={props.onChangeNavSize}
        navSize={props.navSize}
      />
      <Box
        display={props.navSize == "small" ? "block" : { base: "none", md: "block" }}
        w="100%"
        maxH="100vh"
        overflow="auto scroll">
        {props.children}
      </Box>
    </Flex>
  );
}
