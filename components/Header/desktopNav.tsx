import {
  Box, 
  Text,
  Stack, 
  Button
} from "@chakra-ui/react"

import NextLink from 'next/link'

export default function DesktopNav(){
  return(
    <Stack
      direction={"row"}
      spacing={4}
    >
      <NextLink href="/" passHref>
        <Button 
          as="a"
          color="gray.900"
          variant="ghost"
          _hover={{
            bg : 'gray.900',
            color : 'white'
          }}
          aria-label="Home"
          my={5}
          w="100%"
        >
          Cadastrar
        </Button>
      </NextLink>     
    </Stack>
  )
}