import React from 'react'

import {Box, Heading, Image, Stack, Text} from '@chakra-ui/react'

import {transformCloudinaryImgUrl} from '../../common/utils'

import {
  CircleFilledDecorator,
  CircleOutlinedDecorator,
} from '../../common/icons/CircleFilledDecorator'
import {TriangleDecorator} from '../../common/icons/TriangleDecorator'

const GRAPHICS_IMG_URL =
  'https://res.cloudinary.com/srthkv/image/upload/v1618151085/cato/LEARNBYDOING2_dpmmqf.png'

// const CROSS_LINE =
//   'https://res.cloudinary.com/srthkv/image/upload/v1618149557/cato/Vector_cross_ja1jci.png'

// 350, 615
export const LearnByDoingSection = () => {
  return (
    <Box
      as="section"
      pt={{base: 14, lg: 26}}
      pb={{base: 20, lg: 16}}
      minH="min(80vh, 650px)"
      position="relative">
      <Stack spacing={0} align={'center'} justify={'center'}>
        <Stack
          direction={{base: 'column', lg: 'row'}}
          spacing={{base: '83px', lg: '75px'}}
          align={{base: 'flex-start', lg: 'flex-start'}}
          justify={'center'}>
          {/* Image */}

          <Stack flex={6} order={{base: 1, lg: 0}} align="center">
            <Image
              src={transformCloudinaryImgUrl(
                GRAPHICS_IMG_URL,
                'f_auto,c_scale,w_700/',
              )}
              borderRadius="20px"
              alt="Learn Everyday Image"
              filter="drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.2))"
            />
          </Stack>

          <Box
            flex={4}
            maxW={'100vw'}
            pt={{base: '0px', lg: 16}} //53px
            pb={{base: 28, lg: '0px'}} //83px
          >
            <Stack spacing={{base: 5, lg: 48}} align="left" flex={1}>
              <Stack spacing={{base: 5, lg: 6}} align="left">
                <Heading textStyle="h2" align="left">
                  Learn. By Doing. <br /> With Friends.
                </Heading>

                <Text
                  textStyle="body2"
                  maxW="30ch"
                  align="left"
                  mb={{base: '0px', lg: 2}}>
                  A collaborative environment where you get to learn with
                  friends, by playing fun games and giving each other feedback.{' '}
                </Text>
              </Stack>
            </Stack>
            {/* <ImagesDecorators /> */}
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

const ImagesDecorators = () => (
  <>
    <CircleFilledDecorator
      position="absolute"
      // size={['31px', '62px']}
      // size={['2.85rem', '3.875rem']}
      size={[10, 14]}
      top={['-40px', '-70px']}
      right={['5vw', '15vw']}
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
