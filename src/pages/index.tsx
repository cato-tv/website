import React from 'react'
import {Box, Stack} from '@chakra-ui/react'
import {LandingSection} from '../pageSections/landing/LandingSection'
import {LearnByDoingSection} from '../pageSections/landing/LearnByDoingSection'
import {LearnEverydaySection} from '../pageSections/landing/LearnEverydaySection'
import {MeetCatoSection} from '../pageSections/landing/MeetCatoSection'
import {YouTubeVideosSection} from '../pageSections/landing/YouTubeVideosSection'
import {SubscribeSection} from '../pageSections/landing/SubscribeSection'
import {Footer} from '../components/Footer'

import {SiteHelmet} from '../components/SiteHelmet'

const LandingPage: React.FC = () => {
  return (
    <Box as="main" overflowX="hidden">
      <SiteHelmet />
      <Stack spacing="0px" align="center">
        <Stack px={[9, 9]} spacing="0px" maxW="1240px">
          <LandingSection />
          <MeetCatoSection />
          <YouTubeVideosSection />
          <LearnEverydaySection />
          <LearnByDoingSection />
          <SubscribeSection />
        </Stack>
      </Stack>
      <Footer />
    </Box>
  )
}

export default LandingPage
