import React, { useEffect } from "react";
import { Container, Flex, Text, Heading, VStack } from "@chakra-ui/react";

export default function ServerComponent(props) {
  return (
    <Container maxW="container.xl" p={5}>
      <Flex
        h="100vh"
        p={0}
        direction={{ base: "column", xl: "row" }}
        spacing={10}
      >
        <VStack
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          bg={props.bgColor}
        >
          <Heading size="2xl">Testing nomor 1</Heading>
          <Text>Hello worlds</Text>
        </VStack>
        <VStack
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          bg={props.bgColor}
        >
          <Heading size="2xl">Testing nomor 2</Heading>
          <Text>Hello worlds</Text>
        </VStack>
      </Flex>
    </Container>
  );
}
