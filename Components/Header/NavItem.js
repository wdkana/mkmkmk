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
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu>
        <Link
          // backgroundColor={active && colorMode != "white" ? "#222" : !bgColor}
          px={3}
          py={2}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: bgColor }}
          w={navSize == "large" && "100%"}
          href={uri == "setting" ? "" : "/" + uri}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                fontSize={{ base: 14, md: 22 }}
                opacity={active ? "100%" : "45%" }
                color={active ? "#999FFF" : !bgColor}
                fontWeight={active ? "bold" : "normal"}
                as={icon}
              />
              <Text
                ml={5}
                display={navSize == "small" ? "none" : "flex"}
                whiteSpace="nowrap"
                opacity={active ? "100%" : "45%" }
                fontWeight={active ? "bold" : "normal"}
                color={active && colorMode !== "dark" ? "#999FFF" : !txtColor}
                fontSize={{ base: 12, md: 16 }}
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
