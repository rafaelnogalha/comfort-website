import React, { useState } from 'react'

import { 
  Button,
  Box,
  Text, 
  HStack,
  Input
} from '@chakra-ui/react';

import CustomDonationInput from '../components/CustomDonationInput'
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'
import * as config from '../config'
import StandardDonationInput from './StandardDonationInput';

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false)
  // const [input, setInput] = useState({
  //   customDonation: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
  // })
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
              bg = 'gray.900'
              onClick={
                () => {
                  setButtonActive('50'); 
                  setInput(50)
                }
                
              }
              backgroundColor={
                buttonActive !== "50"
                  ? "gray.900" 
                  : "white"
              }
              color={
                buttonActive !== "50"
                  ? "white" 
                  : "gray.900"
              }
            >
              50
            </Button>
            <Button 
              bg = 'gray.900'
              onClick={
                () => {
                  setButtonActive('100');
                  setInput(100)
                }
              }
              backgroundColor={
                buttonActive !== "100"
                  ? "gray.900" 
                  : "white"
              }
              color={
                buttonActive !== "100"
                  ? "white" 
                  : "gray.900"
              }
            >
              100
            </Button>
            <Button 
              bg = 'gray.900'
              onClick={
                () => {
                  setButtonActive('150'); 
                  setInput(150)
              }
                
              }
              backgroundColor={
                buttonActive !== "150"
                  ? "gray.900" 
                  : "white"
              }
              color={
                buttonActive !== "150"
                  ? "white" 
                  : "gray.900"
              }
            >
              150
            </Button>
          </HStack>
          <HStack
            mt="5px"
            spacing={1}
          >
            <Button 
              bg = 'gray.900'
              onClick={
                () => {
                  setButtonActive('200'); 
                  setInput(200)
              }
                
              }
              backgroundColor={
                buttonActive !== "200"
                  ? "gray.900" 
                  : "white"
              }
              color={
                buttonActive !== "200"
                  ? "white" 
                  : "gray.900"
              }
            >
              200
            </Button>
            <Box>
              <Input
                
                onSelect={
                  () => setButtonActive('custom')
                }
                onChange={
                  handleChange
                }
                
              >
              </Input>
            </Box>
          </HStack>        
        </Box>
        <Button
          mt="10px"
          type="submit"
          disabled={loading}
          width="100%"
          backgroundColor="white"
          color="gray.900"
        >
          Doar
        </Button>
      </form>
    </Box>
  )
}

export default CheckoutForm
