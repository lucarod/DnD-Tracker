import { ReactNode } from "react";
import { Container } from "./styles";

interface CreatureSimpleInputContainerProps {
  label: string;
  inputId: string;
  children: ReactNode;
}

export function CreatureSimpleInputContainer({
  label,
  inputId,
  children
}: CreatureSimpleInputContainerProps) {
  return (
    <Container>
      <label htmlFor={inputId}>
        <b>{label}</b>
        {children}
      </label>
    </Container>
  )
}
