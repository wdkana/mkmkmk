import React, { useState } from "react";
import {
  Flex,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Box,
} from "@chakra-ui/react";
import { FaBars, FaServer, FaTools, FaHome, FaWpexplorer, FaProjectDiagram, FaChartLine, FaBook, FaLink, FaThumbtack } from "react-icons/fa";
import NavItem from "./NavItem";
import SwitchItem from "./SwitchItem";
import { motion } from "framer-motion";

export default function Sidebar(props) {

  const MotionFlex = motion(Flex);

  const dataNav = [
    { id: 1, value: 'dashboard', title: 'Dashboard', url: 'dashboard', icon: FaHome },
    { id: 2, value: 'explore', title: 'Explore', url: 'explore', icon: FaWpexplorer },
    { id: 3, value: 'project', title: 'Project', url: 'project', icon: FaProjectDiagram },
    { id: 4, value: 'peyimpanan', title: 'Peyimpanan', url: 'peyimpanan', icon: FaServer },
    { id: 5, value: 'karir', title: 'Karir', url: 'karir', icon: FaChartLine },
  ]

  const dataSubNav = [
    { id: 1, value: 'library', title: 'Library', url: 'library', icon: FaBook },
    { id: 2, value: 'link', title: 'Link', url: 'link', icon: FaLink },
    { id: 3, value: 'pinned', title: 'Pinned', url: 'pinned', icon: FaThumbtack },
    { id: 4, value: 'pengaturan', title: 'Pengaturan', url: 'pengaturan', icon: FaTools },
  ]

  const variants = {
    visible: {
      x: 0,
      opacity: 1,
      width: props.navSize == "small" ? 90 : "auto",
      transition: {
        delayChildren: 0.1,
        staggerDirection: -1,
        type: "spring",
      },
      
    },
    hidden: { 
      x: 20,
      opacity: 0,
      transition: {
        delayChildren: 0.1,
        staggerDirection: -1,
        type: "spring",
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <MotionFlex
      pos="sticky"
      top={6}
      left={2}
      h={{ base: "88.75vh", md: "92.75vh", lg: "92.75vh" }}
      marginTop={{ base: "24px", md: 0, lg: 0 }}
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
      borderRadius={"8px"}
      w={props.navSize == "small" ? "90px" : { base: "90%", md: "auto" }}
      bgColor={props.bgColor}
      flexDir="column"
      justify="space-between"
      p={15}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <MotionFlex
        p="2%"
        w={props.navSize == "small" ? "auto" : "auto"}
        flexDir="column"
        alignItems={props.navSize == "small" ? "center" : "flex-start"}
        as="nav"
        height="100%"
        variants={item}
        size={10}
      >

        <IconButton
          background="none"
          fontSize={{ base: 14, md: 22 }}
          my={3}
          _hover={{ background: "none" }}
          icon={<FaBars />}
          onClick={() => {
            props.navSize == "small"
              ? props.onChangeNavSize("large")
              : props.onChangeNavSize("small");
          }}
        />

        <Divider />

        <Box my="auto" w="100%">
          {dataNav.map((data, i) =>
            <Box key={i}>
              <NavItem
                active={props.url == data.value ? true : false}
                navSize={props.navSize}
                title={data.title}
                icon={data.icon}
                uri={data.url}
                bgColor={props.bgColor}
                txtColor={props.txtColor}
                colorMode={props.colorMode}
              />
            </Box>
          )}

          <Divider my={4} />


          {dataSubNav.map((data, i) =>
            <Box key={i}>
              <NavItem
                key={i}
                active={props.url == data.value ? true : false}
                navSize={props.navSize}
                title={data.title}
                icon={data.icon}
                uri={data.url}
                bgColor={props.bgColor}
                txtColor={props.txtColor}
                colorMode={props.colorMode}
              />
            </Box>
          )}
        </Box>

      </MotionFlex>

      <MotionFlex
        flexDir="column"
        w="100%"
        alignItems={props.navSize == "small" ? "center" : "flex-start"}
        mb={5}
        variants={item}
        size={10}
      >
        <Divider />
        <Flex mt={4} align="center" size="sm" w="100%" justifyContent="center">
          <Avatar size="sm" src="coding.jpg" />
          <Flex
            flexdir="column"
            ml={2}
            display={props.navSize == "small" ? "none" : "flex"}
          >
            <Heading fontSize="0.7em" w="100%" my="auto" colorScheme>
              Hi, Cuy!
            </Heading>

            <SwitchItem
              navSize={props.navSize}
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
      </MotionFlex>
    </MotionFlex>
  );
}
