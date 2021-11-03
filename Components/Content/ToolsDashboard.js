import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { animations } from "../../lib/animations";
import { setFisrtLoadTrue } from "../../redux/action/fisrtLoad.action";

const ToolsDasboard = ({FirstLoad, dispatch, ...props}) => {
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
      onAnimationComplete={() => {
        // setFristLoad(firstLoad + 1);
        !statusLoad ? 
        dispatch(setFisrtLoadTrue()) : null
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

export default connect(state => state)(ToolsDasboard)