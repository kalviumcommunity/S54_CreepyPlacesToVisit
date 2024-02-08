import * as React from 'react';
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
  Center
} from '@chakra-ui/react';
import { BiLike, BiChat} from 'react-icons/bi';
// Here we have used framer-motion package for animations
import { motion } from 'framer-motion';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const MainScreen = () => {
  return (
    <VStack spacing={5}>
      <motion.div whileHover={{ y: -5, scale: 1.2 }}>
        <Box boxShadow="xl" _hover={{ boxShadow: 'lg' }} >
        <Image
            _groupHover={{ width: '15rem', height: '10rem' }}
            size="xl"
            src="https://t4.ftcdn.net/jpg/05/62/81/65/240_F_562816532_9cpzxBULerlNQ0UeuHHfWnTAd64PBf1z.jpg"
            transition={{ duration: 0.3 }}

          />
        </Box>
      </motion.div>
      <Heading fontSize="xl" fontFamily="vinque" textTransform="capitalize" noOfLines={2} >
  Abandoned Asylum
</Heading>

      <Text
        color="gray.500"
        fontSize="lg"
        noOfLines={{ base: 3, md: 4 }}
        _groupHover={{ display: 'none' }}
        display="block"
      >
          Outskirts of towns
      </Text>
      
      <Text
        color="gray.500"
        fontSize="lg"
        noOfLines={{ base: 3, md: 4 }}
        _groupHover={{ display: 'none' }}
        display="block"
      >
          Username
      </Text>

      <Fade in>
        <Text
          color="gray.500"
          fontSize="lg"
          noOfLines={{ base: 3, md: 4 }}
          _groupHover={{ display: 'block' }}
          display="none"
        >
      Stands as a haunting reminder of past traumas, its crumbling walls echoing the stories of those who once sought refuge within.
        </Text>
      </Fade>
      <Divider />
      <Flex direction="row" gap={50} >
        <Button flex='1' variant='ghost' leftIcon={<BiLike />} >
          Like 2
        </Button>
        <Button flex='1' variant='ghost' leftIcon={<BiChat />} >
          Comment
        </Button>
      </Flex>
    </VStack>
  );
};

export default MainScreen;