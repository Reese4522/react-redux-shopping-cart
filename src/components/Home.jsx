import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image01 from '../images/image01.jpg';
import image02 from '../images/image02.jpg';
import image04 from '../images/image04.jpg';
import image05 from '../images/image05.jpg';
//import image06 from '../images/image06.jpg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
// redux
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
  console.log(props);

  return (
    <>
      <Container>
        <Row className='mt-4'>
          <Col>
            <h1 className='text-primary'>Olá</h1>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xs={6} md={3}>
            <Card>
              <Card.Img variant='top' src={image01} alt='Imagem 01' />
              <Card.Body>
                <Card.Title className='text-center text-info'>Camiseta 01</Card.Title>
                <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
                <Button onClick={props.addBasket} variant='light' className='btn-block btn-outline-success'>
                  <AiOutlineShoppingCart size='1.5em' /> Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              <Card.Img variant='top' src={image02} />
              <Card.Body>
                <Card.Title className='text-center text-info'>Camiseta 02 </Card.Title>
                <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
                <Button onClick={props.addBasket} variant='light' className='btn-block btn-outline-success'>
                  <AiOutlineShoppingCart size='1.5em' /> Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              <Card.Img variant='top' src={image04} />
              <Card.Body>
                <Card.Title className='text-center text-info'>Camiseta 03</Card.Title>
                <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
                <Button onClick={props.addBasket} variant='light' className='btn-block btn-outline-success'>
                  <AiOutlineShoppingCart size='1.5em' /> Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              <Card.Img variant='top' src={image05} />
              <Card.Body>
                <Card.Title className='text-center text-info'>Camiseta 04</Card.Title>
                <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
                <Button onClick={props.addBasket} variant='light' className='btn-block btn-outline-success'>
                  <AiOutlineShoppingCart size='1.5em' /> Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default connect(null, { addBasket })(Home);
