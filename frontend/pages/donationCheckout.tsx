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
      >

        <Box
          width={{ base: '90%', md: '90%', lg: '100%' }}
          rounded={'lg'}
          boxShadow={'lg'}
          p={10}
          align={'center'}
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