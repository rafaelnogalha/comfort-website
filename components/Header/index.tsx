import {
  Box,
  Flex,
  IconButton,
  Text,
  useDisclosure,
  Image,
  Collapse,
  Stack,
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import NextLink from 'next/link';
import {Link} from 'react-scroll';
import DesktopNav from './desktopNav'
import MobileNav from './mobileNav';
import { FaWhatsapp } from 'react-icons/fa';
// import ItemsLogo from './itemsLogo';

export default function Header(){
  const { isOpen, onToggle, onClose } = useDisclosure();
  const openWhatsapp = () => {
    window.open('https://wa.me/5561982414933', '_blank');
  }
  return(

    <Box
      opacity={1}
      bg="white"
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderStyle={'solid'}
      align={'center'}
      
    >
      <Flex
        maxWidth={1300}
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
          align={{ base: 'center', md: 'center' }}
        >
          <Image
            borderRadius="full"
            alt={'home pic'}
            w="70px"
            src="/Comfort_Icon_Gold.png"
          />
          <Box
            display={{ base: 'none', md: 'flex' }}
          >
            <Link
              offset={-270}
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
              offset={-200}
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
                Vis??o
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
            {/* <Link
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
            </Link> */}
            {/* <Link
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
            </Link> */}
          </Box>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={2}
        >
          <IconButton
            _hover={{
              bg: "gray.100",
            }}
            aria-label={'WhatsApp button'}
            variant={'ghost'}
            onClick={ openWhatsapp }
            icon={<FaWhatsapp color="green" size= '2rem' />}
          />
          <Link
            to="banner"
            smooth={true}
            duration={500}
            offset={-270}
          >
            <Button
              fontSize={'sm'}
              fontWeight={700}
              color={'gray.900'}
              variant="outline"
              href={'#'}
              _hover={{
                bg : 'gray.900',
                color : 'white'
              }}
            >
              Doe
            </Button>
          </Link>
        </Stack>

        <Flex
          display={{ base: 'none', md: 'flex' }}
          ml={1}
        >
          <DesktopNav />
        </Flex>
      </Flex>

      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            backgroundColor="gray.900"
            color="white"
            _hover={{
              bg: "gray.200",
              color: "gray.900"
            }}
          />
          {/* <DrawerHeader
            borderBottomWidth="1px"
            textAlign="center"
          >
            <Link
              to="volunters"
              smooth={true}
              duration={500}
            >
              <Button
                as="a"
                backgroundColor="gray.900"
                color="white"
                _hover={{
                  bg: "gray.200",
                  color: "gray.900"
                }}
                aria-label="register"
              >
                ENTRAR
              </Button>
            </Link>
          </DrawerHeader> */}
          <DrawerBody>
            {/* <MobileNav /> */}
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
              <Link
                to="vision"
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
                  aria-label="vision"
                >
                  Vis??o
                </Button>
              </Link>
              <Link
                to="projects"
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
                  aria-label="projects"
                >
                  Projetos
                </Button>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>

  );
}