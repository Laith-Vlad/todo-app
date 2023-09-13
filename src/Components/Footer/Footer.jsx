import { Flex } from '@mantine/core'
import React from 'react'

export default function Footer() {
    return (
        <Flex
            m={'auto'}
            p={'0'}
            maw="100%"
            ta={'center'}
            bg={'purple'}
            h='100px'
            c="white"
            justify={'center'}
            align={'center'}

        >
            ToDo &copy; 2023
        </Flex>
    )
}
