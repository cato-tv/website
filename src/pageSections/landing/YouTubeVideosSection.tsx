/* eslint-disable react/prop-types */
import React from 'react'

import {
  AspectRatio,
  AspectRatioProps,
  Box,
  Center,
  ChakraStyleProps,
  CircularProgress,
  Heading,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

import {
  CircleFilledDecorator,
  CircleOutlinedDecorator,
} from '../../common/icons/CircleFilledDecorator'
import {TriangleDecorator} from '../../common/icons/TriangleDecorator'
import {MusicPlayerIcon} from '../../common/icons/MusicPlayerIcon'

const videos = {
  simon: {
    title: 'The Art of Storytelling',
    authorName: 'Simon Sinek',
    imageUrl:
      'https://res.cloudinary.com/monads/image/upload/f_auto/v1610218595/cato/simon_sinek_w1z3z6.png',

    videoId: '8xDoUMagFrs',
  },
  ravikant: {
    title: 'How to Create Wealth',
    authorName: 'Naval Ravikant',
    imageUrl:
      'https://res.cloudinary.com/monads/image/upload/f_auto/v1610218594/cato/naval_ravikant_dm0eei.png',

    videoId: '7YX19JCHBxc',
  },
  elon: {
    title: 'First Principles Thinking',
    authorName: 'Elon Musk',
    imageUrl:
      'https://res.cloudinary.com/monads/image/upload/f_auto/v1610218596/cato/elon_musk_d1lnzi.png',

    videoId: 'F5dgivEa_eY',
  },
}

export const YouTubeVideosSection = () => {
  return (
    <Box as="section" pt={[20, 28]} pb={['10px']} position="relative">
      <Stack
        direction={{base: 'column', lg: 'row'}}
        spacing={0}
        minH="min(80vh, 650px)"
        maxW="100vw"
        justify="center"
        align={'center'}>
        <Box
          order={{base: 1, lg: 0}}
          flex={1}
          maxW="100vw"
          pr={{
            base: '0px',
            lg: 'max(calc(40px + (1100px - 100vw) * 0.01) , 0px)',
          }}>
          <Box position="relative" pt={{base: 10, lg: 0}} pb={{base: 3, lg: 0}}>
            <Stack direction={'row'} align="center" spacing={['14px', '20px']}>
              <Box>
                <YouTubeVideoCard
                  {...videos.simon}
                  width={{sm: '161px', md: 56}}
                />
              </Box>
              <Stack
                direction={'column'}
                justify="space-between"
                spacing={['14px', '20px']}>
                <Box flex={0.98}>
                  <YouTubeVideoCard
                    {...videos.ravikant}
                    width={{sm: '175px', md: 56}}
                  />
                </Box>
                <Box flex={0.98}>
                  <YouTubeVideoCard
                    {...videos.elon}
                    width={{sm: '175px', md: 56}}
                  />
                </Box>
              </Stack>
            </Stack>
            <ImagesDecorators />
          </Box>
          <DisclaimerText pt={14} display={{base: 'block', lg: 'none'}} />
        </Box>
        <Box
          flex={1}
          maxW="100vw"
          px={{
            base: 'max(calc(4px + (380px - 100vw) * 0.01) , 0px)',
          }}>
          <Stack spacing={56} align="left" flex={1}>
            <Stack spacing={6} align="left">
              <Box>
                <Heading textStyle="h2" align="left">
                  Learn what matters.
                </Heading>
                <Wrap spacing="0px">
                  <WrapItem as="span">
                    <Heading textStyle="h2" align="left" pr="0.4ch">
                      From the best.
                    </Heading>
                  </WrapItem>
                  <WrapItem as="span">
                    <Heading textStyle="h2" align="left">
                      For Free.
                    </Heading>
                  </WrapItem>
                </Wrap>
              </Box>

              <Text textStyle="body2" align="left" mb={{base: 0, lg: 3}}>
                Learn from the experts, all for free! Seen a better deal than
                this? Please send it our way too.
              </Text>
            </Stack>
            <DisclaimerText display={{base: 'none', lg: 'block'}} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

const DisclaimerText = props => {
  return (
    <Text color="rgba(0,0,0,0.5)" textStyle="body3" {...props}>
      <Text
        as="span"
        color="rgba(0,0,0,0.5)"
        fontWeight="bold"
        textStyle="body3">
        Disclaimer:
      </Text>{' '}
      The above people are not affiliated with Cato, we only curate their
      existing content.
    </Text>
  )
}

type YouTubeVideoCardProps = {
  title: string
  videoId: string
  authorName: string
  imageUrl: string
  height?: ChakraStyleProps['height']
  width?: ChakraStyleProps['width']
  ratio?: AspectRatioProps['ratio']
}

const YouTubeVideoCard: React.FC<YouTubeVideoCardProps> = props => {
  const {title, videoId, authorName, imageUrl, ...restProps} = props

  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
      <Box cursor="pointer" onClick={onOpen} position="relative" {...restProps}>
        <Image
          src={imageUrl}
          alt={authorName}
          title={authorName}
          borderRadius="20px"
          filter="drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.2))"
        />
        <Box
          bg="white"
          boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
          borderRadius="10px"
          p={'8px'}
          position="absolute"
          bottom={0}
          left={'-6px'}
          right={'-6px'}
          zIndex={1}>
          <Stack direction="row" align="center">
            <MusicPlayerIcon />
            <Stack spacing="3px">
              <Text textStyle="body3">{title}</Text>
              <Text textStyle="body3">by {authorName}</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="scale"
        size="xl"
        isCentered>
        <ModalOverlay />
        <ModalContent align="center" justifyContent="center">
          <AspectRatio ratio={560 / 315}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </AspectRatio>
        </ModalContent>
      </Modal>
    </>
  )
}

//filled circle  62 - 3.875rem, 45 - 3.5rem
const ImagesDecorators = () => (
  <>
    <CircleFilledDecorator
      position="absolute"
      top={['50px', '50px']}
      left={['130px', '180px']}
      bg="secondary1"
      size={14}
    />

    <Box
      position="absolute"
      zIndex={-1}
      left={['320px', '440px']}
      top={['90px', '80px']}
      style={{transform: 'scale(0.625)'}}>
      <TriangleDecorator />
    </Box>
    <Box
      position="absolute"
      zIndex={-1}
      left={['20px', '110px']}
      bottom={['30px', '30px']}
      style={{transform: 'scale(0.625)'}}>
      <TriangleDecorator color="#51DED6" />
    </Box>
    <CircleOutlinedDecorator
      position="absolute"
      left={['350px', '480px']}
      bottom={['160px', '200px']}
      size={[7, 8]}
    />
  </>
)
