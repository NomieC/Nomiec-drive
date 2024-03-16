import { useEffect, useState } from "react";
import {Box, Image, Text} from "@chakra-ui/react"

export default function GetCharacter({name}) {
    const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch(`https://api.genshin.dev/characters/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [name]);

    var source = new String();
    if (name.includes("traveler")) {
        source = "https://api.genshin.dev/characters/" + name + "/icon";
    } else {
        source = "https://api.genshin.dev/characters/" + name + "/icon-big";
    }

    var vision = String(data.vision);
    var element = vision.toLowerCase();
    var elmSource = `https://api.genshin.dev/elements/${element}/icon`

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
        charBg = 'linear(#B46060, #C07F00, #FFD95A, #F4B183)';
      }
    }

  return (
    <Box width={"100%"} overflow={"cover"} aspectRatio={1} bgGradient={charBg} borderRadius='2xl'>
        <Image src={source}
            className="character-grid-icon"
            width={'full'}
            aspectRatio={1}
            objectFit={'cover'}
            alt={`${data.name} icon`}
            priority={true}
            borderRadius='2xl'
        />
        <Image src={elmSource} 
        alt="element icon"
        bg={'#DF7861'} 
        position={'absolute'} 
        left={'70%'}
        bottom={'80%'}
        width={'45%'} 
        borderRadius={'full'}/>
        
    </Box> 
  )
}