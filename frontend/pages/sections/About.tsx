import { Flex, Container, Stack, Box, Heading, Text, Image, Center } from '@chakra-ui/react';
import Head from 'next/head'


export default function About() {

  return(
    <>
      <Head>
        <title>Comfort International Brasil</title>        
      </Head>
      
      
      <Stack
        mt="150px"
        direction={{ base: 'column', md: 'column', lg: 'column' }} 
        alignItems="center"
        className="about"
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
            SOBRE NÓS
          </Text>
          <Text
            fontSize={{ base: '20px', md: '20px', lg: '25px' }}
            mb={{ base: '2', md: '4' }}
            textAlign={['center', 'center', 'center', 'center']} 
          >
            Uma associação criada para ajudar e 
            encorajar vítimas de guerra e sobreviventes,
            do genocídio em Ruanda, em sua caminhada de 
            recuperação.
          </Text>
          <Text
            as="h2"
            fontSize={{ base: '15px', md: '15px', lg: '20px' }}
            mb={{ base: '2', md: '4' }}
            textAlign={['center', 'center', 'center', 'center']} 
          >
            Atuamos hoje em Ruanda, República democrática 
            do Congo, Burundi, Sudão do sul e onde mais 
            Deus nos direcionar. Proporcionando a 
            esperança de um futuro melhor para essas 
            pessoas e suas comunidades.
          </Text>
        </Box>

      </Stack>

    </>
  )
}

