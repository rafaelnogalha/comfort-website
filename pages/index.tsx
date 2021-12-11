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

      <Container
        maxWidth={1200}
        py={{ base: "15vh", md: "15vh" }}
      >
        <Banner />
        <About />
        <Vision />
        <Projects />
        <Partners />
        <Volunteer />
      </Container>
      
    </>
  )
}

