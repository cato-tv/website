import React from 'react'

import {
  Box,
  ChakraStyleProps,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

import {
  CircleFilledDecorator,
  CircleOutlinedDecorator,
} from '../../common/icons/CircleFilledDecorator'
import {TriangleDecorator} from '../../common/icons/TriangleDecorator'

const images = [
  {
    id: '1',
    imageUrl:
      'https://res.cloudinary.com/srthkv/image/upload/v1618144069/cato/Rectangle_90_1_i5qeci.png',
  },
  {
    id: '2',
    imageUrl:
      'https://res.cloudinary.com/srthkv/image/upload/v1618144069/cato/Rectangle_91_1_zhd6tt.png',
  },
  {
    id: '3',
    imageUrl:
      'https://res.cloudinary.com/srthkv/image/upload/v1618144069/cato/Rectangle_92_1_bihiy4.png',
  },
]

export const LearnEverydaySection = () => {
  return (
    <Box as="section" position="relative">
      <Stack
        spacing={0}
        pt={{base: 24, lg: 48}}
        minH="min(80vh, 650px)"
        pb={{base: 4, lg: 48}}>
        <Stack
          direction={{base: 'column', lg: 'row'}}
          spacing={{base: 24, lg: 20}}
          align={{base: 'center', lg: 'flex-start'}}>
          <Box flex={4} w="100%">
            <Stack spacing={['16px', '200px']} align="left" flex={1}>
              <Stack spacing={['16px', '24px']} align="left">
                <Heading textStyle="h2" align="left">
                  Learn. Everyday. <br /> Effortlessly.
                </Heading>

                <Text
                  textStyle="body2"
                  align="left"
                  maxW="29.5ch"
                  mb={['0px', '10px']}>
                  The more you scroll, the more you learn! Handpicked bite-sized
                  content to entertain and educate you. Netflix and chill.{' '}
                </Text>
              </Stack>
            </Stack>
          </Box>
          {/* Images */}
          {/* 21, 43 */}
          <Box flex={6} w="100%" position="relative">
            <Stack
              direction={'row'}
              align="center"
              justify="center"
              spacing={{
                base: '1.5rem',
                md: '2.685rem',
              }}>
              {images.map(image => (
                <Box key={image.id} flex={1}>
                  <Image
                    src={image.imageUrl}
                    // width={'max100%'}
                    //12.5rem = 200px;16px
                    width={{
                      base: 'max(100px , 100%)',
                      lg: 'max(16.66rem, 100%)',
                    }}
                    borderRadius="20px"
                    alt="Learn Everyday Image"
                    filter="drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.2))"
                  />
                </Box>
              ))}
            </Stack>
            <ImagesDecorators />
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

// type ImageCardProps = {
//   id: string
//   imageUrl: string
//   height?: ChakraStyleProps['height']
//   width?: ChakraStyleProps['width']
// }

// const ImageCard: React.FC<ImageCardProps> = props => {
//   const {id, imageUrl, ...restProps} = props
//   return (
//   )
// }

const ImagesDecorators = () => (
  <>
    <CircleFilledDecorator
      position="absolute"
      // size={['31px', '62px']}
      // size={['2.85rem', '3.875rem']}
      size={[10, 14]}
      top={['-40px', '-70px']}
      right={['20vw', '15vw']}
      bg="secondary1"
    />

    <Box
      position="absolute"
      zIndex={-1}
      right={['-10px', '10vw']}
      top={['50px', '130px']}
      transform={['scale(0.312)', 'scale(0.625)']}>
      <TriangleDecorator />
    </Box>
    <Box
      position="absolute"
      zIndex={-1}
      left={['-8vw', '-2vw']}
      bottom={['-70px', '-90px']}
      transform={['scale(0.312)', 'scale(0.625)']}>
      <TriangleDecorator color="#51DED6" />
    </Box>
    <CircleOutlinedDecorator
      position="absolute"
      left={['10vw', '4vw']}
      top={['-35px', '-40px']}
      // size={['14px', '28px']}
      // size={['1.167rem', '1.75rem']}
      size={[4, 7]}
      borderColor="primary1"
    />
    <CircleOutlinedDecorator
      position="absolute"
      left={['40vw', '20vw']}
      bottom={['-10px', '-30px']}
      size={[4, 7]}
    />
  </>
)
