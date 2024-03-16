import NextLink from "next/link"
// import Image from "next/image";
import { Image, Box, Text, LinkBox, LinkOverlay, Container, Icon, Popover, PopoverTrigger, Heading, PopoverContent } from "@chakra-ui/react"
import Global from "@emotion/react"
import { useState, useEffect } from "react"
import styles from '../styles/bgkeren.module.css'
import GetCharacter from "./getCharacter"
import { WeaponDetail, ArtifactDetail } from "./item-detail"

export function GridArtifacts({name}) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);


    let source = "https://api.genshin.dev/artifacts/" + name + "/flower-of-life"
    if(name.includes("prayers")) {
        if(name.includes("prayers-to-the-firmament")) {
            source = "https://api.genshin.dev/artifacts/" + name + "/flower-of-life"
        } else {
            source = "https://api.genshin.dev/artifacts/" + name + "/circlet-of-logos"
        }
    } 
    const api = `https://api.genshin.dev/artifacts/${name}`;

    useEffect(() => {
        setLoading(true);
        fetch(api)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        })
    }, [name])

    var weaponBg = new String();
    if(data.max_rarity === 5) {
        weaponBg = 'linear(#B46060, #C07F00, #FFD95A, #F4B183)';
    } else if(data.max_rarity === 4) {
        weaponBg = 'linear(#3F3B6C, #3D2C8D, #916BBF, #C996CC)';
    } else if(data.max_rarity === 3) {
        weaponBg = 'linear(#088395, #05BFDB, #569DAA, #577D86)'
    } else if(data.max_rarity === 2) {
        weaponBg = 'linear(180deg, rgba(64,173,66,1) 0%, rgba(88,170,85,1) 9%, rgba(121,236,103,1) 82%)'
    } else if(data.max_rarity === 1) {
        weaponBg = "linear(180deg, rgba(142,142,142,1) 0%, rgba(152,152,152,1) 50%, rgba(204,204,204,1) 100%)"
    }

    return (
        <Popover placement="auto">
            <PopoverTrigger>

        <Box w="auto" align="center" p={1} aspectRatio={1} _hover={{
            color: "#B04759",
            transform: "scale(1.1)",
            border: "1px solid",
            borderColor: "#B04759"
          }}
          cursor={"pointer"}
          transition={"all .3s ease-in-out;"}
          borderRadius={18}>
            <LinkBox cursor={"pointer"} href={`/artifacts/${name}`} scroll={false}>
                <Box overflow={"hidden"} aspectRatio={1} alignItems={"center"} borderRadius={18} justifyContent={"center"}  bgGradient={weaponBg}>
                    <Image src={source} 
                    className="character-grid-icon"
                    width={200}
                    borderRadius={18}
                    alt={`${data.name} icon not found :(`}
                    fallbackSrc="/src/IconNotFound.jpg"
                    />
                </Box>
                <LinkOverlay as={"div"} href={`/artifacts/${name}`} target="_blank">
                    
                    <Heading size={"xs"}>{data.name}</Heading>
                </LinkOverlay>
            </LinkBox>
        </Box>
            </PopoverTrigger>
            <PopoverContent>
            <ArtifactDetail api={api} source={source}  stack={"4"}/>
        </PopoverContent>
            </Popover>
    )
}

