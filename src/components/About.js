import { Container, Row, Col, Image } from 'react-bootstrap';
import Button from './Button';
import img from '../assets/img/image-2.jpg';

export default function About() {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={6} md={6} sm={12}>
          <Image src={img} fluid />
        </Col>
        <Col lg={6} md={6} sm={12} className="d-flex align-items-center">
          <div className="text-lg-end text-md-end text-center">
            <h1 className="font-primary color-primary">About Us</h1>
            <p className="font-secondary color-secondary py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quibusdam mollitia delectus soluta est sunt</p>
            <Button text="Contact Us" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
