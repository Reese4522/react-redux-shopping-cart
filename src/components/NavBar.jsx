import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiOutlineShopping } from 'react-icons/ai';

function NavBar() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand href='#home'>Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto mx-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
          <Nav>
            <Form inline>
              <Button variant='secondary'>
                <AiOutlineShopping size='2em' className='text-light' /> <Badge variant='info'>9</Badge>
                <span className='sr-only'>unread messages</span>
              </Button>
            </Form>
            <Nav.Link eventKey={2} href='#memes'>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
