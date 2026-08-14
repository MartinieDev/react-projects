import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';

const StyledApp = styled.div`
  background-color: #c9c6c6;
  padding: 20px;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />

      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>

        <Heading as="h2">Check in and out</Heading>

        <Button onClick={() => alert('Checked in')}>Check in</Button>
        <Button onClick={() => alert('Checked out')}>Check out</Button>

        <Heading as="h3">Form</Heading>

        <Button onClick={() => alert('Checked in')}>Check in</Button>
        <Button onClick={() => alert('Checked out')}>Check out</Button>

        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
