import {Box, ChakraProps} from '@chakra-ui/react'
import * as React from 'react'

type CircleFilledDecoratorProps = {
  size?: ChakraProps['height']
} & ChakraProps

function CircleFilledDecorator(props: CircleFilledDecoratorProps) {
  const {size = ['36px', '46px'], ...restProps} = props
  return (
    <Box
      width={size}
      height={size}
      borderRadius="50%"
      bg="primary1"
      zIndex={-1}
      {...restProps}></Box>
  )
}

function CircleOutlinedDecorator(props: CircleFilledDecoratorProps) {
  const {size = ['36px', '46px'], ...restProps} = props
  return (
    <Box
      width={size}
      height={size}
      borderColor="secondary1"
      borderWidth="3.11px"
      borderRadius="50%"
      zIndex={-1}
      {...restProps}></Box>
  )
}

export {CircleFilledDecorator, CircleOutlinedDecorator}
