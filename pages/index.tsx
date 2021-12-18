import { 
  Flex, 
  Container, 
  Stack, 
  Box, 
  Heading, 
  Text, 
  Image, 
  Center 
} from '@chakra-ui/react';
import Head from 'next/head';

import Banner from './sections/Banner';
import About from './sections/About';
import Vision from './sections/Vision';
import Projects from './sections/Projects';
import Partners from './sections/Partners';
import Volunteer from './sections/volunteer';



export default function Home() {

  return(
    <>
      <Head>
        <title>Comfort International Brasil</title>        
      </Head>

      {/* <Container
        maxWidth={1200}
        py={{ base: "15vh", md: "15vh" }}
      > */}
      <Box
        py={{ base: "15vh", md: "15vh" }}
        backgroundImage={{base: "background_2.jpg", md: "background_1.jpg"}}
        backgroundPosition={{base: "right 60% bottom 50%", md: "right 70% bottom 75%", lg: "right 70% bottom 75%"}}
        backgroundSize={"cover"}
      >
        <Banner />
      </Box>
      <Box
        py={{ base: "2vh", md: "2vh" }}
      >
        <About />
      </Box>
      <Box
        py={{ base: "2vh", md: "2vh" }}
      >
        <Vision />
      </Box>
      <Box
        py={{ base: "2vh", md: "2vh" }}

      >
        <Projects />
      </Box>
      <Box
        py={{ base: "2vh", md: "2vh" }}

      >
        <Partners />
      </Box>    
      <Box
        py={{ base: "2vh", md: "2vh" }}
      
      >
        <Volunteer />
      </Box>
      {/* </Container> */}
      
    </>
  )
}

