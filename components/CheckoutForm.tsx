import React, { useState } from 'react'

import { 
  Button,
  Box,
  Text, 
  Image,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react';


import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false)

  const [input, setInput] = useState(50)
  const [buttonActive, setButtonActive] = useState('50');
  const handleChange = (event:any) => setInput(event.target.value)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/checkout_sessions', {
      amount: input,
    })

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }

    // Redirect to Checkout.
    const stripe = await getStripe()
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message)
    setLoading(false)
  }

 

  return (
    <Box
      mt="20px"
    >
      <form onSubmit={handleSubmit}>
        <Box>
          <HStack
            spacing={1} 
          >
            <Button 
              _hover={{ 
                bg: 'white',
                color: 'gray.900'
              }}
              opacity = {
                buttonActive !== "50"
                  ? "45%" 
                  : "100%"
              }
              width='100%'
              onClick={
                () => {
                  setButtonActive('50'); 
                  setInput(50)
                }
                
              }
              backgroundColor={
                buttonActive !== "50"
                  ? "gray.700" 
                  : "yellow.comfort"
              }
              color={
                buttonActive !== "50"
                  ? "white" 
                  : "white"
              }
            >
              R$ 50
            </Button>
            <Button 
              _hover={{ 
                bg: 'white',
                color: 'gray.900'
              }}
              opacity = {
                buttonActive !== "100"
                  ? "45%" 
                  : "100%"
              }
              width='100%'
              onClick={
                () => {
                  setButtonActive('100'); 
                  setInput(100)
                }
                
              }
              backgroundColor={
                buttonActive !== "100"
                  ? "gray.700" 
                  : "yellow.comfort"
              }
              color={
                buttonActive !== "100"
                  ? "white" 
                  : "white"
              }
            >
              R$ 100
            </Button>
            <Button 
              _hover={{ 
                bg: 'white',
                color: 'gray.900'
              }}
              opacity = {
                buttonActive !== "150"
                  ? "45%" 
                  : "100%"
              }
              width='100%'
              onClick={
                () => {
                  setButtonActive('150'); 
                  setInput(150)
                }
                
              }
              backgroundColor={
                buttonActive !== "150"
                  ? "gray.700" 
                  : "yellow.comfort"
              }
              color={
                buttonActive !== "150"
                  ? "white" 
                  : "white"
              }
            >
              R$ 150
            </Button>
          </HStack>
          <HStack
            mt="5px"
            spacing={1}
          >
            <Button 
              width='40%'
              _hover={{ 
                bg: 'white',
                color: 'gray.900'
              }}
              opacity = {
                buttonActive !== "200"
                  ? "45%" 
                  : "100%"
              }
              onClick={
                () => {
                  setButtonActive('200'); 
                  setInput(200)
                }
                
              }
              backgroundColor={
                buttonActive !== "200"
                  ? "gray.700" 
                  : "yellow.comfort"
              }
              color={
                buttonActive !== "200"
                  ? "white" 
                  : "white"
              }
            >
              R$ 200
            </Button>
            
            <InputGroup
              width={{base: '90%', md: '87%', lg: '87%'}}
              opacity = {
                buttonActive !== "custom"
                  ? "45%" 
                  : "100%"
              }
              
            >
              {
                buttonActive === "custom" && 
                  <InputLeftAddon 
                    backgroundColor={
                      buttonActive !== "custom"
                        ? "gray.700" 
                        : "yellow.comfort"
                    }
                    children={"R$"}
                    color='white'
                  />
              }  
              {
                buttonActive !== "custom" &&
                  <Button
                    width="100%"
                    backgroundColor={
                      buttonActive !== "custom"
                        ? "gray.700" 
                        : "yellow.comfort"
                    }
                    color={
                      buttonActive !== "custom"
                        ? "white" 
                        : "white"
                    }
                    _hover={{ 
                      bg: 'white',
                      color: 'gray.900'
                    }}
                    onClick={
                      () => setButtonActive('custom')
                    }
                  >
                    Outro valor
                  </Button>
                ||
                buttonActive === "custom" &&
                <Input
                  placeholder='Digite o valor'
                  backgroundColor={"gray.900"}
                  onChange={
                    handleChange
                  }
                >
                  
                </Input>
              }
              
            </InputGroup>
            
          </HStack>        
        </Box>
        <Button
          _hover={{ 
            bg: 'white',
            color: 'gray.900'
          }}
          mt="10px"
          type="submit"
          disabled={loading}
          width="100%"
          backgroundColor="yellow.comfort"
          color="white"
        >
          Doar
        </Button>
      </form>
    </Box>
  )
}

export default CheckoutForm
