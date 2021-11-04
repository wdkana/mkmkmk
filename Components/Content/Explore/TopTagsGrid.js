import React, { useRef, useState } from "react";
import {
    Flex,
    Box,
    SimpleGrid,
    Badge,
    Avatar,
    Text,
    Heading
} from "@chakra-ui/react";
import {
    AnimatePresence,
    motion,
} from "framer-motion";
import { dummyTopTags } from "../../../shared/json/side-grid.explore";
import { FaEye, FaThumbtack } from "react-icons/fa"

export default function TopTagsGridComponent(props) {
    console.log("props", props);

    const [firstLoad, setFristLoad] = useState(0);
    const skillRef = useRef()
    const MotionFlex = motion(Flex);
    const MotioSimpleGrid = motion(SimpleGrid)

    const variants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
                type: "spring",
                bounce: 0.5,
                delay: 0.3,
                duration: 0.5,
            },
        },
        hidden: {
            y: "20%",
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    };

    const item = {
        hidden: { x: "5%", opacity: 0, },
        visible: { x: 0, opacity: 1, },
    };

    return (
        <MotionFlex
            textColor={props.txtColor}
            justifyContent="space-between"
            alignItems="start"
            h={["300px"]}
            initial={firstLoad < 1 ? "hidden" : false}
            animate={"visible"}
            variants={variants}
            position="relative"
            ref={skillRef}
            onAnimationComplete={() => {
                setFristLoad(firstLoad + 1);
            }}
        >
            <Box pl="2" pt="2">Top Tags - inspiration</Box>
            <AnimatePresence>
                <MotioSimpleGrid
                    h="300px"
                    row={1}
                    spacingX="2"
                    gridAutoFlow="column"
                    position="absolute"
                    top="10"
                    drag="x"
                    dragConstraints={skillRef}
                >
                    {dummyTopTags().map((data, i) => {
                        return (
                            <MotionFlex
                                key={i}
                                w={["40", "230px"]}
                                rounded="xl"
                                shadow="xl"
                                justifyContent="center"
                                alignItems="end"
                                pos="relative"
                                overflow="hidden"
                                variants={item}
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
                                <Flex pos="absolute" bottom="0px" bgColor={props.bgColor} w="full" textAlign="center">
                                    <Box p={2} w="65%" mt="auto">
                                        <Avatar size="md" src={data.avatar} alt={data.user} />
                                        <Text fontSize="12px" p="1">{data.user}</Text>
                                    </Box>
                                    <Box p={2} display={["none", "block"]}>
                                        <Heading py="1" as="h1" fontSize="16px">{data.title}</Heading>
                                        <Text pt="2" fontSize="12px" textAlign="left" wordBreak="break-all">{data.des.length > 50 ? `${data.des.substr(0, 50)} ...` : data.des}</Text>
                                    </Box>
                                    <Box p={2} display={["block", "none"]}>
                                        <Heading as="h1" fontSize="12px">{data.title}</Heading>
                                        <Text pt="2" fontSize="11px" textAlign="left" wordBreak="break-all">{data.des.length > 25 ? `${data.des.substr(0, 25)} ...` : data.des}</Text>
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
