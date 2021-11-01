import React, { useState } from "react";
import { Flex, Text, Switch, Badge } from "@chakra-ui/react";

export default function SwitchItem({
  navSize,
  title,
  active,
  bgColor,
  txtColor,
  colorMode,
  toggleColorMode,
}) {
  return (
    <Flex
      flexDir="column"
      w={ {base: "178px", md: "90px"} }
      alignItems={navSize == "small" ? "center" : "flex-start"}
      position="relative"
      textAlign="right"
    >
      <Badge
        position="absolute"
        top="-14px"
        right="1px"
        colorScheme="linkedin"
        fontSize="0.5em"
      >
        mode baca
      </Badge>
      <Flex
        backgroundColor={active && colorMode != "white" ? "#222" : !bgColor}
        borderRadius={8}
        w={navSize == "large" && "100%"}
      >
        <Switch 
        position="absolute" 
        right="1px" 
        size="sm" 
        onChange={toggleColorMode} 
        colorScheme="blue" 
        isChecked={colorMode == "dark" ? false : true} />
        <Text
          position="absolute"
          bottom="-22px"
          right="1px"
          ml={2}
          display={navSize == "small" ? "none" : "flex"}
          color={active && colorMode !== "dark" ? "#999FFF" : !txtColor}
          fontSize="9px"
          opacity="50%"
          w="90px"
          justifyContent="end"
        >
          {title}
        </Text>
      </Flex>

    </Flex>
  );
}
