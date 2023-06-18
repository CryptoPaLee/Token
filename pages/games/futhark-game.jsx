import {
  Badge,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { colors } from "../../utils/colors";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import ReactCardFlip from "react-card-flip";

const FutharkGame = () => {
  const [cardFlipped, setCardFlipped] = useState(0);

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
          href="/games"
          transition={"all 0.15s ease-in-out"}
          _hover={{ bg: colors.orange.dark, textDecoration: "none" }}
        >
          <Text fontWeight={800}>{"<"}</Text>
        </Flex>
        <Text
          fontSize={{
            base: "2xl",
            sm: "3xl",
          }}
          fontWeight={600}
          pos="absolute"
          left="50%"
          transform="translateX(-50%)"
        >
          FUTHARK Game
        </Text>
      </Flex>
      <Divider mt={{ base: 10, lg: 5 }} mb={5} />
      <Flex w="100%" flexWrap={"wrap"} gap={5}>
        <Flex
          gap={5}
          justify={{ base: "center", md: "space-between" }}
          w="100%"
          flexWrap={"wrap"}
        >
          <Flex align={"center"} gap={5}>
            <Link href={"#"} isExternal>
              <Icon as={BsDiscord} w={8} h={8} />
            </Link>
            <Link href={"#"} isExternal>
              <Icon as={BsTwitter} w={8} h={8} />
            </Link>
          </Flex>
          <Flex align={"center"} gap={5} flexWrap={"wrap"}>
            <Badge>Fejlesztő: TIPONT</Badge>
            <Badge>Platform: Web</Badge>
            <Badge>Műfaj: Kártya gyűjtés</Badge>
            <Badge>Állapot: Beta</Badge>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir={"column"} gap={{ base: 5, md: 2 }}>
        <Text
          mt={5}
          fontWeight={600}
          fontSize={{
            base: "2xl",
            sm: "3xl",
          }}
        >
          About
        </Text>
        <Text>
          Ez egy gyűjtögető játék. A játék alapját az NFT-k sorszáma adja.
          Eltérő értékű sorozatot lehet létrehozni.
        </Text>
        <Text>
          Előszőr pontokat csak az azonos kollekciókból lehet gyűjteni. Később
          az azonos sorozatszámú, de más kollekciókból származó NFT-k is
          alkothatnak sorozatot és érhetnek pontot. Egy sorozat minimálian 3
          elemből áll.
        </Text>
      </Flex>
      <Flex justify={"center"} mt={5} gap={5}>
        <Flex
          onMouseEnter={() => setCardFlipped(1)}
          onMouseLeave={() => setCardFlipped(0)}
        >
          <ReactCardFlip isFlipped={cardFlipped === 1}>
            <Image src="/card_front.png" w={300} h={420} />
            <Image src="/card_back.png" w={300} h={420} />
          </ReactCardFlip>
        </Flex>
      </Flex>
      <Flex flexDir={"column"} gap={{ base: 5, md: 2 }} mt={5}>
        <Text>
          Egy NFT több sorozatban is szerepelhet. Vannak értékesebb NFT-k.
          Például az azonos számokból 1, 11, 111, 1111 létrehozott kollekciók a
          legértékesebbek. Minimum három NFT-ből áll egy sorozat. A játék
          kiértékelésének időpontját mindig előre jelezzük.
        </Text>
        <Flex flexDir={"column"}>
          <Text>Sorozatonként az első 10 helyezett lesz díjazva.</Text>
          <Text>1. hely 1db Blue chip NFT</Text>
          <Text>2-5. hely 1db game server Pass NFT</Text>
          <Text>6-10. hely 1db game server Utility NFT</Text>
        </Flex>
        <Text>Részletes szabályok a súgóban.</Text>
      </Flex>
      <Flex justify={"center"} gap={5} mt={5}>
        <Button
          rounded={"full"}
          as="a"
          href="https://docs.tipont.com/v0.2/games/futhark-game"
        >
          Description
        </Button>
        <Button rounded={"full"}>Visit Store</Button>
      </Flex>
    </>
  );
};

export default FutharkGame;
