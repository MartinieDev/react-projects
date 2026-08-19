import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: grid;

  /* Create two columns:
     - Sidebar = 26rem
     - Remaining space = 1fr */
  grid-template-columns: 26rem 1fr;

  /* Create two rows:
     - Header gets the height it needs
     - Main takes the remaining height */
  grid-template-rows: auto 1fr;

  /* Make the entire layout fill the screen */
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />

      <Sidebar />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;

//               COLUMN 1       COLUMN 2
//              26rem wide        1fr
//           ┌──────────────┬──────────────────┐
// ROW 1     │              │                  │
// auto      │   Sidebar?   │      Header      │
//           │              │                  │
//           ├──────────────┼──────────────────┤
// ROW 2     │              │                  │
// 1fr       │              │                  │
//           │   Sidebar    │       Main       │
//           │              │                  │
//           │              │                  │
//           └──────────────┴──────────────────┘
