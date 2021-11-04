import React, { useEffect, useState } from "react";
import {
    Flex,
    Box,
    Divider,
    Center,
    Heading,
    Badge
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { animations } from "../../../lib/animations";
import { FaHashtag, FaTimes } from "react-icons/fa";
import { text_responsive } from "../../../shared/styled/responsive";
import { dummyTags, dummyVirals } from "../../../shared/json/side-grid.explore";

export default function SideGridComponent(props) {
    const [animationToggle, setAnimationToggle] = useState(0)
    const MotionBox = motion(Box);

    const randomColor = () => {
        const colorBadge = ["green", "purple", "red", "blue", "yellow"]
        return colorBadge[Math.floor(Math.random() * colorBadge.length)]
    }

    const onActToggleTag = () => {
        props.onChangeOpenTags(!props.activeTag)
        setAnimationToggle(0)
    }

    const variants = {
        visible: {
            x: [20, 0],
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
                type: "easyIn",
                delay: 0.1,
                duration: 0.3,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    };

    const item = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    };

    const activeView = () => {
        return (
            <MotionBox variants={item} w="100%" fontWeight={"bold"} fontSize={text_responsive}>
                <Box pl="84%" onClick={() => onActToggleTag()} cursor="pointer">
                    <FaTimes size="18" />
                </Box>

                <Heading mt={6} as="h1" size="md" isTruncated>
                    Tags
                </Heading>
                <Divider my="12px" bgColor={props.txtColor} />
                {dummyTags().map((data, i) =>
                    <Badge key={i} my={1} mr={1} colorScheme={randomColor()} rounded="md" opacity="0.7">#{data.title}</Badge>
                )}

                <Heading mt={10} as="h1" size="md" isTruncated>
                    Viral
                </Heading>
                <Divider my="12px" bgColor={props.txtColor} />
                {dummyVirals().map((data, i) =>
                    <Badge key={i} my={1} mr={1} colorScheme={randomColor()} rounded="md" opacity="0.7">#{data.title}</Badge>
                )}
            </MotionBox>
        )
    }

    const hideView = () => {
        return (
            <Center onClick={() => onActToggleTag()}>
                <FaHashtag my="auto" size={18} />
            </Center>
        )
    }

    return (
        <MotionBox
            pos="fixed"
            w={props.activeTag ? "20vh" : "auto"}
            top="38px"
            right="23px"
            zIndex={5}
            p={[4, 4, 4, 6]}
            alignItems="flex-start"
            bgColor={props.bgColor}
            textColor={props.txtColor}
            rounded={`xl`}
            justifyContent="space-between"
            shadow={"md"}
            initial={animationToggle < 1 ? "hidden" : false}
            animate={"visible"}
            variants={variants}
            onAnimationComplete={() => {
                setAnimationToggle(animationToggle + 1);
            }}
        >
            {props.activeTag ? activeView() : hideView()}
        </MotionBox>
    );
}
