import React, { useState } from 'react'

import { 
  Flex,
  Divider,
  Button,
  Container,
  Stack,
  Box,
  Heading, 
  Text, 
  Image, 
  Center,
  Badge
} from '@chakra-ui/react';

import CustomDonationInput from '../components/CustomDonationInput'
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'
import * as config from '../config'

const CheckoutForm = () => {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({
    customDonation: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
  })

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/checkout_sessions', {
      amount: input.customDonation,
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
        <CustomDonationInput
          className="checkout-style"
          name={'customDonation'}
          value={input.customDonation}
          min={config.MIN_AMOUNT}
          max={config.MAX_AMOUNT}
          step={config.AMOUNT_STEP}
          currency={config.CURRENCY}
          onChange={handleInputChange}
        />
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
