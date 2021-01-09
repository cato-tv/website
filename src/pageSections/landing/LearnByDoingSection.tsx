import React from 'react'

import {Box, Heading, Image, Stack, Text} from '@chakra-ui/react'

import {transformCloudinaryImgUrl} from '../../common/utils'

const GRAPHICS_IMG_URL =
  'https://res.cloudinary.com/monads/image/upload/v1610239614/cato/learn_by_doing_ql01js.png'

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
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}
