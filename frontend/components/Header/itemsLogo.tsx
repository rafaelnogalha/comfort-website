import NextLink from 'next/link';

import { 
  Box,
  Button,
  Link
} from '@chakra-ui/react';

export default function ItemsLogo (){
  return (
    <>
    <Box
      display={{ base: 'none', md: 'flex' }}
    >
      <Link
        to="about"
        smooth={true}
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
      <Link
        to="vision"
        smooth={true}
        duration={500}
      >
        <Button 
          as="a"
          color="gray.900"
          variant="ghost"
          _hover={{ 
            color: "gray.500"
          }}
          aria-label="vison"
        >
          Visão
        </Button>
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
      >
        <Button 
          as="a"
          color="gray.900"
          variant="ghost"
          _hover={{ 
            color: "gray.500"
          }}
          aria-label="projects"
        >
          Projetos
        </Button>
      </Link>
      <Link
        to="partnership"
        smooth={true}
        duration={500}
      >
        <Button 
          as="a"
          color="gray.900"
          variant="ghost"
          _hover={{ 
            color: "gray.500"
          }}
          aria-label="partnership"
        >
          Parceiros
        </Button>
      </Link>
      <Link
        to="volunters"
        smooth={true}
        duration={500}
      >
        <Button 
          as="a"
          color="gray.900"
          variant="ghost"
          _hover={{ 
            color: "gray.500"
          }}
          aria-label="volunters"
        >
          Voluntariado
        </Button>
      </Link>
    </Box>
    </>
  )
}