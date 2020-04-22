import React, { useEffect } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiOutlineShopping } from 'react-icons/ai';

// redux
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';

function NavBar(props) {
  console.log(props);

  useEffect(() => {
    getNumbers();
  }, []);

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
                <AiOutlineShopping size='2em' className='text-light' />
                <Badge variant='info'> {props.basketProps.basketNumbers} </Badge>
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

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(NavBar);
