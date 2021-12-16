import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors:{
    gray: {
      "comfort": "#2E3440",
      "900": "#181B23",
      "800": "#1F2829",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#616480",
      "400": "#797d9a",
      "300": "#9699b0",
      "200": "#b3b5c6",
      "100": "#d1d2dc",
      "50": "#eeeef2"
    },
    yellow:{
      "comfort": "#C2963D"
    },
    blue: {
      "500": "#61dafb"
    }
  },
  fonts: {
    heading: 'Maven+Pro',
    body: 'Maven+Pro',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.comfort',
        color: 'yellow.50'
      }
    }
  }
})
