import React, { useState } from "react";

import {
  Container,
  Flex,
  Badge,
  Heading,
  VStack,
} from "@chakra-ui/react";

import Clock from "../../lib/clock";

export default function DashboardComponent(props) {
  const Grid1 = () => {
    return (
      <VStack
        w="full"
        h="100%"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg={props.bgColor}
        border="1px solid #fff"
      >
        <Heading size="xl">
          Meja Kerja
          <Badge
            mb={5}
            ml={2}
            fontSize="0.4em"
            variant="solid"
            colorScheme="purple"
          >
            {" "}
            DEA
          </Badge>
          <Clock />
        </Heading>
      </VStack>
    );
  };
  
  return (
    <Container maxW="95%" p={5}>
      <Flex
        h="95vh"
        w="100%"
        p={0}
        m={0}
        direction={{ base: "column", xl: "row" }}
        spacing={10}
        border="1px solid #fff"
      >
        {Grid1()}
      </Flex>
    </Container>
  );
}
