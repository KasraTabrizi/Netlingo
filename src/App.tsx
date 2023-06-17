import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Sidebar from "./components/Sidebar/Sidebar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box minH="100vh" fontSize="xl">
      <Sidebar>
        <Grid p={3}>
          <ColorModeSwitcher
            justifySelf="flex-end"
            display={{ base: "none", md: "flex" }}
          />
        </Grid>
      </Sidebar>
    </Box>
  </ChakraProvider>
);
