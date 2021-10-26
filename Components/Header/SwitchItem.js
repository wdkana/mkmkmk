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
      mt={1}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Flex
        backgroundColor={active && colorMode != "white" ? "#222" : !bgColor}
        p={3}
        borderRadius={8}
        _hover={{ textDecor: "none", backgroundColor: bgColor }}
        w={navSize == "large" && "100%"}
      >
        <Switch size="sm" onChange={toggleColorMode} colorScheme="blue" />
        <Text
          ml={2}
          display={navSize == "small" ? "none" : "flex"}
          color={active && colorMode !== "dark" ? "#999FFF" : !txtColor}
          fontSize="0.3em"
        >
          {title}
        </Text>
      </Flex>
      <Badge colorScheme="linkedin" fontSize="0.5em">
        mode baca
      </Badge>
    </Flex>
  );
}
