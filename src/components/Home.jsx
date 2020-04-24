import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
import { AiOutlineShoppingCart } from 'react-icons/ai';
// redux
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
  console.log(props);

  return (
    <Container>
      <Row className='mt-4'>
        <Col>
          <h1 className='text-primary text-center'>Minha Camiseta</h1>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col xs={6} md={3} className='mt-4'>
          <Card>
            <Card.Img width={200} height={200} variant='top' src={image01} alt='Imagem 01' />
            <Card.Body>
              <Card.Title className='text-center text-info'>Camiseta 01</Card.Title>
              <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
              <Button onClick={() => props.addBasket('image01')} variant='light' className='btn-block btn-outline-success'>
                <AiOutlineShoppingCart size='1.5em' /> Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className='mt-4'>
          <Card>
            <Card.Img width={200} height={200} variant='top' src={image02} />
            <Card.Body>
              <Card.Title className='text-center text-info'>Camiseta 02 </Card.Title>
              <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
              <Button onClick={() => props.addBasket('image02')} variant='light' className='btn-block btn-outline-success'>
                <AiOutlineShoppingCart size='1.5em' /> Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className='mt-4'>
          <Card>
            <Card.Img width={200} height={200} variant='top' src={image03} />
            <Card.Body>
              <Card.Title className='text-center text-info'>Camiseta 03</Card.Title>
              <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
              <Button onClick={() => props.addBasket('image03')} variant='light' className='btn-block btn-outline-success'>
                <AiOutlineShoppingCart size='1.5em' /> Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className='mt-4'>
          <Card>
            <Card.Img width={200} height={200} variant='top' src={image04} />
            <Card.Body>
              <Card.Title className='text-center text-info'>Camiseta 04</Card.Title>
              <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
              <Button onClick={() => props.addBasket('image43')} variant='light' className='btn-block btn-outline-success'>
                <AiOutlineShoppingCart size='1.5em' /> Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className='mt-4'>
          <Card>
            <Card.Img width={200} height={200} variant='top' src={image05} />
            <Card.Body>
              <Card.Title className='text-center text-info'>Camiseta 05</Card.Title>
              <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
              <Button onClick={() => props.addBasket('image05')} variant='light' className='btn-block btn-outline-success'>
                <AiOutlineShoppingCart size='1.5em' /> Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className='mt-4'>
          <Card>
            <Card.Img width={200} height={200} variant='top' src={image06} />
            <Card.Body>
              <Card.Title className='text-center text-info'>Camiseta 06</Card.Title>
              <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
              <Button onClick={() => props.addBasket('image06')} variant='light' className='btn-block btn-outline-success'>
                <AiOutlineShoppingCart size='1.5em' /> Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className='mt-4'>
          <Card>
            <Card.Img width={200} height={200} variant='top' src={image07} />
            <Card.Body>
              <Card.Title className='text-center text-info'>Camiseta 07</Card.Title>
              <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
              <Button onClick={() => props.addBasket('image07')} variant='light' className='btn-block btn-outline-success'>
                <AiOutlineShoppingCart size='1.5em' /> Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className='mt-4'>
          <Card>
            <Card.Img width={200} height={200} variant='top' src={image08} />
            <Card.Body>
              <Card.Title className='text-center text-info'>Camiseta 08</Card.Title>
              <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
              <Button onClick={() => props.addBasket('image08')} variant='light' className='btn-block btn-outline-success'>
                <AiOutlineShoppingCart size='1.5em' /> Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className='mt-4'>
          <Card>
            <Card.Img width={200} height={200} variant='top' src={image09} />
            <Card.Body>
              <Card.Title className='text-center text-info'>Camiseta 09</Card.Title>
              <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
              <Button onClick={() => props.addBasket('image09')} variant='light' className='btn-block btn-outline-success'>
                <AiOutlineShoppingCart size='1.5em' /> Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className='mt-4'>
          <Card>
            <Card.Img width={200} height={200} variant='top' src={image10} />
            <Card.Body>
              <Card.Title className='text-center text-info'>Camiseta 10</Card.Title>
              <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
              <Button onClick={() => props.addBasket('image10')} variant='light' className='btn-block btn-outline-success'>
                <AiOutlineShoppingCart size='1.5em' /> Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6} md={3} className='mt-4'>
          <Card>
            <Card.Img width={200} height={200} variant='top' src={image11} />
            <Card.Body>
              <Card.Title className='text-center text-info'>Camiseta 11</Card.Title>
              <Card.Text className='text-center'>Descrição da Camiseta</Card.Text>
              <Button onClick={() => props.addBasket('image11')} variant='light' className='btn-block btn-outline-success'>
                <AiOutlineShoppingCart size='1.5em' /> Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
};

export default connect(null, { addBasket })(Home);
