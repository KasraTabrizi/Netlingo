import * as React from "react";
import { ChakraProvider, Box, Flex, theme } from "@chakra-ui/react";
import units from "./components/Unit/units.json";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Sidebar from "./components/Navbar/Sidebar";
import StatusBar from "./components/StatusBar";
import Unit from "./components/Unit/Unit";

const list = {
  language: "Spanish",
  streak: 0,
  coins: 0,
  experience: 0,
};

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box minH="100vh" fontSize="xl">
      <Sidebar>
        <Flex
          p="5"
          alignItems="flex-start"
          justifyContent="space-between"
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
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
        </Flex>
      </Sidebar>
    </Box>
  </ChakraProvider>
);
