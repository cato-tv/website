import React from 'react'
import {Router} from '@reach/router'
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AspectRatio,
  Button,
  Container,
  Text,
} from '@chakra-ui/react'
import {SiteHelmet} from '../components/SiteHelmet'
import Iframe from 'react-iframe'

const VideoPlayer = props => {
  const videoSrcURL = `https://www.youtube.com/embed/${props.id}`

  return (
    <Container paddingTop="2rem" paddingBottom="2rem">
      <SiteHelmet title="Watch Video" />
      <AspectRatio ratio={16 / 9}>
        <Iframe url={videoSrcURL} scrolling="no" width="100%" height="280rem" />
      </AspectRatio>
      <Text fontSize="3xl" fontWeight="bold" marginTop="2rem">
        {/* TODO: Fetch Video Title from youtube */}
      </Text>
      <Alert
        backgroundColor="#f1f2f2"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt="2"
        mb="2"
        pb="5"
        textAlign="center">
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Watch More Videos like this
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          <Text>
            Immersive Feed Experience, Handpicked bite-sized content to
            entertain and educate you. Only on the app
          </Text>
          <Button
            size="sm"
            mt="5"
            onClick={() => {
              window.open(
                'https://play.google.com/store/apps/details?id=cato.tv.feed',
              )
            }}>
            <Text fontSize="sm" fontWeight="bold">
              Switch to the App
            </Text>{' '}
          </Button>
        </AlertDescription>
      </Alert>
    </Container>
  )
}

export default function Home(props) {
  console.log(props)
  return (
    <Router>
      <VideoPlayer path="/video/:id" />
    </Router>
  )
}
