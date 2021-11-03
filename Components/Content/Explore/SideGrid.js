import React, { useEffect, useState } from "react";
import {
    Flex,
    Box,
    Divider,
    Center,
    Heading
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { animations } from "../../../lib/animations";
import { FaHashtag, FaTimes } from "react-icons/fa";
import { text_responsive } from "../../../shared/styled/responsive";
import { dummyTags, dummyVirals } from "../../../shared/json/side-grid.explore";

export default function SideGridComponent(props) {
    const MotionBox = motion(Box);

    const activeView = () => {
        return (
            <Box w="100%" fontWeight={"bold"} fontSize={text_responsive}>
                <Box pl="84%" onClick={() => props.onChangeOpenTags(!props.activeTag)} cursor="pointer">
                    <FaTimes size="18" />
                </Box>

                <Heading mt={6} as="h1" size="md" isTruncated>
                    Tags
                </Heading>
                <Divider my="12px" bgColor={props.txtColor} />
                {dummyTags().map((data, i) =>
                    <Box key={i} fontSize="md" fontWeight="normal" my={1}>
                        #{data.title}
                    </Box>
                )}

                <Heading mt={10} as="h1" size="md" isTruncated>
                    Viral
                </Heading>
                <Divider my="12px" bgColor={props.txtColor} />
                {dummyVirals().map((data, i) =>
                    <Box key={i} fontSize="md" fontWeight="normal" my={1}>
                        @{data.title}
                    </Box>
                )}
            </Box>
        )
    }

    const hideView = () => {
        return (
            <Center onClick={() => props.onChangeOpenTags(!props.activeTag)}>
                <FaHashtag my="auto" size={18} />
            </Center>
        )
    }

    return (
        <MotionBox
            pos="absolute"
            w="auto"
            top="38px"
            right="23px"
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
            {props.activeTag ? activeView() : hideView()}
        </MotionBox>
    );
}
