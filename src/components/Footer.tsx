import React from 'react'
import {Box, Icon, Stack, Text} from '@chakra-ui/react'
import {FacebookIcon} from '../common/icons/FacebookIcon'
import {TwitterIcon} from '../common/icons/TwitterIcon'
import {InstagramIcon} from '../common/icons/InstagramIcon'
import {LinkedInIcon} from '../common/icons/LinkedInIcon'

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="#082D42"
      px={{base: '34px', lg: '120px'}}
      py={{base: '12px', lg: '21px'}}>
      <Stack
        direction={{base: 'column', lg: 'row'}}
        spacing={'23px'}
        align={{base: 'center', lg: 'center'}}
        justify={{base: 'center', lg: 'space-between'}}>
        <Stack
          direction={'row'}
          spacing={'16px'}
          align={{base: 'center', lg: 'center'}}>
          {SocialIcons.map(Social => (
            <a
              key={Social.name}
              title={Social.name}
              href={Social.socialUrl}
              target="_blank"
              rel="noreferrer">
              <Icon
                name={Social.name}
                _hover={{transform: 'scale(1.5)'}}
                transition="200ms">
                <Social.SocialIcon />
              </Icon>
            </a>
          ))}
        </Stack>
        <Text textStyle="body3" color="rgba(255,255,255,0.5)">
          Made with{' '}
          <Text as="span" textStyle="body3" color="#FF8364">
            ❤️️
          </Text>{' '}
          by Cato Avengers
        </Text>

        <Stack
          direction={'row'}
          spacing={'16px'}
          align={{base: 'center', lg: 'center'}}>
          <Text textStyle="body3" color="white">
            No &copy; 2021
          </Text>
          <a
            href="https://docs.google.com/document/d/1nr-gURtdgKTo5rLEwArXvMODGYACpNp-yC36erDucV4/edit"
            title="Privacy Policy">
            <Text textStyle="body3" color="white">
              Privacy Policy
            </Text>
          </a>
        </Stack>
      </Stack>
    </Box>
  )
}

export {Footer}

const SocialIcons = [
  {name: 'Facebook', SocialIcon: FacebookIcon, socialUrl: '#'},
  {
    name: 'Instagram',
    SocialIcon: InstagramIcon,
    socialUrl: 'https://www.instagram.com/catoverse/',
  },
  {
    name: 'Twitter',
    SocialIcon: TwitterIcon,
    socialUrl: 'https://twitter.com/catoverse',
  },
  {
    name: 'LinkedIn',
    SocialIcon: LinkedInIcon,
    socialUrl: 'https://www.linkedin.com/company/catotv/',
  },
]

// https://www.youtube.com/channel/UC-ovaJJYzvEl1s2ER0l4jbg
