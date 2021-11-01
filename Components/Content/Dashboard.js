import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiChevronRight, FiBell } from "react-icons/fi";
import {
  Container,
  Flex,
  Badge,
  Grid,
  GridItem,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { animations } from "../../lib/animations";

import Clock from "../../lib/clock";
import { myLoader } from "../../lib/media";

export default function DashboardComponent(props) {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.200", "#5c5f65");
  const bgColorContent = useColorModeValue("gray.300", "gray.400");
  const txtColor = useColorModeValue("black.300", "gray.50");
  const skillRef = useRef()

  const [firstLoad, setFristLoad] = useState(0);

  const MotionFlex = motion(Flex);
  const MotioSimpleGrid = motion(SimpleGrid)

  const dataSkill = [
    {
      skill: "js",
      percent: 90,
      img: "/js.png"
    },
    {
      skill: "py",
      percent: 60,
      img: "/py.png"
    },
    {
      skill: "cpp",
      percent: 60,
      img: "/cpp.png"

    },
    {
      skill: "java",
      percent: 80,
      img: "/java.png"
    },
    {
      skill: "js",
      percent: 90,
      img: "/js.png"
    },
    {
      skill: "py",
      percent: 60,
      img: "/py.png"
    },
    {
      skill: "cpp",
      percent: 60,
      img: "/cpp.png"

    },
    {
      skill: "java",
      percent: 80,
      img: "/java.png"
    },
  ];

  const Grid1 = () => {
    return (
      <MotionFlex
        w="full"
        h={["168px", "168px", "full", "full"]}
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
        initial={firstLoad < 1 ? animations.destopOffBottom : false}
        animate={animations.desktopOn}
        transition={{
          type: "spring",
          bounce: 0.5,
          delay: 0.1,
          duration: 1.5,
        }}
        justifyContent="space-between"
        alignItems="center"
        h={["208px", "208px", "full", "full"]}
        w="full"
        direction="column"
        bgColor={bgColor}
        rounded="xl"
        overflow="hidden"
        p={[2]}
      >
        <Flex
          w="100%"
          h="100%"
          // bg="gray.900"
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          textColor={txtColor}
        >
          <Box
            as="div"
            h={[20]}
            w={[20]}
            rounded="full"
            overflow="hidden"
            shadow="lg"
          >
            <Image
              loader={myLoader}
              src={"/foto-al.jpeg"}
              layout="responsive"
              width={64}
              height={64}
              objectFit="cover"
            />
          </Box>
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Box fontWeight="semibold">{"Dea Afro aswesweswe"}</Box>
            <Box>{"Hola, Dea di sini"}</Box>
            <Box fontSize="xs">{"Saya adalah Fullstack JS Developer"}</Box>
          </Flex>
        </Flex>
      </MotionFlex>
    );
  };

  const Grid3 = () => {
    return (
      <MotionFlex
        // justifyContent="space-between"
        alignItems="start"
        h={["192px"]}
        initial={firstLoad < 1 ? animations.destopOffBottom : false}
        animate={animations.desktopOn}
        transition={{
          type: "spring",
          bounce: 0.5,
          delay: 0.3,
          duration: 1.5,
        }}
        position="relative"
        ref={skillRef}
      >
        <Box pl="2" pt="2">Skill</Box>
        <AnimatePresence>
          <MotioSimpleGrid
            h="160px"
            row={1}
            spacingX="2"
            gridAutoFlow="column"
            position="absolute"
            top="8"
            drag="x"
            dragConstraints={skillRef}
          >
            {dataSkill.map((skill, i) => {
              const colorBadge = ["green", "purple", "red", "blue", "yellow"]
              return (
                <MotionFlex
                  w="36"
                  h="full"
                  bgColor={bgColor}
                  rounded="xl"
                  shadow="md"
                  justifyContent="center"
                  alignItems="end"
                  pb="4"
                  pos="relative"
                  overflow="hidden"
                  initial={firstLoad < 1 ? animations.mobileOffLeft : false}
                  animate={animations.mobileOnLeft}
                  transition={{
                    type: "spring",
                    bounce: 0.5,
                    delay: .8 + (i / dataSkill.length),
                    duration: 1.5,
                  }}
                  exit={animations.mobileOffLeft}
                >
                  <Box w="24" h="24" rounded="lg" overflow="hidden">
                    <Image
                      src={skill.img}
                      loader={myLoader}
                      alt={skill.skill}
                      layout="responsive"
                      width="96px"
                      height="96px"
                    />
                  </Box>
                  <Badge variant="subtle" colorScheme={colorBadge[Math.floor(Math.random() * colorBadge.length)]} pos="absolute" right="2" top="2">
                    {skill.percent}%
                  </Badge>
                </MotionFlex>
              );
            })}
          </MotioSimpleGrid>
        </AnimatePresence>
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
        direction='column'
        initial={firstLoad < 1 ? animations.destopOffBottom : false}
        animate={animations.desktopOn}
        transition={{
          type: "spring",
          bounce: 0.5,
          delay: 0.4,
          duration: 1.5,
        }}
      >
        <Box pl={[2, 2, 2, 4, 4]} >Inspirasi mu</Box>
        <Flex
          justifyContent="space-around"
          // alignItems="stretch"
          flexWrap="wrap"
          h="auto"
          w="full"
          p={[2, 2, 2, 4, 4]}
          bgColor={bgColor}
          rounded="xl"
        >
          {data4.map((data, i) => (
            <MotionFlex
              key={i}
              // w="full"
              w={["full", "full", "32%", "32%"]}
              h={[12, 12, 16, 16, 20]}
              justifyContent="space-between"
              alignItems="center"
              p={[2, 2, 2, 4, 4]}
              mb={[2, 2, 2, 4, 4]}
              bgColor={bgColorContent}
              rounded="lg"
              initial={firstLoad < 1 ? animations.destopOffBottom : false}
              animate={animations.desktopOn}
              transition={{
                type: "spring",
                bounce: 0.5,
                delay: 0.4 + (i + 1) * 0.1,
                duration: 1.5,
              }}
            >
              <Flex></Flex>
            </MotionFlex>
          ))}
        </Flex>
      </MotionFlex>
    );
  };

  const Grid5 = () => {
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
        direction='column'
        initial={firstLoad < 1 ? animations.destopOffBottom : false}
        animate={animations.desktopOn}
        transition={{
          type: "spring",
          bounce: 0.5,
          delay: 0.4,
          duration: 1.5,
        }}
        onAnimationComplete={() => {
          setFristLoad(firstLoad + 1);
        }}
      >
        <Box pl={[2, 2, 2, 4, 4]} >Tools</Box>
        <Flex
          justifyContent="space-around"
          flexWrap="wrap"
          h="auto"
          w="full"
          p={[2, 2, 2, 4, 4]}
          bgColor={bgColor}
          rounded="xl"
        >
          {data4.map((data, i) => (
            <MotionFlex
              key={i}
              w={["46.5%", "46.5%", "23.5%", "23.5%"]}
              h={[12, 12, 16, 16, 20]}
              justifyContent="space-between"
              alignItems="center"
              p={[2, 2, 2, 4, 4]}
              mb={[2, 2, 2, 4, 4]}
              // mr={[2, 2, 2, 4, 4]}
              bgColor={bgColorContent}
              rounded="lg"
              initial={firstLoad < 1 ? animations.destopOffBottom : false}
              animate={animations.desktopOn}
              transition={{
                type: "spring",
                bounce: 0.5,
                delay: 0.4 + (i + 1) * 0.1,
                duration: 1.5,
              }}
            >
              <Flex></Flex>
            </MotionFlex>
          ))}
        </Flex>
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
        mb={4}
        templateColumns="repeat(8, 1fr)"
        gap={[2, 2, 4, 6, 6]}
        overflow="hidden"
        // gridAutoRows={["auto 100px auto", "auto 120px auto"]}
      >
        <GridItem
          colStart={[1, 1]}
          rowStart={[2, 1]}
          colEnd={{ base: 9, lg: 7, md: 7 }}
        >
          {Grid1()}
        </GridItem>
        <GridItem colStart={[1, 7]} rowStart={1} colEnd={9}>
          {Grid2()}
        </GridItem>
        <GridItem colStart={[1]} colEnd={[9, 9]} rowStart={[3, 2]}>
          {Grid3()}
        </GridItem>
        <GridItem colStart={1} colEnd={9} rowStart={[4, 3]}>
          {Grid4()}
        </GridItem>
        <GridItem colStart={1} colEnd={9} rowStart={[5, 4]}>
          {Grid5()}
        </GridItem>
      </Grid>
    </Container>
  );
}
