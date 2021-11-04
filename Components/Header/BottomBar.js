import { Avatar } from "@chakra-ui/avatar";
import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Icon from "@chakra-ui/icon";
import { Box, Flex } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { dataNav, dataSubNav } from "../../lib/dataNavbar";
import NavItem from "./NavItem";
import Link from "next/link";

function BottomBar({ bgColor, txtColor, toggleColorMode, colorMode, url }) {
  const bgHome = useColorModeValue("gray.600", "gray.700");
  const borderCol = useColorModeValue("gray.300", "gray.700");

  const ListMenu = () => {
    return (
      <MenuList
        w={"100%"}
        display="flex"
        flexDir="column"
        pos="absolute"
        bottom={4}
        left={0}
        bg={bgColor}
        zIndex={4}
        shadow="lg"
        rounded="lg"
        border="1px solid"
        borderColor={borderCol}
        fontSize="xs"
      >
        <MenuGroup title="Menu">
          {dataSubNav.map((subNav, i) => (
            <Link
              href={
                subNav.url == "pengaturan" ? "" : "/dashboard/" + subNav.url
              }
            >
              <MenuItem key={i} icon={<Icon as={subNav.icon} />}>
                {subNav.title}
              </MenuItem>
            </Link>
          ))}
        </MenuGroup>
        <MenuGroup title="Mode Baca">
          <MenuItem
            icon={colorMode == "dark" ?<FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          >{colorMode == "dark" ? "Selamat Malam 😴" : "Selamat Pagi 🤗"}</MenuItem>
        </MenuGroup>
      </MenuList>
    );
  };

  return (
    <Flex
      pos="sticky"
      bottom="0"
      left="0"
      w="full"
      h={14}
      bgColor={bgColor}
      zIndex={3}
      display={["flex", "none"]}
      borderTop={`1px solid`}
      borderTopColor={borderCol}
      px={2}
    >
      <Flex w="full" justifyContent="space-between" alignItems="center">
        <Menu>
          {/* Burger menu */}
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen}>
                <IconButton
                  background="none"
                  fontSize={{ base: 14, md: 22 }}
                  _hover={{ background: "none" }}
                  icon={<FaBars />}
                  onClick={() => console.log("click")}
                />
              </MenuButton>
              <ListMenu />
            </>
          )}
        </Menu>

        {/* Explore */}
        <Box>
          <NavItem
            active={url == dataNav[1].value ? true : false}
            // navSize={navSize}
            title={dataNav[1].title}
            icon={dataNav[1].icon}
            uri={dataNav[1].url}
            bgColor={bgColor}
            txtColor={txtColor}
            colorMode={colorMode}
          />
        </Box>

        {/* Home / dashboard */}
        <Box
          h={16}
          w={16}
          bgColor={bgHome}
          display="flex"
          justifyContent="center"
          alignItems="center"
          alignSelf="end"
          roundedTop="xl"
          shadow="2xl"
        >
          <NavItem
            active={url == dataNav[0].value ? true : false}
            // navSize={navSize}
            title={dataNav[0].title}
            icon={dataNav[0].icon}
            uri={dataNav[0].url}
            bgColor={bgColor}
            txtColor={txtColor}
            colorMode={colorMode}
          />
        </Box>

        {/* Pined */}
        <Box>
          <NavItem
            active={url == dataNav[2].value ? true : false}
            // navSize={navSize}
            title={dataNav[2].title}
            icon={dataNav[2].icon}
            uri={dataNav[2].url}
            bgColor={bgColor}
            txtColor={txtColor}
            colorMode={colorMode}
          />
        </Box>

        {/* Profile */}
        <Avatar size="sm" src="/coding.jpg" />
      </Flex>
    </Flex>
  );
}

export default BottomBar;
