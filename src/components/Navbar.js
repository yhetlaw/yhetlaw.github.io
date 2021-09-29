import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Navigationbar = () => {
  return (
    <>
      <Navbar fixed='top' className='navbar-css' variant='dark'>
        <Container className='navbar-title'>
          <Navbar.Brand>
            <img alt='' src='' width='30' height='30' className='d-inline-block align-top' /> Data
            for countries
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
