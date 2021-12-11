import { 
  Button,
  Stack,
  Text
} from "@chakra-ui/react";
import NextLink from 'next/link'

export default function MobileNav(){
  return(
    <Stack
      align="start"
      >
      <NextLink href="/" passHref>
        <Button 
          as="a"
          color="gray.900"
          variant="ghost"
          _hover={{ 
            color: "gray.500"
          }}
          aria-label="about"
        >
          Doe
        </Button>
      </NextLink>
      <NextLink href="/" passHref>
        <Button 
          as="a"
          color="gray.900"
          variant="ghost"
          _hover={{ 
            color: "gray.500"
          }}
          aria-label="about"
        >
          Sobre
        </Button>
      </NextLink>
      <NextLink href="/" passHref>
        <Button 
          as="a"
          color="gray.900"
          variant="ghost"
          _hover={{ 
            color: "gray.500"
          }}
          aria-label="about"
        >
          Visão
        </Button>
      </NextLink>
      <NextLink href="/" passHref>
        <Button 
          as="a"
          color="gray.900"
          variant="ghost"
          _hover={{ 
            color: "gray.500"
          }}
          aria-label="about"
        >
          Projetos
        </Button>
      </NextLink>
      <NextLink href="/" passHref>
        <Button 
          as="a"
          color="gray.900"
          variant="ghost"
          _hover={{ 
            color: "gray.500"
          }}
          aria-label="about"
        >
          Parceiros
        </Button>
      </NextLink>
      <NextLink href="/" passHref>
        <Button 
          as="a"
          color="gray.900"
          variant="ghost"
          _hover={{ 
            color: "gray.500"
          }}
          aria-label="about"
        >
          Voluntariado
        </Button>
      </NextLink>
      
    </Stack>
  ) 
}