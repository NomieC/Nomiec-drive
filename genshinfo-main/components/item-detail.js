import { Container, Box, Text, Heading, Image, Flex, Spacer, Code, Divider, Center } from "@chakra-ui/react"
import { useState, useEffect } from "react"

export function WeaponDetail({api, source}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(api)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        });
    }, [api]);

    var weaponBg = new String();
    if(data.rarity === 5) {
        weaponBg = 'linear(#B46060, #C07F00, #FFD95A, #F4B183)';
    } else if(data.rarity === 4) {
        weaponBg = 'linear(#3F3B6C, #3D2C8D, #916BBF, #C996CC)';
    } else if(data.rarity === 3) {
        weaponBg = 'linear(#088395, #05BFDB, #569DAA, #577D86)'
    } else if(data.rarity === 2) {
        weaponBg = 'linear(180deg, rgba(64,173,66,1) 0%, rgba(88,170,85,1) 9%, rgba(121,236,103,1) 82%)'
    } else if(data.rarity == 1) {
        weaponBg = " linear(180deg, rgba(142,142,142,1) 0%, rgba(152,152,152,1) 50%, rgba(204,204,204,1) 100%)"
    }

    return(
        <Box p={2} bg={"#FFE6C7"}>
            <Flex align={'center'}>
                <Box>
                <Heading as={'h3'} fontSize={'21px'}>{data.name}</Heading>
                <Text color={'#545B77'}>{data.type}</Text>
                </Box>
                <Spacer />
                <Box borderRadius={'18px'} bgGradient={weaponBg} ml={3}>
                    <Image src={source} width={'80px'} height={'80px'} borderRadius={'18px'} fallbackSrc={"/src/IconNotFound.jpg"} alt={"weapon icon"} />
                </Box>
            </Flex>
            <Container>
                <Code color={'#374259'} as={'h4'} fontSize={'18px'}>Base Attack: {data.baseAttack}</Code>
                <Divider />
                <Code color={'#374259'} as={'h4'} fontSize={'18px'}>Sub Stat: {data.subStat}</Code>
                <Heading as={'h3'} fontSize={'21px'} color={'#DF7861'}>{data.passiveName}</Heading>
                <Text>{data.passiveDesc}</Text>
            </Container>
        </Box>
    )

}


export function ArtifactDetail({api, source, stack}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(api)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        });
    }, [api]);

    var artiBg = new String();
    if(data.max_rarity === 5) {
        artiBg = 'linear(#B46060, #C07F00, #FFD95A, #F4B183)';
    } else if(data.max_rarity === 4) {
        artiBg = 'linear(#3F3B6C, #3D2C8D, #916BBF, #C996CC)';
    } else if(data.max_rarity === 3) {
        artiBg = 'linear(#088395, #05BFDB, #569DAA, #577D86)'
    }

    var fBonus = new String();
    var fColor = new String();
    if(stack === "4") {
        fBonus = '#1B9C85';
        fColor = '#000000';
    } else {
        fBonus = '#FFE194';
        fColor = '#526D82';
    }

    return(
        <Box p={2} bg={"#FFE6C7"}>
            <Flex align={'center'}>
                <Box>
                <Heading as={'h3'} fontSize={'21px'}>{data.name}</Heading>
                <Text color={'#545B77'}>{data.type}</Text>
                </Box>
                <Spacer />
                <Box borderRadius={'18px'} bgGradient={artiBg} ml={3}>
                    <Image src={source} width={'80px'} height={'80px'} borderRadius={'18px'} fallbackSrc={"/src/IconNotFound.jpg"} alt="artifact icon"  />
                </Box>
            </Flex>
            <Container>
                <Flex m={2}>
                    <Center bg={'#1B9C85'} minW={'30px'} h={'30px'} p={2} borderRadius={'6'} >2</Center>
                    <Text p={2}>{data["2-piece_bonus"]}</Text>
                </Flex>
                <Flex m={2}>
                    <Center bg={fBonus} minW={'30px'} h={'30px'} p={2} borderRadius={'6'}>4</Center>
                    <Text p={2}  color={fColor}>{data["4-piece_bonus"]}</Text>
                </Flex>
            </Container>
        </Box>
    )

}