import React, { useState } from "react";
import {
  Flex,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Box,
  Switch,
  Text,
} from "@chakra-ui/react";
import { FiMenu, FiHome } from "react-icons/fi";
import { FaServer, FaTools, FaMap, FaFileCode } from "react-icons/fa";
import NavItem from "./NavItem";
import SwitchItem from "./SwitchItem";

export default function Sidebar(props) {
  const [navSize, changeNavSize] = useState("small");
  return (
    <Flex
      pos="sticky"
      left={2}
      h="100%"
      marginTop="1.25vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "90px" : "auto"}
      bgColor={props.bgColor}
      flexDir="column"
      justify="space-between"
    >
      <Flex
        p="2%"
        w={navSize == "small" ? "auto" : "auto"}
        flexDir="column"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            navSize == "small"
              ? changeNavSize("large")
              : changeNavSize("small");
          }}
        />

        <NavItem
          active={props.url == "dashboard" ? true : false}
          navSize={navSize}
          title="Dashboard"
          icon={FiHome}
          uri="dashboard"
          bgColor={props.bgColor}
          txtColor={props.txtColor}
          colorMode={props.colorMode}
        />

        <NavItem
          active={props.url == "server" ? true : false}
          navSize={navSize}
          title="Server ($)"
          icon={FaServer}
          uri="server"
          bgColor={props.bgColor}
          txtColor={props.txtColor}
          colorMode={props.colorMode}
        />

        <NavItem
          active={props.url == "tools" ? true : false}
          navSize={navSize}
          title="Tools (#)"
          icon={FaTools}
          uri="tools"
          bgColor={props.bgColor}
          txtColor={props.txtColor}
          colorMode={props.colorMode}
        />

        <NavItem
          active={props.url == "maps" ? true : false}
          navSize={navSize}
          title="Maps (x,y)"
          icon={FaMap}
          uri="maps"
          bgColor={props.bgColor}
          txtColor={props.txtColor}
          colorMode={props.colorMode}
        />

        <NavItem
          active={props.url == "class" ? true : false}
          navSize={navSize}
          title="Class (@)"
          icon={FaFileCode}
          uri="class"
          bgColor={props.bgColor}
          txtColor={props.txtColor}
          colorMode={props.colorMode}
        />

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

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={5}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center" size="sm">
          <Avatar size="sm" src="coding.jpg" />
          <Flex
            flexdir="column"
            ml={2}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading fontSize="0.7em" colorScheme>
              Hi, Cuy!
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
