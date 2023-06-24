import * as React from "react";
import { Box } from "@chakra-ui/react";
import units from "../components/Unit/units.json";
import StatusBar from "../components/StatusBar";
import Unit from "../components/Unit/Unit";

const list = {
  language: "Spanish",
  streak: 0,
  coins: 0,
  experience: 0,
};

const Learn = () => {
  return (
    <>
      <Box minH="100vh" w="full" border="1px" px="10">
        {units.map((unit, index) => {
          return (
            <Unit
              name={unit.name}
              color={unit.color}
              number={index + 1}
              lessons={unit.lessons.length}
            />
          );
        })}
      </Box>
      <StatusBar list={list} />
    </>
  );
};

export default Learn;
