import { Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const Team = () => {
  return (
    <Flex flexDir="column">
      <Text color="black" fontWeight={800}>
        Team:
      </Text>
      <Flex gap={4} flexWrap="wrap">
        {TeamList.map((teamMember, index) => (
          <TeamMember
            key={index}
            name={teamMember.label}
            title={teamMember.title}
            href={teamMember.href}
            pfp={teamMember.imgSrc}
          />
        ))}
      </Flex>
    </Flex>
  );
};

const TeamMember = ({ name, title, href, pfp }) => {
  return (
    <Flex
      flexDir="column"
      {...(href && {
        as: Link,
        href: href,
        isExternal: true,
      })}
      justify="flex-start"
      alignItems="center"
      flex={1}
    >
      <Image src={pfp} w={"64px"} borderRadius={"full"} mb={2} />
      <Text color="black" fontWeight={800}>
        {name}
      </Text>
      <Text color="black" fontSize="sm" align={"center"}>
        {title}
      </Text>
    </Flex>
  );
};

const TeamList = [
  {
    label: "PaLee",
    title: "Founder",
    imgSrc: "/pfps/palee.png",
  },
  {
    label: "NFTEAM",
    title: "Software Engineering",
    href: "https://nfteam.eu/",
    imgSrc: "/pfps/nfteam.png",
  },
  {
    label: "fLix",
    title: "Blockchain Dev",
    imgSrc: "/pfps/flix.png",
  },
  {
    label: "Doggo",
    title: "Blockchain Dev",
    imgSrc: "/pfps/doggo.png",
  },
  {
    label: "CA$INO",
    title: "Community",
    imgSrc: "/pfps/casino.png",
  },
];

export default Team;
