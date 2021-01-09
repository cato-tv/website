import React from 'react'

import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
  Wrap,
  WrapItem,
  UseToastOptions,
  ToastOptions,
} from '@chakra-ui/react'

import {
  CircleFilledDecorator,
  CircleOutlinedDecorator,
} from '../../common/icons/CircleFilledDecorator'
import {TriangleDecorator} from '../../common/icons/TriangleDecorator'
import {SubscribeSectionSvg} from '../../common/svgs/SubscribeSectionSvg'
import {EMAIL_REGEX} from '../../common/utils'

const WAITLIST_API_URL =
  'https://us-central1-cato-feed.cloudfunctions.net/api/waitlist'

export const SubscribeSection = () => {
  const toast = useToast()

  const [email, setEmail] = React.useState('')
  const [emailValidMessage, setEmailValidMessage] = React.useState('')
  const [apiState, setApiState] = React.useState(makeApiState(false))

  const handleEmailChange = event => {
    const value = event.target.value
    setEmail(value)
  }

  React.useEffect(() => {
    setEmailValidMessage(runEmailValidation(email))
  }, [email])

  const handleOnSubmit = async () => {
    setApiState(makeApiState(true))

    fetch(WAITLIST_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email}),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.success) {
          setApiState(makeApiState(false, data.message))
          toast(makeToastData('Congrats!!', data.message, 'success'))
          setEmail('')
        } else {
          setApiState(makeApiState(false, data.message, true))
          toast(makeToastData('An error occurred.', data.message, 'error'))
        }
      })
      .catch(error => {
        console.log('err', error)
        toast(
          makeToastData(
            'Error.',
            'Some Error occurred, Please try again',
            'error',
          ),
        )
        setApiState(makeApiState(false, error, true))
      })
  }

  return (
    <Box as="section" id="subscribe-section">
      <Stack
        align="center"
        minH="min(80vh, 650px)"
        position="relative"
        pt={{base: 10, lg: 10}}
        justify="flex-start">
        <Stack spacing={{base: '16px', lg: '24px'}} align="center">
          {/*  b/w form and privacy policy  */}
          <Stack spacing={{base: '24px', lg: '42px'}} align="center">
            {/* for Texts and form  */}
            <Stack spacing={'27px'} align="center">
              <Stack spacing={{base: '62px', lg: '32px'}} align="center">
                <Heading textStyle="h3" align="center">
                  Gates of Cato are currently closed for new users <br />
                  but if your faith is strong they will open.
                </Heading>

                <Text textStyle="body1" align="center">
                  Apply here for getting on our waitlist.
                </Text>
              </Stack>

              <Stack
                direction={{base: 'column', lg: 'row'}}
                spacing={{base: '27px', lg: '75px'}}
                align={{base: 'center', lg: 'center'}}
                borderRadius={'10px'}
                boxShadow={{
                  base: 'none',
                  lg: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                }}
                bg={{base: 'transparent', lg: 'white'}}>
                <Input
                  py={['16px']}
                  pl={['36px']}
                  borderRadius={'10px'}
                  boxShadow={{
                    base: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                    lg: 'none',
                  }}
                  size="lg"
                  variant="unstyled"
                  placeholder="Enter email ID"
                  type="email"
                  isInvalid
                  bg="white"
                  value={email}
                  onChange={handleEmailChange}
                />

                <Box
                  py={{base: '0px', lg: '16px'}}
                  pr={{base: '0px', lg: '36px'}}>
                  <Button
                    onClick={handleOnSubmit}
                    isLoading={apiState.loading}
                    loadingText="Submitting"
                    isDisabled={!!emailValidMessage}>
                    Submit
                  </Button>
                </Box>
              </Stack>
            </Stack>
            <Wrap spacing="0px" align="center" justify="center">
              <WrapItem as="span">
                <Text textStyle="body2" align="center" pr="0.4ch">
                  We care about protecting your data.
                </Text>
              </WrapItem>
              <WrapItem as="span">
                <Text textStyle="body2" align="center">
                  Here&apos;s our{' '}
                  <a href="https://docs.google.com/document/d/1nr-gURtdgKTo5rLEwArXvMODGYACpNp-yC36erDucV4/edit">
                    <Text as="span" textStyle="body2" fontWeight="bold">
                      {' '}
                      Privacy Policy.
                    </Text>
                  </a>
                </Text>
              </WrapItem>
            </Wrap>
          </Stack>

          <Box
            pt={[5, 0]}
            position={{base: 'inherit', lg: 'absolute'}}
            bottom={'0px'}
            left={'-50px'}
            zIndex={-1}>
            <SubscribeSectionSvg />
          </Box>
        </Stack>
        <ImagesDecorators />
      </Stack>
    </Box>
  )
}

const ImagesDecorators = () => (
  <>
    <CircleFilledDecorator
      position="absolute"
      size={{base: '17px', lg: '30px'}}
      top={{base: '22%', lg: '22%'}}
      right={{base: '-25px', lg: '10%'}}
      bg="secondary1"
    />

    <Box
      position="absolute"
      zIndex={-1}
      top={{base: '18%', lg: '18%'}}
      left={{base: '-40px', lg: '10%'}}
      transform={{base: 'scale(0.312)', lg: 'scale(0.625)'}}>
      <TriangleDecorator />
    </Box>
    <Box
      position="absolute"
      zIndex={-1}
      top={{base: '42%', lg: '62%'}}
      left={{base: '8%', lg: '30%'}}
      transform={{base: 'scale(0.312)', lg: 'scale(0.625)'}}>
      <TriangleDecorator color="#51DED6" />
    </Box>
    <CircleOutlinedDecorator
      position="absolute"
      size={{base: '14px', lg: '28px'}}
      top={{base: '24%', lg: '26%'}}
      left={{base: '20px', lg: '18%'}}
      borderColor="primary1"
    />
    <CircleOutlinedDecorator
      position="absolute"
      left={{base: '75%', lg: '75%'}}
      top={{base: '48%', lg: '50%'}}
      size={{base: '14px', lg: '28px'}}
    />
  </>
)

const makeToastData = (
  title: UseToastOptions['title'],
  description: UseToastOptions['description'],
  status: UseToastOptions['status'],
): UseToastOptions => ({
  title,
  description,
  status,
  duration: 3000,
  isClosable: true,
  position: 'bottom-right',
})

const makeApiState = (loading: boolean, message = '', error = null) => ({
  loading,
  message,
  error,
})

const runEmailValidation = _email => {
  let message = ''
  if (!_email) {
    message = 'Please Enter Email'
  } else if (!EMAIL_REGEX.test(_email)) {
    message = 'Please Enter Valid Email'
  }

  return message
}
