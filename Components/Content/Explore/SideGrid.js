import React, { useEffect, useState } from "react";
import {
    Flex,
    Box,
    Divider,
    Center
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { animations } from "../../../lib/animations";
import { FaHashtag } from "react-icons/fa";
import { text_responsive } from "../../../styles/responsive"

export default function SideGridComponent(props) {
    console.log("props", props);
    const MotionBox = motion(Box);

    const activeView = () => {
        return (
            <MotionBox
                onClick={() => props.onChangeOpenTags(!props.activeTag)}
                pos="absolute"
                w="90px"
                top="1px"
                right="1px"
                zIndex={5}
                w="auto"
                p={[4, 4, 4, 6]}
                alignItems="flex-start"
                bgColor={props.bgColor}
                textColor={props.txtColor}
                rounded={`xl`}
                justifyContent="space-between"
                shadow={"md"}
                initial={animations.destopOffBottom}
                animate={animations.desktopOn}
                transition={{
                    type: "spring",
                    bounce: 0.5,
                    delay: 0.2,
                    duration: 1.5,
                }}
            >
                <Box w="100%" fontWeight={"bold"} fontSize={text_responsive}>
                    Tags
                    <Divider my="12px" bgColor={props.txtColor} />
                </Box>
            </MotionBox>
        )
    }

    const hideView = () => {
        return (
            <MotionBox
                onClick={() => props.onChangeOpenTags(!props.activeTag)}
                pos="absolute"
                w="90px"
                top="1px"
                right="1px"
                zIndex={5}
                p={4}
                alignItems="flex-start"
                bgColor={props.bgColor}
                textColor={props.txtColor}
                rounded={`xl`}
                justifyContent="space-between"
                shadow={"md"}
                initial={animations.destopOffBottom}
                animate={animations.desktopOn}
                transition={{
                    type: "spring",
                    bounce: 0.5,
                    delay: 0.2,
                    duration: 1.5,
                }}
            >
                <Center>
                <FaHashtag my="auto" size={18} />
                </Center>
            </MotionBox>
        )
    }

    return (
        <Box>
            {props.activeTag ? activeView() : hideView()}
        </Box>
    );
}
