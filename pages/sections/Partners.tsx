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
          className="partnership"
        >
          <Box
            width={{ base: '100%', md: '100%', lg: '100%' }}
            mr={{base: "5px", sm:"5px" , md:"5px" ,lg: "50px"}}
            textAlign="center"
            alignItems="center"
          >
            <Text
              fontSize={{ base: '25px', md: '30px', lg: '30px' }}
              fontWeight={800}
              
              mb={{ base: '2', md: '4' }}
            >
              NOSSOS
            </Text>

            <Text
              fontSize={{ base: '25px', md: '30px', lg: '30px' }}
              color="yellow.comfort"
              fontWeight={300}
              mb={{ base: '2', md: '4' }}
              
            >
              PARCEIROS
            </Text>
          </Box>
          
          
          {/* <Stack
            // width={{ base: '100%', md: '100%', lg: '100%' }}
            direction={{ base: 'column', md: 'row', lg: 'row' }} 
            spacing={{ base: '20px', md: '50px', lg: '20px' }}
            textAlign="center"
            alignItems="center"
          >
            <Box
              textAlign="center"
              alignItems="center"
            >
              <Image src="/configr.png"></Image>
            </Box>
            {/* <Box
              width={{ base: '50%', md: '50%', lg: '50%' }}
            >
              <Image src="/pontual.png"></Image>
            </Box> */}
          {/* </Stack> */}
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row', lg: 'row' }} 
        >
          <Box
            width={{ base: '100%', md: '100%', lg: '100%' }}
            alignItems="center"
            align="center"
            alignSelf="center"
            alignContent="center"
            mt="50px"
          >
            <Image
              // boxSize={{base: '100px', sm: '100px', md: '100px', lg: '120px'}}
              src="/configr.png"
            ></Image>
          </Box>
          <Box
            width={{ base: '100%', md: '100%', lg: '100%' }}
            alignItems="center"
            align="center"
            alignContent="center"
            alignSelf="center"
          >
            <Image
              // boxSize={['80px', '100px', '130px', '130px']}
              src="/pontual.png"
            ></Image>
          </Box>
        </Stack>
      </Container>

    </>
  )
}

