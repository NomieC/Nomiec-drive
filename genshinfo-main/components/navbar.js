import Logo from "./logo";
import NextLink from "next/link";
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton } from "@chakra-ui/react";
import { forwardRef } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

function LinkItem({href, path, children, target, ...props}) {
    const active = path === href;
    return(
        <Link 
        as={NextLink}
        href={href}
        p={2}
        bg={active ? '#DF7861': undefined} 
        color={active? '#3E7DA6' : '#F7F5E8'}
        {...props}
        target={target}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
));

MenuLink.displayName = 'MenuLink';

export default function Navbar(props) {
    const { path } = props;
    return(
        <Box position="fixed"
        as="nav"
        w="100%"
        zIndex={3}
        backgroundColor="#DF7861"
        {...props}>
            <Box display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md:'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{base: 4, md: 0}}>
                    <LinkItem href="/characters" path={path}>Characters</LinkItem>
                    <LinkItem href="/weapons" path={path}>Weapons</LinkItem>
                    <LinkItem href="/artifacts" path={path}>Artifacts</LinkItem>
                    <LinkItem href="/news" path={path}>News</LinkItem>
                    <LinkItem href="/about" path={path}>About</LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                            <MenuList>
                                    <MenuItem as={MenuLink} href="/">Home</MenuItem>
                                    <MenuItem as={MenuLink} href="/characters">Characters</MenuItem>
                                    <MenuItem as={MenuLink} href="/weapons">Weapons</MenuItem>
                                    <MenuItem as={MenuLink} href="/artifacts">Artifacts</MenuItem>
                                    <MenuItem as={MenuLink} href="/news">News</MenuItem>
                                    <MenuItem as={MenuLink} href="/about">About Us</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}