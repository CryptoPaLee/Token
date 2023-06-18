import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Footer from "../components/footer/footer";
import { useState } from "react";
import About from "../components/about";
import Roadmap from "../components/roadmap";
import Team from "../components/team";
import Partners from "../components/partners";
import Contact from "../components/contact";
import Link from "next/link";
import { colors } from "../utils/colors";
import { CountdownTimer } from "../components/countdown";

export default function Home() {
  const [aboutHovered, setAboutHovered] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [marketplaceHovered, setMarketplaceHovered] = useState(false);

  const [activeAboutMenu, setActiveAboutMenu] = useState("About");

  return (
    <>
      <Flex gap={8} w="100%" flexDir={"row"} flexWrap="wrap">
        <Flex
          align={"center"}
          justify={"center"}
          w={"100%"}
          h={"100%"}
          minH={"calc(100vh - 100*2px)"}
          direction={"column"}
          position={"relative"}
        >
          <Flex
            w="100%"
            pos="relative"
            align="center"
            justify={"space-between"}
            position={"absolute"}
            top={0}
            left={0}
          >
            <Flex cursor="pointer" as={Link} href="/">
              <Image src={"/Tipont_logo.png"} h={{ base: 12, md: 20 }} />
            </Flex>
          </Flex>
          <CountdownTimer mt={5} targetDate="2023-07-08" />
          <Flex gap={8} mt={8}>
            <Button
              flex={1}
              px={{ base: 8, md: 12 }}
              py={{ base: 4, md: 8 }}
              fontSize={{ base: "md", md: "2xl" }}
              as={Link}
              href="/mint"
            >
              Mint
            </Button>
            <Button
              flex={1}
              px={{ base: 8, md: 12 }}
              py={{ base: 4, md: 8 }}
              fontSize={{ base: "md", md: "2xl" }}
              as="a"
              href="https://docs.tipont.com/"
            >
              Whitepaper
            </Button>
          </Flex>
        </Flex>

        {/* <Flex
          flex={4}
          bg={colors.green.base}
          p={5}
          pos="relative"
          borderRadius={12}
          style={{
            aspectRatio: aboutExpanded ? "unset" : "1/1",
          }}
          flexBasis={{ base: "100%", lg: "35%", xl: "unset" }}
          role="group"
          onMouseEnter={() => setAboutHovered(true)}
          onMouseLeave={() => setAboutHovered(false)}
          onClick={() => !aboutExpanded && setAboutExpanded(true)}
          h={"100%"}
          cursor={aboutExpanded ? "default" : "pointer"}
          w={aboutExpanded ? "100%" : "unset"}
          mb={5}
        >
          {!aboutExpanded && (
            <>
              <Box pos="absolute" zIndex={10}>
                <Image
                  src="notebook-dynamic-color.png"
                  transition="all 0.15s ease-in-out"
                  pointerEvents="none"
                  filter={"drop-shadow(0px 10px 10px rgba(0,0,0,0.5))"}
                  transform="scale(0.9)"
                  _groupHover={{
                    transform: "scale(1)",
                  }}
                />
              </Box>
              <Box pos="absolute" zIndex={1}>
                <Text
                  color="black"
                  fontWeight={900}
                  fontSize={{ base: 24, sm: 48 }}
                >
                  ABOUT TIPONT
                </Text>
              </Box>
              <Box pos="absolute" bottom={0} right={6}>
                <Text
                  color="black"
                  fontWeight={900}
                  fontSize={{ base: 24, sm: 48 }}
                >
                  {aboutHovered ? "CLICK_NOW" : "READ >"}
                </Text>
              </Box>
            </>
          )}
          {aboutExpanded && (
            <Flex flexDir="column" w="100%">
              <Flex justify="space-between" w="100%">
                <Text
                  fontWeight={900}
                  color="black"
                  fontSize={{ base: 24, md: 36 }}
                >
                  Informations
                </Text>
                <Text
                  onClick={() => {
                    setAboutExpanded(false);
                    setAboutHovered(false);
                  }}
                  fontWeight={900}
                  color="black"
                  cursor="pointer"
                  h="fit-content"
                >
                  CLOSE
                </Text>
              </Flex>
              <Flex
                justifyContent={{ base: "space-between", lg: "space-evenly" }}
                gap={8}
                overflow={"scroll"}
                className="about-menus"
                background={colors.green.dark}
                borderRadius={12}
                px={4}
              >
                {AboutMenu.map((menu) => (
                  <AboutMenuItem
                    active={activeAboutMenu == menu}
                    onClick={() => setActiveAboutMenu(menu)}
                  >
                    {menu}
                  </AboutMenuItem>
                ))}
              </Flex>
              <Flex mt={5} flexDir="column" gap={4}>
                {activeAboutMenu == AboutMenu[0] && <About />}
                {activeAboutMenu == AboutMenu[1] && <Roadmap />}
                {activeAboutMenu == AboutMenu[2] && <Team />}
                {activeAboutMenu == AboutMenu[3] && <Contact />}
              </Flex>
            </Flex>
          )}
        </Flex>
        {!aboutExpanded && (
          <>
            <Flex flexDir="column" flex={2} gap={8}>
              <Flex
                bg={colors.yellow.base}
                style={{
                  aspectRatio: "1/1",
                }}
                borderRadius="full"
                align="center"
                justify="center"
                position="relative"
                cursor="pointer"
                role="group"
                as="a"
                href="https://tipont.gitbook.io/"
                target="_blank"
              >
                <Image
                  src="folder-dynamic-color.png"
                  pointerEvents="none"
                  transition={"all 0.15s ease-in-out"}
                  filter={"drop-shadow(0px 10px 10px rgba(0,0,0,0.25))"}
                  _groupHover={{
                    transform: "translateY(-15px)",
                    transitionDuration: "0.5s",
                    transitionTimingFunction: "ease-in-out",
                  }}
                />
                <Box
                  position="absolute"
                  bottom={0}
                  right={0}
                  px={{ base: 4, lg: 6 }}
                  py={{ base: 2, lg: 3 }}
                  bg="#444"
                  transform="rotate(-5deg)"
                  transition={"all .15s ease-in-out"}
                  _groupHover={{
                    transform: "rotate(15deg)",
                    marginRight: { base: "75%", md: "50%" },
                  }}
                  borderRadius={12}
                  pointerEvents="none"
                >
                  <Text fontWeight={800}>DOCS</Text>
                </Box>
              </Flex>
              <Flex
                flexDir="column"
                bg={colors.blue.base}
                style={{
                  aspectRatio: "2/1",
                }}
                align="center"
                justify="center"
                cursor="pointer"
                transition={"all 0.15s ease-in-out"}
                borderRadius={36}
                _hover={{
                  borderRadius: 12,
                }}
                as={Link}
                href={"/merch"}
                position="relative"
                p={5}
              >
                <Text
                  as="i"
                  fontWeight={800}
                  fontSize={{ base: 24, md: 32, lg: 48 }}
                >
                  MERCH
                </Text>
              </Flex>
              <Flex
                flexDir="column"
                bg={colors.orange.base}
                style={{
                  aspectRatio: "2/1",
                }}
                align="center"
                justify="center"
                cursor="pointer"
                transition={"all 0.15s ease-in-out"}
                borderRadius={12}
                as={Link}
                href={"/games"}
                position="relative"
                role="group"
              >
                <Text
                  as="i"
                  fontWeight={800}
                  fontSize={{ base: 20, md: 28, lg: 44 }}
                  transform={"rotate(0deg) skew(-10deg)"}
                  transition={"all 0.15s ease-in-out"}
                  transformOrigin={"center center"}
                  _groupHover={{
                    transform: "rotate(-5deg) skew(-15deg)",
                    fontSize: { base: 24, md: 32, lg: 48 },
                  }}
                >
                  GAMES
                </Text>
              </Flex>
            </Flex>
            <Flex flexDir="column" flex={3} gap={8}>
              <Flex
                bg={colors.cyan.base}
                style={{
                  aspectRatio: "1/1",
                }}
                borderRadius={12}
                pos="relative"
                justify="center"
                align="center"
                role="group"
                as={Link}
                href="/mint"
                h="100%"
              >
                <Text
                  color="white"
                  fontWeight={900}
                  fontSize={{ base: 24, sm: 48 }}
                  zIndex={10}
                >
                  MINT
                </Text>
                <Box pos="absolute" pointerEvents="none">
                  <Image
                    src="paint-kit-dynamic-color.png"
                    transition="all 0.15s ease-in-out"
                    filter={"drop-shadow(0px 10px 10px rgba(0,0,0,0.5))"}
                    _groupHover={{
                      transform: "scale(0.9)",
                    }}
                  />
                </Box>
              </Flex>
              <Flex
                bg="#151671"
                style={{
                  aspectRatio: "3/1",
                }}
                borderRadius={12}
                backgroundImage={
                  //GIF comes here
                  marketplaceHovered ? "url('/bg.jpg')" : "url('/bg.jpg')"
                }
                backgroundSize={"100%"}
                backgroundPosition={"center"}
                backgroundRepeat={"no-repeat"}
                pos="relative"
                justify="center"
                align="center"
                as="a"
                href="https://opensea.io/collection/tipont"
                target="_blank"
                role="group"
                transition={"all 0.15s ease-in-out"}
                _hover={{
                  backgroundSize: "200%",
                }}
                onMouseEnter={() => setMarketplaceHovered(true)}
                onMouseLeave={() => setMarketplaceHovered(false)}
                flexWrap="wrap"
                p={{ base: 4, md: 8 }}
              >
                <Text fontWeight={800} fontSize={{ base: 24, md: 32 }}>
                  NFT MARKETPLACE
                </Text>
              </Flex>
            </Flex>
          </>
        )} */}
      </Flex>
      <Footer />
    </>
  );
}

const AboutMenu = ["About", "Roadmap", "Team", "Contact"];

const AboutMenuItem = ({ children, ...props }) => {
  return (
    <Text
      fontWeight={600}
      color={props.active ? "white" : "black"}
      fontSize={{ base: 24, md: 24 }}
      transition={"all 0.15s ease-in-out"}
      cursor={"pointer"}
      {...props}
    >
      {children}
    </Text>
  );
};
