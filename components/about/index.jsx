import { Link, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <>
      <Text color="black">
        A célunk az, hogy olyan játékokat fejleszthessünk, amelyekkel a
        felhasználók szívesen töltik el szabadidejüket és amelyeket igazán
        élvezetesnek találnak. Arra is törekszünk, hogy a játékosok
        teljesítményét a játékon belül megfelelő jutalmakkal ismerjük el. Ennek
        érdekében két fő részre bontjuk a terveinket:
      </Text>
      <Text color="black">
        <Text as="span" fontWeight={800}>
          Játékokat kedvelő közösség létrehozása:
        </Text>{" "}
        Célunk egy olyan közösség kialakítása, ahol a játékosok találkozhatnak,
        megoszthatják tapasztalataikat, és együtt törekedhetnek a játékokban
        való fejlődésre.
      </Text>
      <Text color="black">
        <Text as="span" fontWeight={800}>
          NFT-alapú játékok fejlesztése:
        </Text>{" "}
        A játékokban használatos NFT-k a játékosok tulajdonában lesznek, így ők
        rendelkezhetnek a tulajdonjogokkal. Ezeket az NFT-ket kölcsön adhatják
        más játékosoknak, akik így részesülhetnek a megszerzett jutalmakból.
        Amennyiben a játékosok úgy döntenek, hogy már nem szeretnének játszani,
        az NFT-ket el is adhatják.
      </Text>
      <Text color="black">
        Folyamatosan dolgozunk a játékok fejlesztésén és javításán. Ennek
        érdekében együttműködünk a Discord közösségünkkel, ahol visszajelzéseket
        és ötleteket gyűjtünk a játékosoktól. A feltevéseket pedig teszteljük és
        validáljuk, hogy a lehető legjobb játékélményt nyújthassuk.
      </Text>
      <Text color="black">Köszönjük érdeklődésed!</Text>
    </>
  );
};

export default About;
