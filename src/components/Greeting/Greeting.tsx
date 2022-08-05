import { Text, TextProps } from '@mantine/core';
import React, { FunctionComponent, useEffect, useState } from 'react'

const Greeting: FunctionComponent<TextProps> = ({ ...props }) => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hours = new Date().getHours();

    if (hours < 12) {
      setGreeting('Good morning');
    } else if (hours >= 12 && hours < 18) {
      setGreeting('Hello');
    } else {
      setGreeting('Good evening');
    }
  }, []);


  return (
    <Text {...props} weight={700} size={32} color="#fff">{greeting}</Text>
  )
}

export default Greeting;