import React, { useState } from "react";
import {
    Flex,
    Box
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { animations } from "../../../lib/animations";

export default function NewToThisGridComponent(props) {
    const [firstLoad, setFristLoad] = useState(0);
    const MotionFlex = motion(Flex);

    return (
        <MotionFlex
        w="full"
        h="20vh"
        p={[4, 4, 4, 6]}
        alignItems="flex-start"
        bgColor={props.bgColor}
        textColor={props.txtColor}
        rounded={`xl`}
        justifyContent="space-between"
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
          New To This
        </Box>
      </MotionFlex>
    );
}
