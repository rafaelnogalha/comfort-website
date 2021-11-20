import { 
  Box,
  Flex,
  IconButton,
  Text,
  useBreakpointValue,
  useColorModeValue, 
  useDisclosure,
  Image,
  Collapse,
  Stack,
  Button
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import Head from 'next/head'

import DesktopNav from './desktopNav'
import MobileNav from './mobileNav';

export default function Header(){
  const { isOpen, onToggle } = useDisclosure();
  return(
      

    <Box>
      <Flex
        bg="white"
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={'solid'}
        align={'center'}
      >
        <Flex
          flex={{base: 1, md: 'auto'}}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            color="gray.900"
            bg={"gray.50"}
            _hover={{ 
              bg: "gray.100",
              color: "gray.900"
            }}
            aria-label={'Toggle Navigation'}
            variant={'ghost'}
            onClick={ onToggle }
            icon={
              isOpen ? <CloseIcon /> : <HamburgerIcon />
            }
          />
          
        </Flex>
        <Flex
          flex={{ base: 1 }} 
          justify={{ base: 'center', md: 'start' }}
        >
          <Image
            borderRadius="full"
            alt={'home pic'}
            w="70px"
            src="/Comfort_Icon_Gold.png"
          />  
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={2}
        >

          <Button
            // display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={700}
            color={'gray.900'}
            variant="outline"
            // bg={'gray.900'}
            href={'#'}
            _hover={{
              bg : 'gray.900',
              color : 'white'
            }}
          >
            Doe
          </Button>
          
        </Stack>

        <Flex 
          display={{ base: 'none', md: 'flex' }} 
          ml={1}  
        >
          <DesktopNav />
        </Flex>
        
        

      </Flex>
      <Collapse 
        in={isOpen} 
        animateOpacity
      >
        <MobileNav />
      </Collapse>
    </Box>

  );
}