import {extendTheme, theme as defaultTheme} from '@chakra-ui/react'

export default extendTheme({
  colors: {
    primary1: '#51DED6',
    secondary1: '#EC9B3B',
    button1: '#51DED6',
    text1: '#000000',
    text2: '#7F7F7F',
  },
  fonts: {
    body: "'Poppins', " + defaultTheme.fonts.body,
    heading: "'MerriWeather', " + defaultTheme.fonts.heading,
    // mono: "Poppins, "+ defaultTheme.fonts.mono,
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ['3.5rem', '4rem'],
      fontWeight: 'bold',
      lineHeight: '125%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['2.66rem', '3rem'],
      fontWeight: 'bold',
      lineHeight: '125%',
      letterSpacing: '-1%',
    },
    h3: {
      fontSize: ['2rem'],
      fontWeight: 'bold',
      lineHeight: '125%',
      letterSpacing: '-1%',
    },
    body1: {
      fontSize: ['1.5rem'],
      fontWeight: 'normal',
      lineHeight: '150%',
    },
    body2: {
      fontSize: ['1.125rem'],
      fontWeight: 'normal',
      lineHeight: '150%',
    },
    body3: {
      fontSize: ['1rem'],
      fontWeight: 'normal',
      lineHeight: '150%',
    },
  },

  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'medium', // Normally, it is "semibold"
        bg: 'button1',
        fontFamily: 'fonts.body',
      },

      // 2. We can add a new button size or extend existing
      sizes: {
        fontSize: '1.25rem',
      },
      variants: {
        main: {
          fontWeight: 'medium',
          bg: 'button1',
          borderRadius: '10px',
          fontSize: '1.25rem',
        },
      },
      defaultProps: {
        variant: 'main',
      },
    },
  },
})

//* For Reference
// fontSizes: {
//   desktop: {
//     heading1: '4rem', // 64px
//     heading2: '3rem', // 48px
//     heading3: '2rem', //32px
//     body1: '1.5rem', //24px
//     body2: '1.125rem', //18px
//     body3: '1rem', //16px
//   },
//   mobile: {
//     heading1: '2.625rem', //42px
//     heading2: '2rem', //32px
//     heading3: '1.5rem', //24px
//     body1: '1.125rem', //18px
//     body2: '0.875rem', //14px
//     body3: '0.75rem', //12px
//   },
// },

// if 1 rem = 12px
//   mobile: {
//     heading1: '3.5rem', //42px
//     heading2: '2.66rem', //32px
//     heading3: '2rem', //24px
//     body1: '1.5rem', //18px
//     body2: '1.167rem', //14px
//     body3: '1rem', //12px
//   },
// },
