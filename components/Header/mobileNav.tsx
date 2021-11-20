import { 
  Button,
  Stack,
  Text
} from "@chakra-ui/react";
import NextLink from 'next/link'

export default function MobileNav(){
  return(
    <Stack
      bg="gray.50"
      p={4}
      display={{ md: 'none' }}>
      <NextLink href="/" passHref>
        <Button 
          as="a"
          color="gray.900"
          bg={"gray.100"}
          variant="outline"
          _hover={{ 
            bg: "gray.200",
            color: "gray.900"
          }}
          aria-label="register"
          my={5}
          w="100%"
        >
          Cadastrar
        </Button>
      </NextLink>
    </Stack>
  ) 
}