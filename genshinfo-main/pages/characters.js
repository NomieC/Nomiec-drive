import { useState, useEffect } from "react";
import { Container, Heading, SimpleGrid, Input, Center, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Section from "../components/section";
import { CharGridItem } from "../components/grid-item";
import { motion } from "framer-motion";


function renderCharacter(char) {
  return (
    <CharGridItem name={char} key={char} />
  )
}

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchCharacters = () => {
    fetch("https://api.genshin.dev/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((char) =>
    char.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Container minW={"container.md"} maxW={"container.lg"} p={10}>
      <Section delay={1}>
        <Heading>Characters</Heading>
        <Center>
          <Input
            backgroundColor="#EFEBE2"
            placeholder="Character"
            width="300px"
            mt={5}
            mb={5}
            display="flex"
            borderRadius={50}
            value={inputValue}
            onChange={handleInputChange}
            pr={16} // Add padding to accommodate the search icon
          />
          <IconButton
            icon={<SearchIcon />}
            aria-label="Search"
            colorScheme="gray"
            size="md"
            borderRadius="50%"
            ml={-10} // Adjust the position of the search icon
            onClick={fetchCharacters}
          />
        </Center>
        <SimpleGrid columns={[4, null, 5, 6]} spacing={"10px"} mt={5}>
          {filteredCharacters.map(renderCharacter)}
        </SimpleGrid>
      </Section>
    </Container>
  );
}
