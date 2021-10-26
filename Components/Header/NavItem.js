import React, { useState } from "react";
import { Flex, Text, MenuButton, Menu, Link, Icon } from "@chakra-ui/react";

export default function NavItem({
  navSize,
  title,
  icon,
  active,
  uri,
  bgColor,
  txtColor,
  colorMode,
}) {
  return (
    <Flex
      mt={2}
      flexDir="column"
      w="101%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu>
        <Link
          backgroundColor={active && colorMode != "white" ? "#222" : !bgColor}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: bgColor }}
          w={navSize == "large" && "100%"}
          href={uri == "setting" ? "" : "/" + uri}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                fontSize="sm"
                color={active ? "#999FFF" : !bgColor}
                as={icon}
              />
              <Text
                ml={5}
                display={navSize == "small" ? "none" : "flex"}
                whiteSpace="nowrap"
                color={active && colorMode !== "dark" ? "#999FFF" : !txtColor}
                fontSize="0.4em"
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
