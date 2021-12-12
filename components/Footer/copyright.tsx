import { Text, TextProps } from '@chakra-ui/layout'

export default function Copyright(props: TextProps) {
  
  return (
    <Text fontSize="sm" {...props}>
      &copy; {new Date().getFullYear()} Comfort Internation Brasil, Inc. All rights reserved.
    </Text>
  )
}