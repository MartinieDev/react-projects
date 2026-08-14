import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

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
        <H1>The Wild Oasis</H1>

        <Button onClick={() => alert('Checked in')}>Check in</Button>
        <Button onClick={() => alert('Checked out')}>Check out</Button>

        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
