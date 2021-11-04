import React, { useState } from "react";
import {
  Flex,
  Box
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { animations } from "../../../lib/animations";
import { dummyTopTags } from "../../../shared/json/side-grid.explore";

export default function NewToThisGridComponent(props) {
  const [firstLoad, setFristLoad] = useState(0);
  const MotionFlex = motion(Flex);

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
      <Box p={[2, 2, 2, 4, 4]} >Inspirasi mu</Box>
      <Flex
        justifyContent="space-around"
        // alignItems="stretch"
        flexWrap="wrap"
        h="auto"
        w="full"
        p={[2, 2, 2, 4, 4]}
        bgColor={props.bgColor}
        rounded="xl"
      >
        {dummyTopTags().map((data, i) => (
          <MotionFlex
            key={i}
            w={["full", "full", "32%", "32%"]}
            h={[12, 12, 16, 16, 20]}
            justifyContent="space-between"
            alignItems="center"
            p={[2, 2, 2, 4, 4]}
            my={[2, 2, 2, 4, 4]}
            bgColor={props.bgColorContent}
            rounded="lg"
            initial={firstLoad < 1 ? animations.destopOffBottom : false}
            animate={animations.desktopOn}
            transition={{
              type: "spring",
              bounce: 0.5,
              delay: 0.4 + (i + 1) * 0.1,
              duration: 1.5,
            }}
            onAnimationComplete={() => {
              setFristLoad(firstLoad + 1);
          }}
          >
            <Flex></Flex>
          </MotionFlex>
        ))}
      </Flex>
    </MotionFlex>
  );
}
