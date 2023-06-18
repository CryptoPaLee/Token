import { Box, Divider, Flex, Text, Grid } from "@chakra-ui/layout";
import React, { useState } from "react";
import { colors } from "../../utils/colors";
import Link from "next/link";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import ReactCardFlip from "react-card-flip";
import { Icon } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useAccount, useConnect } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import QtyControls from "../../components/qtyControls";
import Footer from "../../components/footer/footer";

const Mint = () => {
  const [mintQty, setMintQty] = useState(1);
  const { openConnectModal } = useConnectModal();
  const { isConnected, address } = useAccount({});

  const mint = async () => {
    console.log(mintQty);
  };

  return (
    <>
      <Flex
        w="100%"
        pos="relative"
        align="center"
        justify={"space-between"}
        mb={5}
      >
        <Flex cursor="pointer" as={Link} href="/">
          <Image
            src={"/T_logo.png"}
            h={12}
            display={{
              base: "block",
              md: "none",
            }}
          />
          <Image
            src={"/Tipont_logo.png"}
            h={12}
            display={{
              base: "none",
              md: "block",
            }}
          />
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
          Mint
        </Text>

        <Flex
          h={12}
          w={12}
          align="center"
          justify="center"
          borderRadius={8}
          cursor="pointer"
          as={Link}
          href="/"
          transition={"all 0.15s ease-in-out"}
          _hover={{ textDecoration: "none" }}
        >
          <Text fontWeight={800} fontSize={24}>
            {"X"}
          </Text>
        </Flex>
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={8}
      >
        <Card
          active
          imgSrc={"/mints/tipont-token.png"}
          title={"Tipont Token"}
          subtitle={" "}
          counter={"9999"}
          items={"10K"}
          price={"0.3 BNB"}
          info={"https://docs.tipont.com/nfts/tipont-token"}
          controls={{ setMintQty, mintQty }}
          isConnected={isConnected}
          openConnectModal={openConnectModal}
          mint={mint}
        />
        <Card
          imgSrc={"/mints/pfps.gif"}
          title={"PFPs"}
          subtitle={"free mint"}
          items={"10K"}
          info={"https://docs.tipont.com/nfts/pfps"}
          description={
            "Minden Tipont Token tulajdonos szerezhet egy egyedi Tipont profilképet."
          }
        />
        <Card
          imgSrc={"/mints/loyalty.png"}
          title={"Loyalty NFT"}
          subtitle={"pre-sale"}
          info={"https://docs.tipont.com/nfts/tipont-loyalty-nft"}
          description={
            "A Tipont Token tulajdonosok kedvezményesen vásárolhatnak a korlátozott számú Loyality NFT-ből."
          }
        />
        <Card
          imgSrc={"/mints/loyalty-public.png"}
          title={"Loyalty NFT"}
          subtitle={"public sale"}
          info={"https://docs.tipont.com/nfts/tipont-loyalty-nft"}
          description={
            "A Loyalty NFT-k lehetővé teszik, hogy 50% kedvezménnyel szerezhes be minden szerverhez 1db PASS-t."
          }
        />
        <Card
          imgSrc={"/mints/futhark-free.png"}
          title={"Futhark"}
          subtitle={"free mint"}
          info={"https://docs.tipont.com/nfts/futhark-card"}
          description={
            "Minden Tipont Token tulajdonos Mintelhet 1db Futhark kártyát."
          }
        />
        <Card
          imgSrc={"/mints/futhark-public.png"}
          title={"Futhark"}
          subtitle={"public sale"}
          info={"https://docs.tipont.com/nfts/futhark-card"}
          description={
            "Az első játék. Gyüjts össze minnél több sorozatot, értékes NFT jutalmakért."
          }
        />
        <Card
          imgSrc={"/mints/server-pass.gif"}
          title={"Server PASS"}
          subtitle={"public sale"}
          info={"https://docs.tipont.com/nfts/server-pass"}
          description={
            "A Tipont Token tulajdonosok kedvezményesen vásárolhatnak a korlátozott számú Loyality NFT-ből."
          }
        />
        <Card
          imgSrc={"/mints/utility.gif"}
          title={"Utility NFT"}
          subtitle={"public sale"}
          info={"https://docs.tipont.com/nfts/utility-nft"}
          description={
            "Itt válnak elérhetővé a játékokhoz tartozó utility NFT-k. Tipont Token tulajdonosok 1db random NFT-t kérhetnek ki."
          }
        />
      </Grid>
      <Footer mt={5} />
    </>
  );
};

