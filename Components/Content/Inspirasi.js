import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, SimpleGrid } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { animations } from "../../lib/animations";

const Inspirasi = ({FirstLoad, ...props}) => {
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

  const bgColor = useColorModeValue("gray.200", "#5c5f65");
  const bgColorContent = useColorModeValue("gray.300", "gray.400")
  const txtColor = useColorModeValue("black.300", "gray.50");
  const MotionFlex = motion(Flex);
  const {statusLoad} = FirstLoad

  return (
    <MotionFlex
      direction='column'
      initial={!statusLoad ? animations.destopOffBottom : false}
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
            initial={!statusLoad ? animations.destopOffBottom : false}
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

export default connect(state => state)(Inspirasi)