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
       
      <Stack
        mt="150px"
        direction={{ base: 'column', md: 'column', lg: 'column' }} 
        alignItems="center"
        className="vision"
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
            VISÃO {'&'} PRINCÍPIOS
          </Text>
        </Box>
        <Box>
          <Stack
            direction="row"
          >
            <Box
              width={['100%', '100%', '100%', '100%']}
              fontSize={{ base: '20px', md: '20px', lg: '25px' }}
              textAlign={['start', 'start', 'start', 'start']} 
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
                align="center"
              >
                <FaPencilAlt/>
                <Text
                  fontSize={{ base: '10px', md: '10px', lg: '10px' }}
                >
                  APOIO NA EDUCAÇÃO  
                </Text>
              </Box>
              <Box
                align="center"
              >
                <FaHandHoldingMedical />
                <Text
                  fontSize={{ base: '10px', md: '10px', lg: '10px' }}
                >
                  PRESTAÇÃO DE CUIDADOS
                </Text>
              </Box>
              <Box
                align="center"
              >
                <FaBookOpen />
                <Text
                  fontSize={{ base: '10px', md: '10px', lg: '10px' }}
                >
                  TREINAMENTO E EMPREGO  
                </Text>
              </Box>
              
              <Box
                align="center"
              >
                <FaUserFriends />
                <Text
                  fontSize={{ base: '10px', md: '10px', lg: '10px' }}
                >
                  PROMOVENDO RELACIONAMENTO  
                </Text>
              </Box>
              <Box
                align="center"
              >
                <FaChurch />
                <Text
                  fontSize={{ base: '10px', md: '10px', lg: '10px' }}
                >
                  PARCERIA COM A IGREJA 
                </Text>
              </Box>
              <Box
                align="center"
              >
                <FaLeaf />
                <Text
                  fontSize={{ base: '10px', md: '10px', lg: '10px' }}
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

    </>
  )
}

