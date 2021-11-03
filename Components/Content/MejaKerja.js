import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Badge, Box, Flex } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { animations } from "../../lib/animations";
import Clock from "../../lib/clock";

const MejaKerja = ({FirstLoad, ...props}) => {
  const bgColor = useColorModeValue("gray.200", "#5c5f65");
  const txtColor = useColorModeValue("black.300", "gray.50");
  const MotionFlex = motion(Flex);
  const {statusLoad} = FirstLoad
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
      shadow={"md"}
      initial={!statusLoad ? animations.destopOffBottom : false}
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


export default connect((state) => state)(MejaKerja)