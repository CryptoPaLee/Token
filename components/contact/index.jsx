import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <>
      <Text color="black" fontWeight={600} fontSize={"xl"}>
        Üdvözlünk és köszönjük, hogy érdeklődsz a kapcsolatfelvétel iránt!
      </Text>
      <Text color="black">
        Ha szeretne csatlakozni közösségünkhöz, megvitatni releváns témákat,
        vagy egyszerűen segítséget kérni, szeretettel meghívjuk Önt, hogy
        csatlakozzon hivatalos{" "}
        <Text as="a" href="#" fontWeight={600} textDecor="underline">
          Discord
        </Text>{" "}
        szerverünkhöz. Ez a platform lehetővé teszi számunkra, hogy
        együttműködjünk, ötleteket osszunk meg, és valós időben támogassuk
        egymást, így teremtve egy élénk és vonzó élményt.
      </Text>
      <Text color="black">
        A ticket rendszer használatával biztosíthatjuk, hogy kérdéseit vagy
        aggodalmait időben és rendezetten kezeljük. Moderátoraink és
        adminisztrátoraink csapata mindig rendelkezésre áll, hogy segítsen
        Önnek, és gondoskodjon arról, hogy közösségünkben eltöltött ideje
        kellemes legyen.
      </Text>
      <Text color="black">
        Örülünk, hogy része lehet növekvő közösségünknek, és alig várjuk, hogy
        kapcsolatba lépjünk Önnel Discord szerverünkön. Találkozunk ott!
      </Text>
      <Flex justify={"center"}>
        <Button
          colorScheme="green"
          as="a"
          href="https://discord.gg/VX8TDQ4A2u"
          borderRadius={"full"}
        >
          Csatlakozás a szerverre
        </Button>
      </Flex>
    </>
  );
};

export default Contact;
