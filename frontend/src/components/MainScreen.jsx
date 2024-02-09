import * as React from "react";
import {
  Box,
  Text,
  Heading,
  Flex,
  Avatar,
  Link,
  VStack,
  IconButton,
  Divider,
  Fade,
  Image,
  Button,
  CardFooter,
  Center,
} from "@chakra-ui/react";
import { BiLike, BiChat } from "react-icons/bi";
// Here we have used framer-motion package for animations
import { motion } from "framer-motion";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
};

const MainScreen = ({data}) => {
  console.log(data);
  return (
    <VStack spacing={5}>
      <motion.div
        whileHover={{ y: -5, scale: 1.1 }}
      >
        <Box boxShadow="xl" _hover={{ boxShadow: "lg" }}>
          <Image
            _groupHover={{ width: "20rem", height: "13rem" }}
            size="xl"
            src={data.image}
            transition={{ duration: 0.3 }}
          />
        </Box>
      </motion.div>
      <Heading
        fontSize="xl"
        fontFamily="vinque"
        textTransform="capitalize"
        noOfLines={2}
      >
       {data.title}
      </Heading>

      <Text
        color="gray.500"
        fontSize="lg"
        noOfLines={{ base: 3, md: 4 }}
        _groupHover={{ display: "none" }}
        display="block"
      >
        {data.location}
      </Text>

      <Text
        color="gray.500"
        fontSize="lg"
        noOfLines={{ base: 3, md: 4 }}
        _groupHover={{ display: "none" }}
        display="block"
      >
       {data.user}
      </Text>

      <Fade in>
        <Text
          color="gray.500"
          fontSize="lg"
          noOfLines={{ base: 3, md: 4 }}
          _groupHover={{ display: "block" }}
          display="none"
        >
         {data.description}
        </Text>
      </Fade>
      <Divider />
      <Flex direction="row" gap={50}>
        <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
           Like {data.likes}
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
          Comment {data.comments}
        </Button>
      </Flex>
    </VStack>
  );
};

export default MainScreen;
