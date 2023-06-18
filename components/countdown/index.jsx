import { Flex, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CountdownCard from "./card";

export function CountdownTimer({ targetDate, ...props }) {
  const [mounted, setMounted] = useState(false);
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>Loading...</>;

  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      gap={4}
      {...props}
    >
      <CountdownCard value={timeLeft.days} label="Days" />
      <CountdownCard value={timeLeft.hours} label="Hours" />
      <CountdownCard value={timeLeft.minutes} label="Minutes" />
      <CountdownCard value={timeLeft.seconds} label="Seconds" />
    </Grid>
  );
}
