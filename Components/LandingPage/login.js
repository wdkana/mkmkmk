import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  Text,
  Link,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const new_pin = () => {
  return (
    <HStack>
      <Flex w="50%" mx="auto" mt={2}>
        <PinInput
          type="number"
          size="lg"
          focusBorderColor="blue.400"
          variant="flushed"
          isRequired
          mask
          autoFocus
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </Flex>
    </HStack>
  );
};

export default function Login() {
  const [mode, setMode] = useState("dark");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nowMode = useColorMode().colorMode;
  useEffect(() => {
    setMode(nowMode);
  }, []);

  const enter_pin = () => {
    return (
      <Flex w={["100%", "100%"]} mx="auto">
        <Button
          boxShadow="lg"
          mx="auto"
          w={["xl", "lg", "md"]}
          isLoading={false}
          colorScheme="messenger"
          bgColor={mode == "dark" ? "blue.900" : "blue.900"}
          color={mode == "dark" ? "whiteAlpha.900" : "whiteAlpha.900"}
          loadingText="memeriksa key"
          onClick={onOpen}
        >
          Masuk
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="slideInBottom"
          size="full"
        >
          <ModalOverlay />
          <ModalContent w={["xl", "lg"]} mx="auto">
            <ModalHeader>Masukan PIN</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{new_pin()}</ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    );
  };

  return (
    <Box bgGradient="linear(to-r, black, gray.900)" h="100vh">
      <Box position="relative" top={280}>
        <Flex p={5} w="100%">
          <Textarea
            isFullWidth={true}
            width="100%"
            placeholder="---tempel atau masukan PRIVATE KEY disini---"
            size="lg"
            variant="flushed"
            color={mode == "dark" ? "black.500" : "gray.400"}
            resize="horizontal"
          />
        </Flex>
        <Flex p={5} w="100%">
          {enter_pin()}
        </Flex>
        <Flex p={5}>
          <Text w="100%" fontSize="sm" align="center" color="whiteAlpha.700">
            Belum punya akun?{" "}
            <Link href="/">
              <u>Daftar disini</u>
            </Link>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
