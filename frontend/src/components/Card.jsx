import * as React from "react";
import {
  Container,
  Box,
  HStack,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import MainScreen from "./MainScreen";

const Card = ({ data }) => {
  const bg = useColorModeValue("#f8f8ff", "#2f3244");

  return (
    <Container maxW="8xl" p={{ base: 7, md: 10 }}>
      <Center>
        <Box
          maxH="1200px"
          minH="380px"
          w="380px"
          boxShadow="2xl"
          rounded="lg"
          p={6}
          overflow="hidden"
          cursor="pointer"
          _hover={{ boxShadow: "xl" }}
          bg={bg}
          role="group"
        >
          <MainScreen data={data} />
        </Box>
      </Center>
    </Container>
  );
};

export default Card;
