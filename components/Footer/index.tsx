import { Box, Stack } from "@chakra-ui/react";
import Copyright from "./copyright";


export default function Footer(){
  return(
    <Box 
      align="center"
      // as="footer"
      role="contentinfo"
      mx="auto" 
      maxW="5xl" 
      py="2" 
      px={{ base: '4', md: '8' }}
    >
      <Stack>
        <Copyright alignSelf='center'/>
      </Stack>
    </Box>
  )
}