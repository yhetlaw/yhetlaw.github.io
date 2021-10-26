import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Navigationbar = () => {
  return (
    <>
      <Navbar fixed='top' className='navbar-css' variant='dark'>
        <Container className='navbar-title'>
          <Navbar.Brand>
            <img
              alt=''
              src='https://www.freeiconspng.com/thumbs/globe-png/globe-png-hd-1.png'
              width='30'
              className='d-inline-block align-top'
            />{' '}
            countriesData
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
