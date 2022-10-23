import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/themes/default';

import { InitiativeTracker } from './pages/InitiativeTracker';

import { Container } from './App.styles';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <InitiativeTracker />
      </Container>
    </ThemeProvider>
  )
}
