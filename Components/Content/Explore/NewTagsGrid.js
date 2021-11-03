import React, { useRef, useState } from "react";
import {
    Flex,
    Box,
    SimpleGrid,
    Badge,
    Image,
    Text,
    Heading
} from "@chakra-ui/react";
import {
    AnimatePresence,
    motion,
} from "framer-motion";
import { animations } from "../../../lib/animations";
import { dummyTopTags } from "../../../shared/json/side-grid.explore";
import { FaEye, FaThumbtack } from "react-icons/fa"

export default function NewTagsGridComponent(props) {
    //   const { toggleColorMode } = useColorMode();
    console.log("props", props);

    const [firstLoad, setFristLoad] = useState(0);
    const skillRef = useRef()
    const MotionFlex = motion(Flex);
    const MotioSimpleGrid = motion(SimpleGrid)

    return (
        <MotionFlex
            // bgColor={props.bgColor}
            textColor={props.txtColor}
            justifyContent="space-between"
            alignItems="start"
            h={["300px"]}
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
            <Box pl="2" pt="2">New Tags - inspiration</Box>
            <AnimatePresence>
                <MotioSimpleGrid
                    h="300px"
                    row={1}
                    spacingX="2"
                    gridAutoFlow="column"
                    position="absolute"
                    top="8"
                    drag="x"
                    dragConstraints={skillRef}
                >
                    {dummyTopTags().map((data, i) => {
                        return (
                            <MotionFlex
                                w="40"
                                rounded="xl"
                                shadow="xl"
                                justifyContent="center"
                                alignItems="end"
                                pos="relative"
                                overflow="hidden"
                                initial={firstLoad < 1 ? animations.mobileOffLeft : false}
                                animate={animations.mobileOnLeft}
                                transition={{
                                    type: "spring",
                                    bounce: 0.5,
                                    delay: .8 + (i / data.length),
                                    duration: 1.5,
                                }}
                                exit={animations.mobileOffLeft}
                            >
                                <Box
                                    w="full"
                                    h="full"
                                    backgroundImage="url('https://bit.ly/dan-abramov')"
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                >
                                    <Badge
                                        variant="subtle"
                                        bgColor="white"
                                        colorScheme="green"
                                        pos="absolute"
                                        right="2"
                                        top="2"
                                        rounded="100%"
                                        p={1}
                                        opacity="0.8"
                                    >
                                        <FaEye size={14} />
                                    </Badge>
                                    <Badge
                                        variant="subtle"
                                        bgColor="white"
                                        colorScheme="purple"
                                        pos="absolute"
                                        right="8"
                                        top="2"
                                        rounded="100%"
                                        p={1}
                                        opacity="0.8"
                                    >
                                        <FaThumbtack size={14} />
                                    </Badge>
                                </Box>
                                <Flex pos="absolute" bottom="0px" bgColor={props.bgColor} w="full">
                                    <Box p={2}>
                                        <Image
                                            borderRadius="full"
                                            boxSize="40px"
                                            src={data.avatar}
                                            alt={data.user}
                                            mx="auto"
                                        />
                                        <Text fontSize="12px">{data.user}</Text>
                                    </Box>
                                    <Box p={2}>
                                        <Heading as="h1" fontSize="12px">{data.title}</Heading>
                                        <Text pt="2" fontSize="12px">{data.des.length > 25 ? `${data.des.substr(0, 25)} ...` : data.des}</Text>
                                    </Box>
                                </Flex>
                            </MotionFlex>
                        );
                    })}
                </MotioSimpleGrid>
            </AnimatePresence>
        </MotionFlex>
    );
}
