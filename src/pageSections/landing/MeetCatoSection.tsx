import React from 'react'

import {Box, Heading, Image, Stack, Text} from '@chakra-ui/react'

import {
  CircleFilledDecorator,
  CircleOutlinedDecorator,
} from '../../common/icons/CircleFilledDecorator'
import {TriangleDecorator} from '../../common/icons/TriangleDecorator'

const MEET_CATO_GRAPHICS =
  'https://res.cloudinary.com/srthkv/image/upload/v1618143375/cato/iphone-12--white_2x_jreums.png'

export const MeetCatoSection = () => {
  return (
    <Box as="section">
      <Stack pt={['70px', '98px']} justify="center" position="relative">
        <Stack spacing={[14, 6]} align="center">
          <Heading textStyle="h1" align="center">
            Welcome to the Future of education
          </Heading>
        </Stack>
        <Stack spacing={['50px', '90px']} align="center">
          <Stack
            direction={['column', 'row']}
            align={['center', 'flex-end']}
            spacing={['7px', '1ch']}>
            <Stack
              mt="10"
              direction="row"
              align="center"
              justify="center"
              spacing={['15px', '19px']}>
              <Image
                src="https://res.cloudinary.com/srthkv/image/upload/v1618143144/cato/hi-icon_1_ronhpe.svg"
                alt="Hi Icon"
                width={['33px', '40px']}
              />
              <Heading
                textStyle="h2"
                fontFamily="'Libre Baskerville', serif"
                align="center">
                Meet Cato
              </Heading>
            </Stack>
            <Text
              textStyle="bodymono"
              align="center"
              mb={['0px', '10px']}
              color="#C4C4C4">
              /ˈkay.toe/
            </Text>
          </Stack>
          <Box position="relative">
            <Image
              boxSize={['300px', '466px']}
              objectFit="contain"
              src={MEET_CATO_GRAPHICS}
              alt="Meet Cato"
            />
            <DecoratorComponents />
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

const DecoratorComponents = () => (
  <>
    <CircleFilledDecorator
      position="absolute"
      bottom={['0px', '120px']}
      left={['-10px', '-10px']}
      size={10}
    />

    <CircleFilledDecorator
      position="absolute"
      bottom={['30px', '-5vh']}
      right={['40vw', '-7vw']}
      size={10}
    />

    <Box
      zIndex={-1}
      position="absolute"
      bottom={['15vh', '15vh']}
      right={['-90px', '-2vw']}>
      <TriangleDecorator />
    </Box>
    <CircleOutlinedDecorator
      position="absolute"
      left={['20px', '40px']}
      top={['0px', '0px']}
      // size={['90px', '115px']}
      // size={['7.5rem', '7.19rem']}
      size={28}
    />
    <CircleOutlinedDecorator
      position="absolute"
      right={['20px', '60px']}
      top={['25vh', '30vh']}
      size={5}
      borderColor="primary1"
    />
  </>
)
