import { Outlet } from 'react-router-dom';
import PageNav from './PageNav';
import { styled } from 'styled-components';

const StyledLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color-grey-100);
`;

const Main = styled.main`
  width: 80%;
  margin: 0 auto;
  height: 91vh;
  overflow-y: scroll;

  @media screen and (max-width: 1300px) {
    width: 95%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 92vh;
  }
`;

function AppLayout() {
  return (
    <StyledLayout>
      <PageNav />

      <Main>
        <Outlet />
      </Main>
    </StyledLayout>
  );
}

export default AppLayout;
