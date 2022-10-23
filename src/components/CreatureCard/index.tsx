import { CreatureSimpleInputContainer } from "../CreatureSimpleInputContainer";
import { Container, CreatureDetails, HealthCounter } from "./styles";

export function CreatureCard() {
  return (
    <Container>
      <CreatureSimpleInputContainer label="Initiative" inputId="initiative">
        <input id="initiative" type="number" />
      </CreatureSimpleInputContainer>
      <CreatureDetails>
        <b>Player Character</b>
        <span><strong>Level</strong> 5</span>
        <span>Human / Bard</span>
      </CreatureDetails>
      <CreatureSimpleInputContainer label="Armor Class" inputId="armor-class">
        <input id="armor-class" type="number" />
      </CreatureSimpleInputContainer>
    </Container>
  )
}
