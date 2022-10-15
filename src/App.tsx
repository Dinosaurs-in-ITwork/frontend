import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="20vmin" pointerEvents="none" />
          <Text>
            Hello world from Dinosaurs in Itwork!!!
          </Text>
          <Link
            color="teal.500"
            href="https://github.com/Dinosaurs-in-ITwork"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            our organisation
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
