import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white py-4 mt-auto">
    <Container>
      <Row>
        <Col md={6}>
          <h5>Hotel Agape Prime</h5>
          <p>Relax. Recharge. Reconnect in Tela, Honduras.</p>
        </Col>
        <Col md={3}>
          <h6>Quick Links</h6>
          <ul className="list-unstyled">
            <li><a href="/rooms" className="text-white">Rooms</a></li>
            <li><a href="/booking" className="text-white">Booking</a></li>
          </ul>
        </Col>
        <Col md={3}>
          <h6>Contact</h6>
          <p>Email: info@agapeprime.com</p>
          <p>📞 +504 1234 5678</p>
        </Col>
      </Row>
      <hr className="border-light"/>
      <p className="text-center mb-0">© {new Date().getFullYear()} Hotel Agape Prime. All rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;
