import React, { useEffect, useState } from "react";
import {
    Flex,
    Box,
    Divider
} from "@chakra-ui/react";
import {
    motion,
} from "framer-motion";
import { animations } from "../../../lib/animations";

export default function SideGridComponent(props) {
    console.log("props", props);

    const [firstLoad, setFristLoad] = useState(0);

    const MotionFlex = motion(Flex);

    const activeView = () => {
        return (
            <MotionFlex
                onClick={() => props.onChangeOpenTags(!props.activeTag)}
                pos="absolute"
                w="90px"
                top="1px"
                right="1px"
                zIndex={5}
                // h="auto"
                h="100%"
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
                <Box w="100%" fontWeight={"bold"} fontSize={["lg", "xl", "xl", "3xl"]}>
                    Tags
                    <Divider my="12px" bgColor={props.txtColor} />
                </Box>
            </MotionFlex>
        )
    }

    const hideView = () => {
        return (
            <MotionFlex
                onClick={() => props.onChangeOpenTags(!props.activeTag)}
                pos="absolute"
                w="90px"
                top="1px"
                right="1px"
                zIndex={5}
            >
                #
            </MotionFlex>
        )
    }

    return (
        <Box>
            {props.activeTag ? activeView() : hideView()}
        </Box>
    );
}
