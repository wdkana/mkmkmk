import React, { useState } from "react";

import {
  Container,
  Flex,
  Box,
  Text,
  SimpleGrid,
  IconButton,
  Divider,
  Stack,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
export default function ToolsComponent() {
  return (
    <Flex
      p="2%"
      h="97.5vh"
      w="87.5%"
      marginTop="1.75vh"
      border="1px solid #222"
      flexDir="column"
      ml={6}
    >
      <SimpleGrid columns={2} spacing={10} border="1px solid #222">
        <Box bg="green" height="30vh"></Box>
        <Box bg="green" height="30vh"></Box>
        <Box bg="green" height="30vh"></Box>
        <Box bg="green" height="30vh"></Box>
      </SimpleGrid>
    </Flex>
  );
}
