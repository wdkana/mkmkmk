import React, { useState, useEffect } from "react";
import {
  Center,
  InputGroup,
  Input,
  Wrap,
  WrapItem,
  InputLeftAddon,
  HStack,
  PinInput,
  PinInputField,
  Box,
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  Text,
  AlertDescription,
  AlertDialogFooter,
  Divider,
  Button,
  Link,
} from "@chakra-ui/react";
import { Link as ReachLink } from "@reach/router";
import { FaArrowRight } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

const new_pin = () => {
  return (
    <HStack>
      <PinInput type="alphanumeric" mask>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  );
};

export default function LandingPage() {
  const [mode, setMode] = useState("dark");
  const nowMode = useColorMode().colorMode;
  useEffect(() => {
    setMode(nowMode);
  }, []);

  return (
    <Box bgGradient="linear(to-r, gray.800, blue.900)" h="100vh">
      <Box position="relative" top={280}>
        <Flex p={5} my="auto">
          <Center w="100%">
            <Wrap>
              <WrapItem
                boxShadow="lg"
                rounded="lg"
                w={["100%", "100%", 350, 450, 450, 500]}
              >
                <InputGroup size="lg">
                  <InputLeftAddon children="mejakerja.com/" />
                  <Input
                    type="search"
                    placeholder="username"
                    color="white"
                  />
                </InputGroup>
              </WrapItem>
              <WrapItem w={["100%", "100%", 125, 150, 150, 175]}>
                <Button
                  boxShadow="lg"
                  w="100%"
                  size="lg"
                  isLoading={false}
                  colorScheme="messenger"
                  bgColor={mode == "dark" ? "blue.600" : "blue.600"}
                  color={mode == "dark" ? "whiteAlpha.900" : "whiteAlpha.900"}
                  loadingText="Mendaftar"
                  rightIcon={<FaArrowRight />}
                >
                  Mulai
                </Button>
              </WrapItem>
            </Wrap>
          </Center>
        </Flex>
        <Flex pl={5} pr={5} my="auto">
          <Center w="100%">
            <Alert
              status="info"
              w={["100%", 525, 490, 610, 610, 690]}
              boxShadow="xl"
              rounded="md"
              bgColor={mode == "dark" ? "gray.700" : "whiteAlpha.800"}
              color="gray.700"
            >
              <AlertIcon />
              <AlertTitle mr={2}>mejamu mejaku meja kita semua.</AlertTitle>
              <AlertDescription whiteSpace="nowrap" w="100%" align="right">
                <Link as={ReachLink} to="/explore" ml={1}>
                  <u>masuk</u>
                </Link>
                <small> atau </small>
                <Link as={ReachLink} to="/explore" mr={1}>
                  <u>
                    <i>explore</i>
                  </u>
                </Link>
              </AlertDescription>
            </Alert>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
}
