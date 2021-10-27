import React, {useEffect, useState} from 'react'
import { Flex } from "@chakra-ui/react";
import Sidebar from "../Header/Sidebar";

export default function Layout(props) {
  const [url, setUrl] = useState("")
  useEffect(() => {
    setUrl(props.url)
  }, [props.url])

  return (
    <Flex>
      <Sidebar
        // bgColor={props.bgColor}
        toggleColorMode={props.toggleColorMode}
        txtColor={props.txtColor}
        colorMode={props.colorMode().colorMode}
        url={url}
      />
      {props.children}
    </Flex>
  );
}