const Card = ({
  title,
  subtitle,
  description,
  imgSrc,
  counter,
  info,
  controls,
  items,
  price,
  isConnected,
  openConnectModal,
  mint,
  active,
  ...props
}) => {
  const [cardFlipped, setCardFlipped] = useState(0);

  if (!active) {
    return (
      <Flex
        onMouseEnter={() => setCardFlipped(1)}
        onMouseLeave={() => setCardFlipped(0)}
        w={"100%"}
      >
        <ReactCardFlip
          isFlipped={cardFlipped === 1}
          containerStyle={{
            width: "100%",
          }}
          flipSpeedBackToFront={0.9}
          flipSpeedFrontToBack={0.9}
        >
          <Flex
            direction={"column"}
            bg={"#000"}
            borderRadius={25}
            align={"center"}
            justify={"center"}
            p={5}
            minH={325}
            w={"100%"}
            bgImage={"url(" + imgSrc + ")"}
            bgSize={"contain"}
            bgPosition={"center"}
            border={"inset 25px transparent"}
            bgRepeat={"no-repeat"}
            _after={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.8)",
              borderRadius: 25,
              zIndex: 1,
            }}
          >
            <Text
              fontSize={"3xl"}
              mt={2}
              fontWeight={600}
              textAlign={"center"}
              zIndex={2}
              mb={5}
            >
              {title}
            </Text>
            <Text zIndex={2} fontSize={"xl"} as="i" fontWeight={600}>
              {subtitle || " "}
            </Text>
            <Divider
              my={2}
              zIndex={5}
              borderColor={"white"}
              borderWidth={2}
              w={"50%"}
            />
            <Text fontWeight={400} zIndex={2} fontSize={"2xl"} mb={5}>
              {items ? "Items: " + items : " "}
            </Text>
            <Text zIndex={2} fontWeight={700} fontSize={"3xl"}>
              Coming soon
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            bg={"#000"}
            borderRadius={25}
            align={"center"}
            justify={"center"}
            p={10}
            minH={325}
            w={"100%"}
          >
            {info && (
              <Link href={info} target="_b">
                <Icon
                  as={AiOutlineInfoCircle}
                  position={"absolute"}
                  top={5}
                  right={5}
                  fontSize={36}
                  color={"#00ff00"}
                />
              </Link>
            )}
            <Text textAlign={"center"} fontSize={"xl"}>
              {description}
            </Text>
          </Flex>
        </ReactCardFlip>
      </Flex>
    );
  }

  return (
    <Flex
      onMouseEnter={() => setCardFlipped(1)}
      onMouseLeave={() => setCardFlipped(0)}
      w={"100%"}
    >
      <ReactCardFlip
        isFlipped={cardFlipped === 1}
        containerStyle={{
          width: "100%",
        }}
        flipSpeedBackToFront={0.9}
        flipSpeedFrontToBack={0.9}
      >
        <Flex
          direction={"column"}
          bg={"#000"}
          borderRadius={25}
          align={"center"}
          justify={"center"}
          p={5}
          minH={325}
          w={"100%"}
          bgImage={"url(" + imgSrc + ")"}
          bgSize={"contain"}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
          border={"inset 25px transparent"}
          _after={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.75)",
            borderRadius: 25,
            zIndex: 1,
          }}
        >
          <Text
            fontSize={"3xl"}
            fontWeight={600}
            textAlign={"center"}
            zIndex={2}
            mb={5}
          >
            {title}
          </Text>
          <Text zIndex={2} fontSize={"xl"}>
            {subtitle}
          </Text>
          <Divider
            my={2}
            zIndex={2}
            borderColor={"white"}
            w={"50%"}
            borderWidth={2}
          />
          <Text fontWeight={400} zIndex={2} mb={5} fontSize={"2xl"}>
            Items: {items}
          </Text>
          <Text fontWeight={700} zIndex={2} fontSize={"3xl"}>
            {price}
          </Text>
        </Flex>
        <Flex
          direction={"column"}
          bg={"#000"}
          borderRadius={25}
          align={"center"}
          justify={"center"}
          p={10}
          minH={325}
          w={"100%"}
          position={"relative"}
        >
          <Text
            textAlign={"center"}
            fontSize={"xl"}
            position={"absolute"}
            top={5}
            left={5}
          >
            Left: {counter}
          </Text>
          {info && (
            <Link href={info} target="_b">
              <Icon
                as={AiOutlineInfoCircle}
                position={"absolute"}
                top={5}
                right={5}
                fontSize={36}
                color={"#00ff00"}
              />
            </Link>
          )}
          <Image src={imgSrc} w={"100%"} maxW={128} mb={"auto"} mt={5} />
          <QtyControls
            mintQty={controls.mintQty}
            setMintQty={controls.setMintQty}
          />
          <Divider my={2} />
          {isConnected ? (
            <Button w={"100%"} onClick={mint}>
              Mint
            </Button>
          ) : (
            <Button w={"100%"} onClick={openConnectModal}>
              Connect Wallet
            </Button>
          )}
        </Flex>
      </ReactCardFlip>
    </Flex>
  );
};

export default Mint;
