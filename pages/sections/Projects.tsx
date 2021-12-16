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

export default function Projects() {

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
          className="projects"
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
              MUDANDO VIDAS
            </Text>

            <Text
              fontSize={{ base: '20px', md: '28px', lg: '24px' }}
              mb={{ base: '2', md: '4' }}
              textAlign={['center', 'center', 'center', 'center']} 
              
            >
              TRANSFORMANDO COMUNIDADES
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: '16px', md: '16px', lg: '20px' }}
              mb={{ base: '2', md: '4' }}
              textAlign={['center', 'center', 'center', 'center']} 
              
            >
              Esses são alguns dos projetos que apoiamos, 
              e os principais que o Brasil tem ajudado. 
              Esses 2 projetos funcionam de maneira semelhante 
              e para ajudar basta uma doação mensal do valor 
              que você quiser. 
            </Text>
          </Box>
          <HStack>
            <Box
              bg={{ base: '#f5f5f5', sm: '#f5f5f5', md: '#f5f5f4', lg: '#f5f5f5' }}  
              width={{ base: '100%', md: '100%', lg: '100%' }}
            >
              <Image
                src="/project_pic_1.jpg"
                
              ></Image>
              <Text
                fontSize={{ base: '20px', md: '28px', lg: '24px' }}
                mb={{ base: '2', md: '4' }}
                textAlign={['center', 'center', 'center', 'center']} 
                color="gray.900"
              >
                RESGATE DE CRIANÇAS DE RUA
              </Text>
              
              <Text
                fontSize={{ base: '20px', md: '28px', lg: '24px' }}
                mb={{ base: '2', md: '4' }}
                textAlign={['center', 'center', 'center', 'center']} 
                color="gray.900"
              >
                O projeto busca mudar radicalmente 
                a vida de crianças forçadas a 
                viver nas comunidades de Ruanda 
                e função da pobreza ruptura 
                familiar ou orfandade.O programa 
                fornece comida, educação, cuidados 
                com a saúde, esportes, música e um
                ambiente de acolhimento e amor.
                Buscamos reintegrar os laços 
                familiares, quando possível.
              </Text>
            </Box>
            <Box
              width={{ base: '100%', md: '100%', lg: '100%' }}
            >
              <Image
                src="/project_pic_2.jpg"
              >
              </Image>
              <Text
                fontSize={{ base: '20px', md: '28px', lg: '24px' }}
                mb={{ base: '2', md: '4' }}
                textAlign={['center', 'center', 'center', 'center']} 
                
              >
                FILHOS DA LIBERDADE
              </Text>
              
              <Text
                fontSize={{ base: '20px', md: '28px', lg: '24px' }}
                mb={{ base: '2', md: '4' }}
                textAlign={['center', 'center', 'center', 'center']} 
              >
                O projeto busca mudar radicalmente 
                a vida de crianças forçadas a 
                viver nas comunidades de Ruanda 
                e função da pobreza ruptura 
                familiar ou orfandade.O programa 
                fornece comida, educação, cuidados 
                com a saúde, esportes, música e um
                ambiente de acolhimento e amor.
                Buscamos reintegrar os laços 
                familiares, quando possível.
              </Text>
            </Box>
          </HStack>
        </Stack>
      </Container>

    </>
  )
}

