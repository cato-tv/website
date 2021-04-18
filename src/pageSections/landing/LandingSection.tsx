import React from 'react'
import {CatoLogoSvg} from '../../common/icons/CatoLogoSvg'
import {
  Box,
  Button,
  // Center,
  // Container,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import {LandingGraphicsSvg} from '../../common/icons/LandingGraphicsSvg'
// import {AnchorLink} from 'gatsby-plugin-anchor-links'
import {scrollToTarget} from '../../common/utils'
import {css} from '@emotion/react'

export const LandingSection = () => {
  return (
    <Box
      as="section"
      pt={{base: 8, md: 24}}
      // minH="min(100vh, 800px)"
      css={css`
        min-height: 100vh;
        @media (min-height: 1200px) {
          min-height: 650px;
        }
      `}
      position="relative">
      <Stack spacing={{base: 10, lg: 24}} align="center">
        <CatoLogoSvg />

        <Stack spacing={{base: 9, lg: 16}} align="center">
          <Stack spacing={[14, 6]} align="center">
            <Heading textStyle="h1" align="center">
              90% of what our schools
              <br /> teach today is useless
            </Heading>

            <Text textStyle="body1" align="center">
              So we built a better alternative
            </Text>
          </Stack>

          {/* <AnchorLink to={'#subscribe-section'} title={`Join Waitlist`}> */}
          <Button
            onClick={() => {
              scrollToTarget('subscribe-section')
            }}>
            Join Waitlist
          </Button>
          {/* </AnchorLink> */}
        </Stack>

        <Box
          pt={[5, 0]}
          position={{base: 'inherit', lg: 'absolute'}}
          bottom={'20px'}
          right={'-50px'}
          zIndex={-1}>
          <LandingGraphicsSvg />
        </Box>
      </Stack>
    </Box>
  )
}
