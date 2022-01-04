import { 
  Button,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import NextLink from 'next/link'
import {Link} from 'react-scroll';


export default function MobileNav(){
  const { isOpen, onToggle, onClose } = useDisclosure();
  return(
    <Stack
      align="start"
      >

      <Link
        to="about"
        smooth={true}
        onClick={onClose}
        duration={500}
      >
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
      </Link>
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
      {/* <NextLink href="/" passHref>
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
      </NextLink> */}
      {/* <NextLink href="/" passHref>
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
      </NextLink> */}
      
    </Stack>
  ) 
}