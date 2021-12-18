import { Flex, Container, Stack, Box, Heading, Text, Image, Center, Button } from '@chakra-ui/react';
import Head from 'next/head'


export default function Volunteer() {

  return(
    <>
      <Head>
        <title>Comfort International Brasil</title>        
      </Head>
      
      <Container
        maxWidth={1200}
      >

        <Stack
          mt="50px"
          direction={{ base: 'column', md: 'column', lg: 'column' }} 
          className="volunters"
        >
          <Box
            width={{ base: '100%', md: '100%', lg: '100%' }}
            textAlign="center"
            alignItems="center"
          >
            <Text
              fontSize={{ base: '14px', md: '14px', lg: '18px' }}
              mb={{ base: '2', md: '4' }}
            >
              FAÇA PARTE DO NOSSO TIME
            </Text>
            <Button
              bg='black'
            >  
              CADASTRO
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  )
}

