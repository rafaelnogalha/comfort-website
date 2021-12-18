import { 
  Flex, 
  Container, 
  Stack, 
  Box, 
  Heading, 
  Text, 
  Image, 
  Center, 
  SimpleGrid
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

export default function Vision() {

  return(
    <>
      <Head>
        <title>Comfort International Brasil</title>        
      </Head>
       
      <Container
        maxWidth={1200}
      >

        <Stack
          mt="60px"
          direction={{ base: 'column', md: 'column', lg: 'column' }} 
          alignItems="center"
          className="vision"
        >
          <Box
            width={{ base: '85%', md: '85%', lg: '80%' }}
            mr={{base: "5px", sm:"5px" , md:"5px" ,lg: "50px"}}
          >
            <Text
              mb={{ base: '2', md: '4' }}
              textAlign={['center', 'center', 'center', 'center']} 
              fontSize={{ base: '25px', md: '30px', lg: '30px' }}
              fontWeight={800}
            >
              VISÃO {'&'} PRINCÍPIOS
            </Text>
          </Box>
          <Box>
            <Stack
              direction={["column", "column", "row", "row"]}
            >
              <Box
                width={['100%', '100%', '100%', '100%']}
                fontSize={{ base: '20px', md: '20px', lg: '25px' }}
                textAlign={['center', 'center', 'start', 'start']} 
                mb={{ base: '25px', md: '5px', lg: '5px' }}
                mt={{ base: '25px', md: '25px', lg: '25px' }}
              >
                <Text>
                  Nosso objetivo é encorajar indivíduos 
                  e comunidades a transitar de uma 
                  situação de necessidades básicas 
                  e apoio emergencial para uma 
                  auto-sustentável comunidade
                </Text>
              </Box>
              <SimpleGrid
                fontSize={{ base: '20px', md: '20px', lg: '25px' }}
                textAlign={['center', 'center', 'center', 'center']} 
                columns={2}
                width={['100%', '100%', '100%', '100%']}
                
              >
                <Box
                  mt={{ base: '25px', md: '25px', lg: '25px' }}
                  align="center"
                  mb={{ base: '40px', md: '25px', lg: '25px' }}
                >
                  <FaPencilAlt
                    size={'40px'}
                  />
                  <Text
                    mt={{ base: '10px', md: '10px', lg: '10px' }}
                    fontSize={{ base: '12px', md: '14px', lg: '15px' }}
                  >
                    APOIO NA EDUCAÇÃO  
                  </Text>
                </Box>
                <Box
                  mt={{ base: '25px', md: '25px', lg: '25px' }}
                  align="center"
                >
                  <FaHandHoldingMedical
                    size={'40px'}
                  />
                  <Text
                    mt={{ base: '10px', md: '10px', lg: '10px' }}
                    fontSize={{ base: '12px', md: '14px', lg: '15px' }}
                  >
                    PRESTAÇÃO DE CUIDADOS
                  </Text>
                </Box>
                <Box
                  align="center"
                  mb={{ base: '40px', md: '25px', lg: '25px' }}
                >
                  <FaBookOpen
                    size={'40px'}
                  />
                  <Text
                    mt={{ base: '10px', md: '10px', lg: '10px' }}
                    fontSize={{ base: '12px', md: '14px', lg: '15px' }}
                  >
                    TREINAMENTO E EMPREGO  
                  </Text>
                </Box>
                
                <Box
                  align="center"
                >
                  <FaUserFriends 
                    size={'40px'}
                  />
                  <Text
                    mt={{ base: '10px', md: '10px', lg: '10px' }}
                    fontSize={{ base: '12px', md: '14px', lg: '15px' }}
                  >
                    PROMOVENDO RELACIONAMENTO  
                  </Text>
                </Box>
                <Box
                  align="center"
                >
                  <FaChurch
                    size={'40px'}
                  />
                  <Text
                    mt={{ base: '10px', md: '10px', lg: '10px' }}
                    fontSize={{ base: '12px', md: '14px', lg: '15px' }}
                  >
                    PARCERIA COM A IGREJA 
                  </Text>
                </Box>
                <Box
                  align="center"
                >
                  <FaLeaf 
                    size={'40px'}
                  />
                  <Text
                    mt={{ base: '10px', md: '10px', lg: '10px' }}
                    fontSize={{ base: '12px', md: '14px', lg: '15px' }}
                  >
                    COMUNIDADES SUSTENTÁVEIS  
                  </Text>
                </Box>
              </SimpleGrid>
            </Stack>
          </Box>
          <Box>

          </Box>

        </Stack>
      </Container>

    </>
  )
}

