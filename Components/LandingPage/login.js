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
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  HStack,
  Text,
  Link,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { connect } from "react-redux";
import Cookies from 'universal-cookie';
import { thunk_login_user, thunk_login_default } from "../../middleware/user/login/loginMiddleware"

const Login = (props) => {

  const [mode, setMode] = useState("dark");
  const [privateKey, setPrivateKey] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nowMode = useColorMode().colorMode;

  useEffect(() => {
    setMode(nowMode);
    if(props.loginReducer.user !== null){
      if(props.loginReducer.user.private_key === privateKey){
        const cookies = new Cookies()
        cookies.set('private_key', props.loginReducer.user.private_key, { path: '/' })
        cookies.set('public_key', props.loginReducer.user.public_key, { path: '/' })
        window.location.href = "/dashboard"
      } 
    }
  }, [props.loginReducer.user]);

  const privateUser = (data) => {
    setPrivateKey(data)
  }

  const LoginUser = (e) => {
    if( e.length === 6){
      const dataLogin = {
        private_key: privateKey,
        pin: parseInt(e)
      }
      props.onLogin(dataLogin, window.location.origin)
    }else{
      return false
    }
  }

  const defaultLogin = () => {
    props.onDefault()
  }

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
          isCentered
        >
          <ModalOverlay />
          <ModalContent w={["xl", "lg"]} mx="auto">
            <ModalHeader>Masukan PIN</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              { props.loginReducer.isError ? props.loginReducer.messageError : 
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
                      onChange={ (e) => LoginUser(e) }
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
              }
            </ModalBody>
            <ModalFooter>
            { props.loginReducer.isError ? 
                <Button onClick={ defaultLogin }>Masukan kembali pin</Button> : false }
            </ModalFooter>
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
            width="100%"
            placeholder="---tempel atau masukan PRIVATE KEY disini---"
            size="lg"
            variant="flushed"
            color={mode == "dark" ? "black.500" : "gray.400"}
            resize="horizontal"
            onChange={ (e) => privateUser(e.target.value) }
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

const mapStateToProps = state => {
  return {
    loginReducer: state.LoginReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (data, url) => { dispatch(thunk_login_user(data, url)) },
    onDefault: () => { dispatch(thunk_login_default()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);