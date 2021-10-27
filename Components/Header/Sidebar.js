import React, { useState } from "react";
import {
  Flex,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Center,
  Box,
  Switch,
  Text,
} from "@chakra-ui/react";
import { FiMenu, FiHome } from "react-icons/fi";
import { FaServer, FaTools, FaMap, FaFileCode, FaCode } from "react-icons/fa";
import NavItem from "./NavItem";
import SwitchItem from "./SwitchItem";

export default function Sidebar(props) {
  const [navSize, changeNavSize] = useState("small");

  const dataNav = [
    { id: 1, value: 'dashboard', title: 'Dashboard', url: 'dashboard', icon: FiHome },
    { id: 2, value: 'server', title: 'Server ($)', url: 'server', icon: FaServer },
    { id: 3, value: 'tools', title: 'Tools (#)', url: 'tools', icon: FaTools },
    { id: 4, value: 'maps', title: 'Maps (x,y)', url: 'maps', icon: FaMap },
    { id: 5, value: 'class', title: 'Class (@)', url: 'class', icon: FaFileCode },
    { id: 6, value: 'dummy-1', title: 'Dummy - 1 (@)', url: 'dummy-1', icon: FaFileCode },
    { id: 7, value: 'dummy-2', title: 'Dummy - 2 (@)', url: 'dummy-2', icon: FaFileCode },
    { id: 8, value: 'dummy-3', title: 'Dummy - 3 (@)', url: 'dummy-4', icon: FaFileCode },
  ]

  const dataSubNav = [
    { id: 5, value: 'class', title: 'Class (@)', url: 'class', icon: FaFileCode },
    { id: 6, value: 'dummy-1', title: 'Dummy - 1 (@)', url: 'dummy-1', icon: FaFileCode },
    { id: 7, value: 'dummy-2', title: 'Dummy - 2 (@)', url: 'dummy-2', icon: FaFileCode },
    { id: 8, value: 'dummy-3', title: 'Dummy - 3 (@)', url: 'dummy-4', icon: FaFileCode },
  ]



  return (
    <Flex
      pos="sticky"
      left={2}
      h="97.75vh"
      marginTop="1.25vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
      borderRadius={"8px"}
      w={navSize == "small" ? "90px" : { base: "90%", md: "auto" }}
      bgColor={props.bgColor}
      flexDir="column"
      justify="space-between"
      p={15}
    >
      <Flex
        p="2%"
        w={navSize == "small" ? "auto" : "auto"}
        flexDir="column"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
        height="100%"
      >

        <IconButton
          background="none"
          my={3}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            navSize == "small"
              ? changeNavSize("large")
              : changeNavSize("small");
          }}
        />

        <Divider />

        <Box my="auto">
          {dataNav.map((data, i) =>
            <NavItem
              active={props.url == data.value ? true : false}
              navSize={navSize}
              title={data.title}
              icon={data.icon}
              uri={data.url}
              bgColor={props.bgColor}
              txtColor={props.txtColor}
              colorMode={props.colorMode}
            />
          )}

          <Divider my={4} />


          {dataSubNav.map((data, i) =>
            <NavItem
              active={props.url == data.value ? true : false}
              navSize={navSize}
              title={data.title}
              icon={data.icon}
              uri={data.url}
              bgColor={props.bgColor}
              txtColor={props.txtColor}
              colorMode={props.colorMode}
            />
          )}
        </Box>

      </Flex>

      <Flex
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={5}
      >
        <Divider />
        <Flex mt={4} align="center" size="sm" w="100%" justifyContent="center">
          <Avatar size="sm" src="coding.jpg" />
          <Flex
            flexdir="column"
            ml={2}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading fontSize="0.7em" w="100%" my="auto" colorScheme>
              Hi, Cuy!
            </Heading>

            <SwitchItem
              navSize={navSize}
              title={
                props.colorMode === "light" ? "Selamat Pagi 🤗" : "Selamat Malam 😴"
              }
              bgColor={props.bgColor}
              txtColor={props.txtColor}
              colorMode={props.colorMode}
              toggleColorMode={props.toggleColorMode}
            />

          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