export function GridItems({name, type}) {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const source = "https://api.genshin.dev/" + type + "/" + name + "/icon"
    const api = `https://api.genshin.dev/${type}/${name}`;

    useEffect(() => {
        setLoading(true);
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
    }, [name]) 

    var weaponBg = new String();
    if(data.rarity === 5) {
        weaponBg = 'linear(#B46060, #C07F00, #FFD95A, #F4B183)';
    } else if(data.rarity === 4) {
        weaponBg = 'linear(#3F3B6C, #3D2C8D, #916BBF, #C996CC)';
    } else if(data.rarity === 3) {
        weaponBg = 'linear(#088395, #05BFDB, #569DAA, #577D86)'
    } else if(data.rarity === 2) {
        weaponBg = 'linear(180deg, rgba(64,173,66,1) 0%, rgba(88,170,85,1) 9%, rgba(121,236,103,1) 82%)'
    } else if(data.rarity === 1) {
        weaponBg = " linear(180deg, rgba(142,142,142,1) 0%, rgba(152,152,152,1) 50%, rgba(204,204,204,1) 100%)"
    }
    
    return (
        <Popover placement="auto">
            <PopoverTrigger>
        <Box w="auto" align="center" p={2} aspectRatio={1} _hover={{
            color: "#B04759",
            transform: "scale(1.1)",
            border: "1px solid",
            borderColor: "#B04759"
          }}
          cursor={"pointer"}
          transition={"all .3s ease-in-out;"}
          borderRadius={18}>
            <LinkBox cursor={"pointer"} href={`/${type}/${name}`}>
                <Box width={"100%"} overflow={"hidden"} aspectRatio={1} bgGradient={weaponBg} borderRadius={18}>
                    <Image src={source}
                        className="character-grid-icon"
                        width={150}
                        height={150}
                        alt={`${data.name} icon not found :(`}
                        fallbackSrc={"/src/IconNotFound.jpg"}
                        borderRadius={18}
                    />
                </Box>
                <LinkOverlay as={"div"} href={`/${type}/${name}`} target="_blank">
                    <Heading size={'xs'}>{data.name}</Heading>
                </LinkOverlay>
            </LinkBox>
        </Box>
        </PopoverTrigger>
        <PopoverContent>
            <WeaponDetail api={api} source={source} />
        </PopoverContent>
        </Popover>
    )   

}

export function CharGridItem({ name }) {
    let source = "";
    if (name.includes("traveler")) {
        source = "https://api.genshin.dev/characters/" + name + "/icon";
    } else {
        source = "https://api.genshin.dev/characters/" + name + "/icon-big";
    }

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.genshin.dev/characters/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
    }, [name])

    const string = String(data.vision);
    const element = string.toLowerCase();
    const icon = "https://api.genshin.dev/elements/" + element + "/icon";
    let gradiant = new String();

    switch (element) {
        case "pyro":
            gradiant = "linear(#820000, #B9005B, #FF7C7C, #B9005B)";
            break;
        case "anemo":
            gradiant = "linear(#99A799, #ADC2A9, #D3E4CD, #99A799)";
            break;
        case "cryo":
            gradiant = "linear(#1B262C, #0F4C75, #3282B8, #BBE1FA)";
            break;
        case "dendro":
            gradiant = "linear(#425F57, #749F82, #A8E890, #749F82)";
            break;
        case "geo":
            gradiant = "linear(#8E3200, #A64B2A, #D7A86E, #A64B2A)";
            break;
        case "hydro":
            gradiant = "linear(#1B262C, #0F4C75, #3282B8, #BBE1FA)";
            break;
        case "electro":
            gradiant = "linear(#1C0C5B, #3D2C8D, #916BBF, #C996CC)";
            break;
    }

    let charBg = new String();
    var charName = String(data.name);
    if(charName.includes("Traveler")) {
        charBg = 'linear(#B46060, #C07F00, #FFD95A, #F4B183)';
    } else {
        if (data.rarity === 4) {
            charBg = 'linear(#3F3B6C, #3D2C8D, #916BBF, #C996CC)';
        } else if (data.rarity === 5) {
            charBg = 'linear(#B46060, #C07F00, #FFD95A, #F4B183)';
        } else {
            charBg = 'white';
        }    
    }

    
    return (
        <Box w="auto" align="center" borderRadius='2xl' p={2} aspectRatio={1} element={data.vision} rarity={data.rarity} weapon={data.weapon} _hover={{
            color: "#B04759",
            transform: "scale(1.1)",
            border: "1px solid",
            borderColor: "#B04759"
          }}
          transition={"all .3s ease-in-out;"}
          >
            <LinkBox as={NextLink}
                href={`/characters/${name}`}
                cursor="pointer"
            >
                <GetCharacter name={name} />
                    <div className={`${styles.containerstars} ${styles.cardStars}`}>
                        <div className={styles.star}></div>
                    </div>
                <LinkOverlay as={"div"} href={`characters/${name}`}>
                    <Text fontSize={16} as={'b'}>
                        {data.name}
                    </Text>
                </LinkOverlay>
            </LinkBox>
        </Box>
    )
}