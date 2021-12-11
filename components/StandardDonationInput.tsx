import React from 'react'
import { formatAmountForDisplay } from '../utils/stripe-helpers'
import { 
  Flex,
  Divider,
  Container,
  Stack,
  Box,
  Input,
  Heading, 
  Text, 
  Image, 
  Center,
  Badge,
  HStack,
  Button
} from '@chakra-ui/react';

type Props = {
  name: string
  value: number
  currency: string
  className?: string
  onClick?: () => void
}

const StandardDonationInput = ({
  name,
  value,
  currency,
  className,
  onClick,
}: Props) => (
  // <Stack>
  <>
    <Input
      backgroundColor={{onClick} ? "black" : "green"}
      className={className}
      type="button"
      name={name}
      value={value}
    ></Input>
  </>
)

export default StandardDonationInput
