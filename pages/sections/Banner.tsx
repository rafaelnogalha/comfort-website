import { 
  Flex,
  Divider,
  Container,
  Stack,
  Box,
  Heading, 
  Text, 
  Image, 
  Center,
  Badge
} from '@chakra-ui/react';
import Head from 'next/head'
import DonatePage from '../donationCheckout';

export default function Banner() {

  return(
    <>
      <Head>
        <title>Comfort International Brasil</title>        
      </Head>
      <Container
        maxWidth={1200}
      >

        <Stack
          direction={{ base: 'column', md: 'column', lg: 'row' }} 
          alignItems="center"
          className="banner"
        >
          
          <Box
            width={{ base: '85%', md: '85%', lg: '55%' }}
            mr={{base: "5px", sm:"5px" , md:"5px" ,lg: "50px"}}
          >
            
          </Box>
          <Box
            width={{ base: '100%', md: '100%', lg: '55%' }}
            mr={{base: "5px", sm:"5px" , md:"5px" ,lg: "50px"}}
          >
            <Text
              fontSize={{ base: '3xl', md: '4xl' }}
              mb={{ base: '2', md: '4' }}
              textAlign={['center', 'center', 'center', 'center']} 
              fontWeight={600}
            >
              Um pouco pode mudar vidas
            </Text>
            <Text
              fontSize={{ base: '16px', md: '16px', lg: '16px' }}
              mb={{ base: '2', md: '4' }}
              textAlign={['center', 'center', 'center', 'center']} 
              
            >
              Comfort International atua em Ruanda, 
              R.D. do Congo e Burundi por meio de 
              parcerias com algumas igrejas e 
              organizações locais ajudando-os a 
              apoiar os mais necessitados, 
              com o objetivo de trazê-los de uma 
              posição de exigir cuidados e assistência, 
              através da Educação, Geração de Renda e 
              Desenvolvimento Comunitário, a um ponto 
              de inteireza e sustentabilidade.
            </Text>
            <Box
              align="center"
              mt={"40px"}
            >
              <DonatePage />
            </Box>
          </Box>
          
        </Stack>
      </Container>
    </>
  )
}

