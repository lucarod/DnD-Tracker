import { CombatTracker } from "../../components/CombatTracker";
import { SheetDetails } from "../../components/SheetDetails";

import { Container, Content } from "./styles";

export function InitiativeTracker() {
  return (
    <Container>
      <Content>
        <CombatTracker />
      </Content>
      <Content>
        <SheetDetails />
      </Content>
    </Container>
  )
}
