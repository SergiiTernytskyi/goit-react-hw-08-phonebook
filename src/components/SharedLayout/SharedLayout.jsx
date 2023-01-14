import { AppBar } from 'components/AppBar/AppBar';
import { AppFooter } from 'components/AppFooter/AppFooter';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <AppFooter />
    </Container>
  );
};
