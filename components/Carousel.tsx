import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { 
  Box,
  Text,
  Button,
  Image,
  useMediaQuery
} from "@chakra-ui/react";



export default function Carousel() {
  const [sliderRef, setSliderRef] = useState<any>(null)
  const [isLarger800] = useMediaQuery('min-width: 800px')
  
  const sliderSettings = {
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const ProjectCards = [
    {
      imageSrc:
      "/project_pic_1.jpg",
      title: 'RESGATE DE CRIANÇAS DE RUA',
      description: 
      'O projeto busca mudar radicalmente' 
      + ' a vida de crianças forçadas a' 
      + ' viver nas comunidades de Ruanda'  
      + ' e função da pobreza ruptura'
      + ' familiar ou orfandade. O programa'
      + ' fornece comida, educação, cuidados'
      + ' com a saúde, esportes, música e um'
      + ' ambiente de acolhimento e amor.'
      + ' Buscamos reintegrar os laços'
      + ' familiares, quando possível.',
    },
    {
      imageSrc:'/project_pic_2.jpg',
      title: 'FILHOS DA LIBERDADE',
      description: 
      'O projeto busca mudar radicalmente' 
      + ' a vida de crianças forçadas a' 
      + ' viver nas comunidades de Ruanda'  
      + ' e função da pobreza ruptura'
      + ' familiar ou orfandade. O programa'
      + ' fornece comida, educação, cuidados'
      + ' com a saúde, esportes, música e um'
      + ' ambiente de acolhimento e amor.'
      + ' Buscamos reintegrar os laços'
      + ' familiares, quando possível.',
    }
  ]

  return (
    <Box className='content'>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {ProjectCards.map((card, index) => (
          <Box 
            key={index} 
            className='card'
            padding={'15px'}
          >
            <Image 
              src={card.imageSrc} 
              alt={card.title} 
              className='card-image' 
            />
            <Box className='text-info'>
              <Box 
                className='card-header'
                textAlign='center'  
              >
                <Text
                  fontSize={'26px'}
                  fontWeight={400}
                  color={'yellow.comfort'}
                >{card.title}</Text>
              </Box>
              <Text
                textAlign='justify'
              >
                <Text>{card.description}</Text>
              </Text>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}