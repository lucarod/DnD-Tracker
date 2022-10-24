import { Button } from "../Button";

import { CreatureCard } from "../CreatureCard";

import { Container, CreatureList, Footer, Header } from "./styles";

export function InitiativeOrder() {
  return (
    <Container>
      <Header>Initiative</Header>
      <CreatureList>
        <CreatureCard />
        <CreatureCard />
        <CreatureCard />
      </CreatureList>
      <Footer>
        <Button variant="secondary">Undo</Button>
        <Button variant="primary">Next</Button>
      </Footer>
    </Container>
  )
}
