import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { animations } from "../../lib/animations";
import { myLoader } from "../../lib/media";
import Image from 'next/image'

const ProfileDashboard = ({FirstLoad, ...props}) => {
  const bgColor = useColorModeValue("gray.200", "#5c5f65");
  const txtColor = useColorModeValue("black.300", "gray.50");
  const MotionFlex = motion(Flex);
  const {statusLoad} = FirstLoad
  return (
    <MotionFlex
      initial={!statusLoad ? animations.destopOffBottom : false}
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
      shadow="md"
    >
      <Flex
        w="100%"
        h="100%"
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

export default connect(state => state)(ProfileDashboard)