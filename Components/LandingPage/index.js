import {
  Center,
  Stack,
  InputGroup,
  Input,
  Wrap,
  WrapItem,
  InputLeftAddon,
  HStack,
  PinInput,
  PinInputField,
  Box,
  Button,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

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
  return (
    <Box p={5}>
      <Center w="100%" h="100vh" color="white">
        <Stack spacing={4}>
          <Wrap>
            <WrapItem w={["100%", "100%", 350, 450, 450, 500]}>
              <InputGroup size="lg">
                <InputLeftAddon children="mejakerja.com/" />
                <Input type="search" placeholder="username" />
              </InputGroup>
            </WrapItem>
            <WrapItem w={["100%", "100%", 125, 150, 150, 175]}>
              <Button
                w="100%"
                size="lg"
                isLoading={false}
                colorScheme="messenger"
                loadingText="Mendaftar"
                rightIcon={<FaArrowRight />}
              >
                Mulai
              </Button>
            </WrapItem>
          </Wrap>
        </Stack>
      </Center>
    </Box>
  );
}
