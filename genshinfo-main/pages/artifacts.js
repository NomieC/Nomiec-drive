import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from "../components/section"
import { GridArtifacts } from "../components/grid-item"
import { useState, useEffect } from "react"

function renderArtifacts(artifacts) {
    return (
        <GridArtifacts name={artifacts} />
    )
}

export default function Artifacts() {
    const [artifacts, setMonster] = useState([]);

    const fetchArtifacts = () => {
        fetch("https://api.genshin.dev/artifacts")
        .then((response) => response.json())
        .then((data) => setMonster(data));
    }

    useEffect(() => {
        fetchArtifacts();
    }, []);
    
    return (
        <Container minW={"container.sm"} maxW={"container.lg"} p={10}>
            <Section delay={0.8}>
            <Heading>
                Artifacts
            </Heading>

            <SimpleGrid columns={[3, null, 4, 6]} spacing={"10px"} mt={5}>
                {artifacts.map(renderArtifacts)}
            </SimpleGrid>
            </Section>
        </Container>
    )
}