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
  HStack
} from '@chakra-ui/react';

type Props = {
  name: string
  value: number
  min: number
  max: number
  currency: string
  step: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

const CustomDonationInput = ({
  name,
  value,
  min,
  max,
  currency,
  step,
  onChange,
  className,
}: Props) => (
  <Stack>
    <Box>
      <HStack>
        <Input
          className={className}
          type="number"
          name={name}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          // width={{base:"200px",md:"200px", lg:"250px"}}
        ></Input>
      </HStack>
    </Box>
  </Stack>
)

export default CustomDonationInput
