import * as React from "react";
import { Center, Heading, Stack, VStack, Circle } from "@chakra-ui/react";

interface UnitProps {
  name: string;
  color: string;
  number: Number;
  lessons: Number;
}

const Unit = ({ name, color, number, lessons }: UnitProps) => {
  return (
    <VStack spacing="20" mb="10">
      <Center bg={color} h="100" w="full" color="white" borderRadius="md">
        <Stack spacing="0.5">
          <Heading as="h1" size="xl" textAlign="center">
            {`Unit ${number}`}
          </Heading>
          <Heading as="h2" size="md" textAlign="center">
            {name}
          </Heading>
        </Stack>
      </Center>
      <Circle size="100px" bg="purple.400" color="white" cursor="pointer">
        Lesson 1
      </Circle>
      <Circle size="100px" bg="purple.400" color="white" cursor="pointer">
        Lesson 2
      </Circle>
    </VStack>
  );
};

export default Unit;
