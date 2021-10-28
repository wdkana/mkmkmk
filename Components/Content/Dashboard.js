import React, { useState } from "react";
import { FiChevronRight, FiBell } from "react-icons/fi";
import {
  Container,
  Flex,
  Badge,
  Heading,
  VStack,
  HStack,
  Grid,
  GridItem,
  Box,
  forwardRef,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { animations } from "../../lib/animations";

import Clock from "../../lib/clock";

export default function DashboardComponent(props) {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.200", "#5c5f65");
  const bgColorContent = useColorModeValue("gray.300", "gray.400");
  const txtColor = useColorModeValue("black.300", "gray.50");
  console.log("props", props);

  const animating = useAnimation();

  const MotionFlex = motion(Flex);

  const Grid1 = () => {
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
        initial={animations.destopOffBottom}
        animate={animations.desktopOn}
        transition={{
          type: "spring",
          bounce: 0.5,
          delay: 0.2,
          duration: 1.5,
        }}
      >
        <Box fontWeight={"bold"} fontSize={["lg", "xl", "xl", "3xl"]}>
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
        </Box>
      </MotionFlex>
    );
  };

  const Grid2 = () => {
    return (
      <MotionFlex
        initial={animations.destopOffBottom}
        animate={animations.desktopOn}
        transition={{
          type: "spring",
          bounce: 0.5,
          delay: 0.1,
          duration: 1.5,
        }}
        justifyContent="space-between"
        alignItems="center"
        h="full"
        w="full"
        direction="column"
      >
        <Flex justifyContent="space-between" alignItems="center" w="full">
          <Box
            py={[2, 2, 2, 4]}
            px={[3, 3, 5]}
            bgColor={bgColor}
            textColor={txtColor}
            rounded="xl"
            w={["65%", "60%", "60%", "70%"]}
            shadow="md"
          >
            search bar
          </Box>
          <Box
            p={[2, 2, 2, 4]}
            bgColor={bgColor}
            textColor={txtColor}
            fontSize={["lg", "lg", "xl", "2xl"]}
            rounded="full"
            w="max"
            shadow="md"
          >
            <FiBell />
          </Box>
          <Box
            p={[2, 2, 2, 4]}
            bgColor={bgColor}
            textColor={txtColor}
            rounded="xl"
            w="max"
            shadow="md"
          >
            Ava
          </Box>
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          w="full"
          h={["100%"]}
          mt={[4, 4, 4, 6, 6]}
        >
          <Flex
            justifyContent={"space-around"}
            alignItems={"center"}
            px={[4, 2, 2, 4, 8]}
            bgColor={bgColor}
            textColor={txtColor}
            rounded="xl"
            w="50%"
            h="full"
            shadow="md"
          >
            <Flex
              fontWeight="extrabold"
              fontSize={["5xl", "5xl", "6xl"]}
              mr={2}
            >
              {"11"}
            </Flex>
            <Flex direction="column" justifyContent="center" w="full">
              <Box
                p={[1.5, 2, 2, 2.5]}
                bgColor={bgColorContent}
                rounded="md"
                w="90%"
                mb={2}
              ></Box>
              <Box
                p={[1.5, 2, 2, 2.5]}
                bgColor={bgColorContent}
                rounded="md"
                w="85%"
              ></Box>
            </Flex>
          </Flex>
          <Flex
            alignItems={"center"}
            px={[4, 2, 2, 4]}
            bgColor={bgColor}
            textColor={txtColor}
            rounded="xl"
            w="50%"
            h="full"
            shadow="md"
            ml={[4, 4, 4, 6, 6]}
          >
            <Flex
              fontWeight="extrabold"
              fontSize={["5xl", "5xl", "6xl"]}
              mr={2}
            >
              {"4"}
            </Flex>
            <Flex direction="column" justifyContent="center" w="full">
              <Box
                p={[1.5, 2, 2, 2.5]}
                bgColor={bgColorContent}
                rounded="md"
                w="90%"
                mb={2}
              ></Box>
              <Box
                p={[1.5, 2, 2, 2.5]}
                bgColor={bgColorContent}
                rounded="md"
                w="85%"
              ></Box>
            </Flex>
          </Flex>
        </Flex>
      </MotionFlex>
    );
  };

  const Grid3 = () => {
    return (
      <MotionFlex
        justifyContent="space-between"
        alignItems="center"
        p={[2, 2, 2, 4, 4]}
        bgColor={bgColor}
        w="full"
        h={["full"]}
        rounded="xl"
        shadow="md"
        initial={animations.destopOffBottom}
        animate={animations.desktopOn}
        transition={{
          type: "spring",
          bounce: 0.5,
          delay: 0.3,
          duration: 1.5,
        }}
      >
        <Flex justifyContent={"space-between"} w="50%" h="100%">
          <Flex
            justifyContent="center"
            alignItems="center"
            h="100%"
            w="40%"
            bgColor={bgColorContent}
            rounded="lg"
          ></Flex>
          <Flex
            w="50%"
            h="100%"
            direction="column"
            justifyContent="space-evenly"
          >
            <Flex
              alignItems="center"
              h="30%"
              w="80%"
              rounded="md"
              bgColor={bgColorContent}
            ></Flex>
            <Flex
              alignItems="center"
              h="20%"
              rounded="base"
              bgColor={bgColorContent}
            ></Flex>
          </Flex>
        </Flex>
        <Flex justifyContent="center" alignItems="center" w="25%" h="100%">
          <Flex
            justifyContent="center"
            alignItems="center"
            h="100%"
            w="full"
            bgColor={bgColorContent}
            textColor={txtColor}
            rounded="lg"
          >
            <Box display={["block", "none"]} fontSize={["5xl", "5xl", "6xl"]}>
              <FiChevronRight />
            </Box>
            <Box
              display={["none", "block"]}
              fontSize={["xl", "lg", "lg", "3xl"]}
            >
              {"More"}
            </Box>
          </Flex>
        </Flex>
      </MotionFlex>
    );
  };

  const Grid4 = () => {
    const data4 = [
      {
        app: "Figma",
        title: "Figma basic",
        aothor: "Jhon",
        hour: 3,
      },
      {
        app: "React",
        title: "React Hook",
        aothor: "Doe",
        hour: 3,
      },
      {
        app: "React",
        title: "React Basic",
        aothor: "Doe",
        hour: 2,
      },
      {
        app: "Tailwind CSS",
        title: "React Hook",
        aothor: "Doe",
        hour: 5,
      },
    ];

    return (
      <MotionFlex
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        h="auto"
        w="full"
        pt={[2, 2, 2, 4, 4]}
        px={[2, 2, 2, 4, 4]}
        bgColor={bgColor}
        rounded="xl"
        initial={animations.destopOffBottom}
        animate={animations.desktopOn}
        transition={{
          type: "spring",
          bounce: 0.5,
          delay: 0.4,
          duration: 1.5,
        }}
      >
        {data4.map((data, i) => (
          <MotionFlex
            key={i}
            w="full"
            h={[12, 12, 16, 16, 20]}
            justifyContent="space-between"
            alignItems="center"
            p={[2, 2, 2, 4, 4]}
            mb={[2, 2, 2, 4, 4]}
            bgColor={bgColorContent}
            rounded="lg"
            initial={animations.destopOffBottom}
            animate={animations.desktopOn}
            transition={{
              type: "spring",
              bounce: 0.5,
              delay: .4 + ((i+1) * .1),
              duration: 1.5,
            }}
          >
            <Flex></Flex>
          </MotionFlex>
        ))}
      </MotionFlex>
    );
  };

  return (
    <Container maxW="100%" mt={5}>
      <Grid
        minH="95vh"
        w="100%"
        p={0}
        m={0}
        // templateRows="repeat(4, 1fr)"
        templateColumns="repeat(8, 1fr)"
        // border="1px solid #fff"
        gap={[4, 4, 4, 6, 6]}
        overflow="hidden"
        gridAutoRows={["auto 100px auto", "auto 120px auto"]}
      >
        <GridItem
          colStart={[1, 1]}
          rowStart={[2, 1]}
          colEnd={{ base: 9, lg: 5, md: 5 }}
        >
          {Grid1()}
        </GridItem>
        <GridItem colStart={[1, 5]} rowStart={1} colEnd={9}>
          {Grid2()}
        </GridItem>
        <GridItem colStart={[1]} colEnd={[9, 5]} rowStart={[3, 2]}>
          {Grid3()}
        </GridItem>
        <GridItem colStart={1} colEnd={9}>
          {Grid4()}
        </GridItem>
      </Grid>
    </Container>
  );
}
