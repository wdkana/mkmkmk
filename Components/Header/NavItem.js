import React, { useState } from "react";
import { Flex, Text, MenuButton, Menu, Link, Icon } from "@chakra-ui/react";
import {text_responsive, icon_responsive } from "../../styles/responsive"

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
      mt={[0,2]}
      flexDir="column"
      w="100%"
      h={["full","auto"]}
      justifyContent={["center"]}
      alignItems={["center",navSize == "small" ? "center" : "flex-start"]}
    >
      <Menu>
        <Link
          display="flex"
          justifyContent="center"
          alignItems="center"
          // backgroundColor={active && colorMode != "white" ? "#222" : !bgColor}
          px={[2,3]}
          py={[2,1]}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: bgColor }}
          w={navSize == "large" && "100%"}
          href={uri == "setting" ? "" : "/dashboard/" + uri}
        >
          <MenuButton w="100%">
            <Flex h={["full","auto"]} w={["full","auto"]} justifyContent="center" alignItems="center">
              <Icon
                fontSize={icon_responsive}
                opacity={active ? "100%" : "45%" }
                color={active ? "#999FFF" : !bgColor}
                fontWeight={active ? "bold" : "normal"}
                as={icon}
              />
              <Text
                ml={5}
                display={["none",navSize == "small" ? "none" : "flex"]}
                whiteSpace="nowrap"
                opacity={active ? "100%" : "45%" }
                fontWeight={active ? "bold" : "normal"}
                color={active && colorMode !== "dark" ? "#999FFF" : !txtColor}
                fontSize={text_responsive}
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
