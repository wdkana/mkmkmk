import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";
import { Text, Select, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { animations } from "../../lib/animations";
import Clock from "../../lib/clock";
import { GiTwoCoins } from "react-icons/gi";
import { ImMoveDown, ImMoveUp } from "react-icons/im";

const MejaKerja = ({ FirstLoad, ...props }) => {
  const bgColor = useColorModeValue("gray.200", "#5c5f65");
  const txtColor = useColorModeValue("black.300", "gray.50");
  const MotionFlex = motion(Flex);
  const { statusLoad } = FirstLoad;
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
      <Flex
        fontWeight={"bold"}
        fontSize={["lg", "xl", "xl", "3xl"]}
        justifyContent="space-between"
        flexDir="column"
        w="100%"
        h="100%"
      >
        <Flex fontSize="xs" p={0} m={0}>
          <GiTwoCoins />
          <Text ml={0.5} mr={2} mt={-0.5}>
            10 mkc
          </Text>
          <ImMoveDown />
          <Text ml={0.5} mr={2} mt={-0.5}>
            4 pending
          </Text>
          <ImMoveUp />
          <Text ml={0.5} mr={2} mt={-0.5}>
            3 success
          </Text>
        </Flex>
        <Flex my="auto" mx="auto">
          <Clock size="sm" color="whiteAlpha.800"/>
        </Flex>
        <Flex justifyContent="space-around">
          <Select variant="flushed" placeholder="pilih meja kerjamu" size="md">
            <option value="programmer">programmer</option>
            <option value="designer">designer</option>
            <option value="blogger">blogger</option>
            <option value="musician">musician</option>
            <option value="video_editor">video editor</option>
            <option value="audio_editor">audio editor</option>
          </Select>
        </Flex>
        <Flex flexdir="column" justifyContent="end" mt={4}>
          <Button size="xs" colorScheme="messenger" onClick={() => alert('saved')}>
            Save
          </Button>
        </Flex>
      </Flex>
    </MotionFlex>
  );
};

export default connect((state) => state)(MejaKerja);
