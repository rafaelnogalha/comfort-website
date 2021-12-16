import { NextPage } from 'next'
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

import CheckoutForm from '../components/CheckoutForm'

const DonatePage: NextPage = () => {
  return (
    <>
      <Flex
        align={'center'}
        justify={'center'}
        width={{ base: '300px', sm: "300px" ,md: "500px", lg: '500px' }}
      >

        <Box
          
          width={{ base: '100%', md: '100%', lg: '100%' }}
          rounded={'lg'}
          boxShadow={'lg'}
          p={10}
          align={'center'}
          bg={'gray.900'}
        >
          <Text
            textAlign={['center']}
            fontSize={{ md: 'xl' }}
            mb="15px"
          >
            Faça uma doação
          </Text>
          <Divider/>
          <CheckoutForm />
        </Box>
      </Flex>
    </>
    
  )
}

export default DonatePage