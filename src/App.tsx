import * as React from "react";
import { ChakraProvider, Box, Flex, theme } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Navbar/Sidebar";

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
          <Outlet />
        </Flex>
      </Sidebar>
    </Box>
  </ChakraProvider>
);
