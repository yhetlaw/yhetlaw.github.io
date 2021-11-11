import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Navigationbar = () => {
  return (
    <>
      <Navbar fixed='top' className='navbar'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='navbar__link'>
              <img
                alt=''
                src='https://www.freeiconspng.com/thumbs/globe-png/globe-png-hd-1.png'
                width='30'
                className='d-inline-block align-top'
              />{' '}
              countriesData
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <a href='https://github.com/yhetlaw' target='_blank' className='navbar__github'>
              <FaGithub />
            </a>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
