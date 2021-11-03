import { useColorModeValue } from "@chakra-ui/color-mode";
import { Badge, Box, Flex, SimpleGrid } from "@chakra-ui/layout";
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image'
import { useRef } from "react";
import { connect } from "react-redux";
import { animations } from "../../lib/animations";
import { myLoader } from "../../lib/media";

const Skill = ({FirstLoad, ...props}) => {
  const bgColor = useColorModeValue("gray.200", "#5c5f65");
  const txtColor = useColorModeValue("black.300", "gray.50");
  const MotionFlex = motion(Flex);
  const MotioSimpleGrid = motion(SimpleGrid)
  const {statusLoad} = FirstLoad
  const skillRef = useRef()

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

  return (
    <MotionFlex
      // justifyContent="space-between"
      alignItems="start"
      h={["192px"]}
      initial={!statusLoad ? animations.destopOffBottom : false}
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
                key={i}
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
                initial={!statusLoad ? animations.mobileOffLeft : false}
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

export default connect(state=>state)(Skill)