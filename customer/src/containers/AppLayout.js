import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/system';
import Headers from '../components/header/Header';
import Footer from '../components/footer/Footer';

const AppLayout = () => {
  return (
    <>
      <Headers />
      <div style={{ position: 'relative', marginTop: 'calc(128px + 10px)', marginBottom: '10px' }}>
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default AppLayout;