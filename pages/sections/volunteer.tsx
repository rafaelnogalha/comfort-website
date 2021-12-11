import { Flex, Container, Stack, Box, Heading, Text, Image, Center, Button } from '@chakra-ui/react';
import Head from 'next/head'


export default function Volunteer() {

  return(
    <>
      <Head>
        <title>Comfort International Brasil</title>        
      </Head>
      
      
      <Stack
        mt="150px"
        direction={{ base: 'column', md: 'column', lg: 'column' }} 
        alignItems="center"
        className="volunters"
      >
        <Box
          width={{ base: '85%', md: '85%', lg: '80%' }}
          mr={{base: "5px", sm:"5px" , md:"5px" ,lg: "50px"}}
        >
          <Text
            fontSize={{ base: '14px', md: '14px', lg: '18px' }}
            mb={{ base: '2', md: '4' }}
            textAlign={['center', 'center', 'center', 'center']} 
            
          >
            FAÇA PARTE DO NOSSO TIME
          </Text>
          
        </Box>
        <Box>
          <Button
            bg='black'
          >  
            CADASTRO
          </Button>
        </Box>
      </Stack>

    </>
  )
}

