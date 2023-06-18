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
import React from "react";
import { colors } from "../../utils/colors";
import { BsDiscord, BsTwitter } from "react-icons/bs";

const AtlantiszVilaga = () => {
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
          Atlantisz Világa
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
            <Badge>Műfaj: Turn-Based RTS</Badge>
            <Badge>Állapot: IN DEVELOPMENT</Badge>
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
          A legizgalmasabb körökre osztott valós idejű stratégiai játék
        </Text>
        <Text as="ul" ml={5}>
          <Text as="li">10 korszak</Text>
          <Text as="li">10 nép</Text>
          <Text as="li">50+ féle katonai egység</Text>
          <Text as="li">5-5 mágikus és alvilági kaszt</Text>
          <Text as="li">400 találmány</Text>
          <Text as="li">50+ bónusz</Text>
          <Text as="li">14 katonai akció</Text>
          <Text as="li">100+ mágikus és alvilági akció</Text>
          <Text as="li">5-10 sziget és hajózás</Text>
        </Text>
      </Flex>
      <Flex flexDir={"column"} gap={{ base: 5, md: 2 }} mt={5}>
        <Text>
          Erőssége a jól kiegyensúlyozott játék. Mindenki megtalálja a
          stílusának legmegfelelőbb játékstílust. Mindezt hónapokon, akár éveken
          keresztül. Nem a gép vagy az idő ellen kell játszani, hanem egymás
          ellen. Nem egy szimulátor, amit ott lehet hagyni és csak termeli a
          pontokat, hanem részévé kell válni a játéknak! Keress magadnak egy
          birodalmat és legyetek a legerősebbek. A játék másik előnye, hogy nem
          saját tokkennel dolgozik, hanem a hálózat nativ tokenjével. Így nem
          kell tartani a kapott jutalmak elértéktelenedésétől.
        </Text>
      </Flex>
      <Flex justify={"center"} gap={5} mt={5}>
        <Button
          rounded={"full"}
          as="a"
          href="https://docs.tipont.com/v0.2/games/atlantis"
        >
          Description
        </Button>
        <Button rounded={"full"} isDisabled>
          Play
        </Button>
      </Flex>
    </>
  );
};

export default AtlantiszVilaga;
