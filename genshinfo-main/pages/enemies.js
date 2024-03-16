import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from "../components/section"
import { GridItems } from "../components/grid-item"
import { useState, useEffect } from "react"

function renderEnemies(monsters) {
    return (
        <GridItems name={monsters} type={"enemies"} />
    )
}

export default function Enemies() {
    const [monsters, setMonster] = useState([]);

    const fetchMonsters = () => {
        fetch("https://api.genshin.dev/enemies")
        .then((response) => response.json())
        .then((data) => setMonster(data));
    }

    useEffect(() => {
        fetchMonsters();
    }, []);
    
    return (
        <Container minW={"container.sm"} maxW={"container.lg"} p={10}>
            <Section delay={0.8}>
            <Heading>
                Enemies
            </Heading>

            <SimpleGrid columns={[3, null, 4, 6]} spacing={"10px"} mt={5}>
                {monsters.map(renderEnemies)}
            </SimpleGrid>
            </Section>
        </Container>
    )
}