import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Navigationbar = () => {
  return (
    <>
      <Navbar fixed='top' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            <img
              alt=''
              src='/logo.svg'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Data for countries
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
