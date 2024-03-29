import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Flex } from '@mantine/core'

export default function AppHeader() {
    return (
        <Header bg="purple" h='65px' m='auto'>
            {/* <Group > */}
            <Flex
                justify="start"
                
                align="center"
                direction="row"
                gap={'xl'}
                h='65px'
            >
                <Link  style={{ color: "white", textDecoration: 'none', marginLeft:"30px" }} to='/'>Home</Link>
                <Link  data-testid='go-settings'style={{ color: "white", textDecoration: 'none' }} to='/settings'>Settings</Link>
            </Flex>
            {/* </Group> */}
        </Header >
    )
}
