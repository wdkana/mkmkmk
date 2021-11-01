import React, { useEffect, useState } from "react";
import { Container, Grid, GridItem, Flex, Box, Badge } from "@chakra-ui/react";
import {
  motion,
} from "framer-motion";
import { animations } from "../../lib/animations";

export default function ExploreComponent(props) {
  console.log("props", props);
  const [firstLoad, setFristLoad] = useState(0);
  const MotionFlex = motion(Flex);

  const Grid1 = () => {
    return (
      <MotionFlex
        w="full"
        h="100%"
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
        <Box fontWeight={"bold"} fontSize={["lg", "xl", "xl", "3xl"]}>
          ExploreComponent
          <Badge
            mb={5}
            ml={2}
            fontSize="0.4em"
            variant="solid"
            colorScheme="purple"
          >
            {" "}
            NEW
          </Badge>
        </Box>
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
        gap={[2, 2, 4, 6, 6]}
        overflow="hidden"
        gridAutoRows={["auto 100px auto", "auto 120px auto"]}
      >
        <GridItem
          colStart={1}
          colEnd={9}
        // rowStart={[2, 1]}
        // colEnd={{ base: 9, lg: 5, md: 5 }}
        >
          {Grid1()}
        </GridItem>

      </Grid>
    </Container>
  );
}
