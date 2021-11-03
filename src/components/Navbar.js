import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
  return (
    <>
      <Navbar fixed='top' className='navbar-css'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='navbar-link'>
              <img
                alt=''
                src='https://www.freeiconspng.com/thumbs/globe-png/globe-png-hd-1.png'
                width='30'
                className='d-inline-block align-top'
              />{' '}
              countriesData
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
