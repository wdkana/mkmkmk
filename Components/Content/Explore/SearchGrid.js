import React, { useEffect, useState } from "react";
import {
    Flex,
    Box,
    Divider,
    InputGroup,
    Input,
    InputRightElement
} from "@chakra-ui/react";
// import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import {
    motion,
} from "framer-motion";
import { animations } from "../../../lib/animations";
import { FaSearch } from "react-icons/fa";

export default function SearchGridComponent(props) {
    //   const { toggleColorMode } = useColorMode();
    console.log("props", props);

    const [firstLoad, setFristLoad] = useState(0);

    const MotionFlex = motion(Flex);

    return (
        <MotionFlex
            w="full"
            h="100%"
            p={[4, 4, 4, 6]}
            alignItems="flex-start"
            bgColor={props.bgColor}
            textColor={props.txtColor}
            rounded={`xl`}
            justifyContent="space-between"
            // toggleColorMode={toggleColorMode}
            shadow={"md"}
            initial={firstLoad < 1 ? animations.destopOffBottom : false}
            animate={animations.desktopOn}
            transition={{
                type: "spring",
                bounce: 0.5,
                delay: 0.2,
                duration: 1.5,
            }}
            onAnimationComplete={() => {
                setFristLoad(firstLoad + 1);
            }}
        >
            <Box my="auto" w="100%" fontWeight={"bold"} fontSize={["lg", "xl", "xl", "3xl"]}>
            <InputGroup>
            <Input
              focusBorderColor={props.bgColorContent}
              borderColor={props.bgColorContent}
              border="solid 2px"
              size="lg"
              variant="outline"
              placeholder="Search Aplikasi ...."
              borderRadius="18px"
              colorScheme="red"
            />
            <InputRightElement children={<FaSearch size={18} color="green.500" />} />
          </InputGroup>
            </Box>
        </MotionFlex>
    );
}
