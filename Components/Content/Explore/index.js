import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import {
  motion,
} from "framer-motion";
import { animations } from "../../../lib/animations";
import SideGrid from "./SideGrid";
import SearchGrid from "./SearchGrid"

export default function ExploreComponent(props) {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.200", "#5c5f65");
  const bgColorContent = useColorModeValue("gray.300", "gray.400");
  const txtColor = useColorModeValue("black.300", "gray.50");
  console.log("props", props);

  const [firstLoad, setFristLoad] = useState(0);
  const [activeTag, setActiveTag] = useState(false)

  const MotionFlex = motion(Flex);

  const DummGrid = () => {
    return (
      <MotionFlex
        w="full"
        h="100%"
        p={[4, 4, 4, 6]}
        alignItems="flex-start"
        bgColor={bgColor}
        textColor={txtColor}
        rounded={`xl`}
        justifyContent="space-between"
        toggleColorMode={toggleColorMode}
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
        <Box w="100%" fontWeight={"bold"} fontSize={["lg", "xl", "xl", "3xl"]}>
          dummy
        </Box>
      </MotionFlex>
    );
  };

  const onChangeOpenTags = (data) => {
    console.log(data)
    setActiveTag(data)
  }


  return (
    <Container
      maxW="100%"
      mt={5}
      pos="relative"
      minH="95vh"
      w="100%"
      bgCp
    >

      <Box w="100%">
        <SearchGrid bgColor={bgColor} txtColor={txtColor} bgColorContent={bgColorContent} />
      </Box>
      <Box w="100%" mt={2}>
        {DummGrid()}
      </Box>
      <Box w="100%" mt={2}>
        {DummGrid()}
      </Box>

      <SideGrid bgColor={bgColor} txtColor={txtColor} activeTag={activeTag} onChangeOpenTags={onChangeOpenTags} />
    </Container>
  );
}
