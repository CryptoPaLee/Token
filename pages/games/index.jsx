import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { colors } from "../../utils/colors";
import ReactCardFlip from "react-card-flip";

const Games = () => {
  return (
    <>
      <Flex w="100%" pos="relative" align="center">
        <Flex
          bg={colors.orange.base}
          h={12}
          w={12}
          align="center"
          justify="center"
          borderRadius={8}
          cursor="pointer"
          as={Link}
          href="/"
          transition={"all 0.15s ease-in-out"}
          _hover={{ bg: colors.orange.dark, textDecoration: "none" }}
        >
          <Text fontWeight={800}>{"<"}</Text>
        </Flex>
        <Text
          fontSize={{
            base: "3xl",
            sm: "4xl",
          }}
          fontWeight={600}
          pos="absolute"
          left="50%"
          transform="translateX(-50%)"
        >
          Games
        </Text>
      </Flex>
      <Divider mt={{ base: 10, lg: 5 }} mb={5} />
      <Grid
        w="100%"
        mt={5}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={5}
      >
        <FutharkCard />
        <AtlantiszCard />
      </Grid>
    </>
  );
};

const InfoTextProps = {
  fontSize: {
    base: "sm",
  },
};

const TitleTextProps = {
  fontSize: {
    base: "xl",
  },
};

const FutharkCard = () => {
  const [cardFlipped, setCardFlipped] = useState(true);

  return (
    <Flex
      flexDir={{ base: "column", sm: "row" }}
      align={"center"}
      bg={"#222"}
      borderRadius={12}
      p={5}
      gap={5}
    >
      <Flex
        onMouseEnter={() => setCardFlipped(true)}
        onMouseLeave={() => setCardFlipped(false)}
        flex={1}
      >
        <ReactCardFlip isFlipped={cardFlipped}>
          <Image src="/card_front.png" borderRadius={12} />
          <Image src="/card_back.png" borderRadius={12} />
        </ReactCardFlip>
      </Flex>
      <Flex
        flex={1.5}
        flexDir={"column"}
        h={"100%"}
        align={"center"}
        justify={"center"}
      >
        <Text my={3} fontWeight={700} {...TitleTextProps}>
          Futhark Game
        </Text>
        <Grid mb={3} templateColumns={"repeat(2, 1fr)"} gap={2} w={"100%"}>
          <Flex flexDir={"column"}>
            <Text fontWeight={700} {...InfoTextProps}>
              FEJLESZTŐ
            </Text>
            <Text {...InfoTextProps}>TIPONT</Text>
          </Flex>
          <Flex flexDir={"column"}>
            <Text fontWeight={700} {...InfoTextProps}>
              PLATFORM
            </Text>
            <Text {...InfoTextProps}>WEB</Text>
          </Flex>
          <Flex flexDir={"column"}>
            <Text fontWeight={700} {...InfoTextProps}>
              MŰFAJ
            </Text>
            <Text {...InfoTextProps}>KÁRTYA GYŰJTÉS</Text>
          </Flex>
          <Flex flexDir={"column"}>
            <Text fontWeight={700} {...InfoTextProps}>
              ÁLLAPOT
            </Text>
            <Text {...InfoTextProps}>BETA</Text>
          </Flex>
        </Grid>
        <Flex gap={2} justify={"center"} mt={"auto"}>
          <Button
            variant="ghost"
            as="a"
            href="https://docs.tipont.com/v0.2/games/futhark-game"
          >
            Description
          </Button>
          <Button>Visit Store</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

const AtlantiszCard = () => {
  return (
    <Flex
      flexDir={{ base: "column", sm: "row" }}
      align={"center"}
      bg={"#222"}
      borderRadius={12}
      p={5}
      gap={5}
    >
      <Flex flex={1}>
        <Image src="/atlantisz.png" borderRadius={12} />
      </Flex>
      <Flex
        flex={1.5}
        flexDir={"column"}
        h={"100%"}
        align={"center"}
        justify={"center"}
      >
        <Text my={3} fontWeight={600} {...TitleTextProps}>
          Atlantisz Világa
        </Text>
        <Grid mb={3} templateColumns={"repeat(2, 1fr)"} gap={2} w={"100%"}>
          <Flex flexDir={"column"}>
            <Text fontWeight={700} {...InfoTextProps}>
              FEJLESZTŐ
            </Text>
            <Text {...InfoTextProps}>TIPONT</Text>
          </Flex>
          <Flex flexDir={"column"}>
            <Text fontWeight={700} {...InfoTextProps}>
              PLATFORM
            </Text>
            <Text {...InfoTextProps}>WEB</Text>
          </Flex>
          <Flex flexDir={"column"}>
            <Text fontWeight={700} {...InfoTextProps}>
              MŰFAJ
            </Text>
            <Text {...InfoTextProps}>Turn-Based RTS</Text>
          </Flex>
          <Flex flexDir={"column"}>
            <Text fontWeight={700} {...InfoTextProps}>
              ÁLLAPOT
            </Text>
            <Text {...InfoTextProps}>IN DEVELOPMENT</Text>
          </Flex>
        </Grid>
        <Flex gap={2} justify={"center"} mt={"auto"}>
          <Button
            variant="ghost"
            as="a"
            href="https://docs.tipont.com/v0.2/games/atlantis"
          >
            Description
          </Button>
          <Button isDisabled>Play</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

/* const GameCard = ({ name, description, image, secondary, primary }) => {
  return (
    <Flex p={2} bg={"#888"} flexDir={"column"} flex={1}>
      <Text
        fontSize={{
          base: "xl",
          sm: "2xl",
        }}
        fontWeight={600}
        color="white"
      >
        {name}
      </Text>
      <Text>{description}</Text>
    </Flex>
  );
};

const GameList = [
  {
    id: 1,
    name: "FUTHARK Game",
    description: "NFT alapú gyűjtögető játék.",
    image: "https://tcf.admeen.org/game/500/492/400x246/tic-tac-toe.jpg",
    primary: "#",
    secondary: "/games/futhark-game",
  },
  {
    id: 2,
    name: "Atlantisz világa",
    description:
      "A legizgalmasabb körökre osztott valós idejű stratégiai játék",
    image: "https://tcf.admeen.org/game/500/492/400x246/tic-tac-toe.jpg",
    primary: "#",
    secondary: "/games/atlantisz-vilaga",
  },
]; */

export default Games;
