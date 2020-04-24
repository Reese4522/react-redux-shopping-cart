import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';

import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

import image01 from '../images/image01.jpg';
import image02 from '../images/image02.jpg';
import image03 from '../images/image03.jpg';
import image04 from '../images/image04.jpg';
import image05 from '../images/image05.jpg';
import image06 from '../images/image06.jpg';
import image07 from '../images/image07.jpg';
import image08 from '../images/image08.jpg';
import image09 from '../images/image09.jpg';
import image10 from '../images/image10.jpg';
import image11 from '../images/image11.jpg';
import Card from 'react-bootstrap/Card';

function Cart({ basketProps, productQuantity, clearProduct }) {
  console.log(basketProps);

  let productsInCart = [];

  Object.keys(basketProps.products).forEach(function (item) {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
    console.log(productsInCart);
  });

  // const productImages = [image01, image02, image04, image05];
  const productImages = (product) => {
    if (product.tagName === 'image01') {
      return image01;
    } else if (product.tagName === 'image02') {
      return image02;
    } else if (product.tagName === 'image03') {
      return image03;
    } else if (product.tagName === 'image04') {
      return image04;
    } else if (product.tagName === 'image05') {
      return image05;
    } else if (product.tagName === 'image06') {
      return image06;
    } else if (product.tagName === 'image07') {
      return image07;
    } else if (product.tagName === 'image08') {
      return image08;
    } else if (product.tagName === 'image09') {
      return image09;
    } else if (product.tagName === 'image10') {
      return image10;
    } else if (product.tagName === 'image11') {
      return image11;
    }
  };
  productsInCart = productsInCart.map((product, index) => {
    return (
      <Fragment key={index}>
        <Row className='mt-5'>
          <Row className='align-items-center'>
            <Col>
              <Button type='button' onClick={() => clearProduct(product.tagName)} variant='outline-danger' size='lg' block>
                <AiFillCloseCircle />
              </Button>
            </Col>
          </Row>
          <Col md='3' className='row align-items-center'>
            <img width={200} height={200} className='mx-auto text-center' src={productImages(product)} alt='Produto' />
          </Col>
          <Col md='2' className='text-center'>
            <h5>Produto</h5>
            <p>{product.name}</p>
          </Col>
          <Col md='2' className='align-items-center'>
            <h5 className='text-center'>Quantidade</h5>
            <ListGroup horizontal>
              <ListGroup.Item>
                <Button type='button' onClick={() => productQuantity('decrease', product.tagName)} variant='outline-primary'>
                  <AiOutlineArrowLeft />
                </Button>
              </ListGroup.Item>

              <ListGroup.Item>{product.numbers} </ListGroup.Item>
              <ListGroup.Item>
                <Button type='button' onClick={() => productQuantity('increase', product.tagName)} variant='outline-primary'>
                  <AiOutlineArrowRight />
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md='2' className='text-center'>
            <h5>Preço</h5>
            <p className='mt-4'>R$ {product.price},00</p>
          </Col>
          <Col md='2' className='text-center'>
            <h5>Total</h5>
            <p>R$ {product.numbers * product.price},00</p>
          </Col>
        </Row>
      </Fragment>
    );
  });

  return (
    <Container>
      <Row className='mt-5'>
        <Col>{productsInCart}</Col>
      </Row>
      <Row className='mt-5'>
        <Col className='mt-3'>
          <Card>
            <Card.Body>
              <h2 className='text-center text-danger'>Total: R$ {basketProps.cartCost},00 </h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='bg-segondary'>
        <Col className='text-success'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non reiciendis facere vel aspernatur, exercitationem accusantium
            numquam rerum cumque ut, magni animi! Dignissimos nemo adipisci deleniti, nam sequi tempore alias quo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non reiciendis facere vel aspernatur, exercitationem accusantium
            numquam rerum cumque ut, magni animi! Dignissimos nemo adipisci deleniti, nam sequi tempore alias quo?
          </p>
        </Col>
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(Cart);
