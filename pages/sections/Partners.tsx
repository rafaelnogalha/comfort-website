import { 
  Flex, 
  Container, 
  Stack, 
  Box, 
  Heading, 
  Text, 
  Image, 
  Center, 
  SimpleGrid,
  HStack
} from '@chakra-ui/react';
import Head from 'next/head'
import { 
  FaPencilAlt, 
  FaBookOpen, 
  FaChurch,
  FaHandHoldingMedical,
  FaUserFriends,
  FaLeaf
} from "react-icons/fa";

export default function Partners() {

  return(
    <>
      <Head>
        <title>Comfort International Brasil</title>        
      </Head>
      <Container
        maxWidth={1200}
      >

        <Stack
          mt="150px"
          direction={{ base: 'column', md: 'column', lg: 'column' }} 
          alignItems="center"
          className="partnership"
        >
          <Box
            width={{ base: '85%', md: '85%', lg: '80%' }}
            mr={{base: "5px", sm:"5px" , md:"5px" ,lg: "50px"}}
          >
            <Text
              fontSize={{ base: '16px', md: '16px', lg: '18px' }}
              mb={{ base: '2', md: '4' }}
              textAlign={['center', 'center', 'center', 'center']} 
              
            >
              NOSSOS
            </Text>

            <Text
              fontSize={{ base: '20px', md: '28px', lg: '24px' }}
              mb={{ base: '2', md: '4' }}
              textAlign={['center', 'center', 'center', 'center']} 
              
            >
              PARCEIROS
            </Text>
          </Box>
          <Stack
            alignItems="center"
            direction={{ base: 'column', md: 'row', lg: 'row' }} 
            spacing={{ base: '20px', md: '50px', lg: '20px' }}
          >
            <Box>
              <Image src="/configr.png"></Image>
            </Box>
            <Box>
              <Image src="/pontual.png"></Image>
            </Box>
          </Stack>
        </Stack>
      </Container>

    </>
  )
}

