import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Roadmap = () => {
  return (
    <Flex flexDir="column">
      <Accordion>
        <RoadmapAccordion title="Step 1 - Concept">
          <Flex flexDir="column">
            <Text color="black">
              - Step 1.1: Koncepció és ötlet - a játék megtervezése.
            </Text>
            <Text color="black">
              - Step 1.2: Koncepció a finanszírozás megoldására. - Loyalty NFT.
            </Text>
            <Text color="black">- Step 1.3: Játékszabály kidolgozása.</Text>
            <Text color="black">
              - Step 2.4: Blokklánc és Tokenomika - Blokklánc kiválasztása.
              Saját token, vagy egy már meglévő használata.
            </Text>
          </Flex>
        </RoadmapAccordion>
        <RoadmapAccordion title="Step 2 - Progress">
          <Flex flexDir="column">
            <Text color="black">- Step 2.1: Loyalty NFT-k tervezése</Text>
            <Text color="black">- Step 2.2: Website Launch</Text>
            <Text color="black">- Step 2.3: Open Discord Community</Text>
            <Text color="black">- Step 2.4: Open Twitter Page</Text>
            <Text color="black">- Step 2.5: Loyalty NFT értékesítése</Text>
            <Text color="black">- Step 2.6: Certik Audit</Text>
            <Text color="black">- Step 2.7: Fejlesztés megkezdése</Text>
            <Flex flexDir="column" ml={4}>
              <Text color="black">
                - Step 2.7.1: Adatbázis-, felhasználói élmény tervezés és
                optimalizálása
              </Text>
              <Text color="black">- Step 2.7.2: Programkód írás</Text>
              <Text color="black">
                - Step 2.7.3: Felhasználói interfész elkészítés
              </Text>
            </Flex>
          </Flex>
        </RoadmapAccordion>
        <RoadmapAccordion title="Step 3 - NFTs">
          <Flex flexDir="column">
            <Text color="black">
              - Step 3.1: Pass NFT értékesítése - Az első telepesek. A befolyt
              összeg alapozza meg a játék kezdetekor induló első Tournament
              alapját.
            </Text>
            <Text color="black">
              - Step 3.2: Kiegészítő NFT értékesítése - A játékban lesznek
              korlátozott számú NFT-k amik segítenek a játékban, de nem
              nyújtanak behozhatatlan előnyt. Minden NFT-ből a Pass NFT-k 70%
              keletkezik ezres kerekítéssel.
            </Text>
            <Text color="black">
              - Step 3.3: Játék beta teszt - A tényleges indulást megelőzően egy
              regisztrálás nélküli beta teszt indul. Először itt lesz publikálva
              a teljes játékszabály.
            </Text>
            <Text color="black">
              - Step 3.4: Shop beindítása - Különböző merchandise értékesítése.
            </Text>
          </Flex>
        </RoadmapAccordion>
        <RoadmapAccordion title="Step 4 - Game">
          <Flex flexDir="column">
            <Text color="black">
              - Step 4.1: Start game - Az első szerverek indulása.
            </Text>
          </Flex>
        </RoadmapAccordion>
      </Accordion>
    </Flex>
  );
};

const RoadmapAccordion = ({ title, children }) => {
  const AccordionButtonProps = {
    bg: "rgba(0,0,0,.05)",
    _expanded: { bg: "rgba(0, 0, 0, 0.15)" },
    borderRadius: 12,
    mb: 2,
  };

  const AccordionTitleProps = {
    as: "span",
    flex: "1",
    textAlign: "left",
    color: "black",
    fontWeight: 800,
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton {...AccordionButtonProps}>
          <Box {...AccordionTitleProps}>{title}</Box>
          <AccordionIcon color="black" />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  );
};

export default Roadmap;
