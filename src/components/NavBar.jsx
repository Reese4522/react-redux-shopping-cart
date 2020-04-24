import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
        <Link className='navbar-brand' to='/'>
          Shop
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto mx-auto'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
            <Link className='nav-link' to='/about'>
              Sobre Nós
            </Link>
          </Nav>
          <Nav>
            <Form inline>
              <Link className='nav-link' to='/cart'>
                <Button variant='secondary'>
                  <AiOutlineShopping size='2.3em' className='text-light' />
                  <Badge variant='info'> {props.basketProps.basketNumbers} </Badge>
                  <span className='sr-only'>unread messages</span>
                </Button>
              </Link>
            </Form>
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
