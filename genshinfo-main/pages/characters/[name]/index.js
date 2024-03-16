import { Image, Text, Spacer, Box, Container, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CharacterAttack, 
  CharacterDescription, 
  CharacterItem, 
  RarityStar, 
  CharacterRole,
  PriorityStats,
  WeaponType, 
  BestTeam,
  CharacterPassive,
  CharacterConstellation} from "../../../components/character-detail";
import Section from "../../../components/section";
import { Character } from "../../../components/character";

export async function getServerSideProps(context) {
  const { name } = context.query;
  const res = await fetch(`https://api.genshin.dev/characters/${name}`);
  const character = await res.json();

  return { 
    props: { character } 
  };
}

export default function Page({ character }) {
  const router = useRouter();
  const Charname = router.query.name;
  const src = `https://api.genshin.dev/characters/${Charname}/card`
  const srcString = String(src);

  const charelm = character.vision;
  const string = String(charelm);
  const element = string.toLowerCase();

  const char = Character.find((charalist) => charalist.name === Charname);
  return (
    <Container maxW="container.lg" minW="container.sm" mb={20}>
      <Section delay={0.8}>

      <Flex flexDirection="row" mt={10} key={'display'}>
        
        <Box mr={5} width={"30%"}>
          <Image
            borderRadius={18}
            src={srcString}
            alt="character card"
          />
        </Box>

        <Box width={"70%"}>
          <Flex>
            <Box>
              <Heading as={"h1"} size={"2xl"} ml={5} mt={0}> {/* Add mt={0} to remove default margin */}
                {character.name}
              </Heading>

              <Text fontSize={'md'} mb={5} ml={8} mt={0}>
                {character.title}
              </Text>
              <RarityStar rarity={character.rarity} />
              <CharacterRole />
              {/* Place your text content here */}
            </Box>

            <Spacer />
            <WeaponType weapon={character.weapon} />
            
            <Box p={3}>
              <Image src={`https://api.genshin.dev/elements/${element}/icon`} height={'80px'} width={'80px'} alt={"element icon"} />
            </Box>
          </Flex>
          <Flex flexDirection="column" key={'detail'} align={'center'}> {/* Align items to flex-start */}
              <CharacterDescription descriptions={character.description} />
          </Flex>

        </Box>
        
      </Flex>
      <Box mt={3} ml={2}>
      <Heading as={'h2'} fontSize={'2xl'}>Stat Priority</Heading>
      <PriorityStats name={Charname} />
      </Box>
      <Box mt={5}>
        <CharacterItem name={Charname} />
      </Box>
      
      <Box mt={5} ml={2}>
        <Heading as={'h2'} fontSize={'3xl'}>Best Team</Heading>
        <BestTeam name={Charname} />
      </Box>

      <Box mt={5}>
        <Heading as={'h2'} size={'lg'} mb={3} ml={3}>Talents</Heading>
    {character.skillTalents.map(function(skill, index){
      return(
        <CharacterAttack skill={skill} character={Charname} key={index} />
        )
      })}
      </Box>
      <Box mt={5}>
        <Heading as={'h2'} size={'lg'} mb={3} ml={3}>Passives</Heading>
    {character.passiveTalents.map(function(passive, index){
      return(
        <CharacterPassive passive={passive} character={Charname} key={index} />
        )
      })}
      </Box>
      <Box mt={5}>
            <Heading as={'h2'} size={'lg'} mb={3} ml={3}>Constellations</Heading>
    {character.constellations.map(function(constellation, index){
      return(
        <CharacterConstellation constellation={constellation} character={Charname} key={index} />
        )
      })}

        
      </Box>
      </Section>

    </Container>
  );
}
