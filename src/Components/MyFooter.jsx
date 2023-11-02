import { Container, Row, Col, Nav } from "react-bootstrap";

const MyFooter = () => (
  <Container fluid className="d-flex justify-content-center mt-5">
    <Row className="d-flex justify-content-center align-content-center p-0">
      <Nav className="fs-5 d-flex text-center p-0 ms-5">
        <Nav.Link href="#" className="text-secondary px-1">
          <i class="bi bi-facebook"></i>
        </Nav.Link>
        <Nav.Link href="#" className="text-secondary px-1">
          <i class="bi bi-instagram"></i>
        </Nav.Link>
        <Nav.Link href="#" className="text-secondary px-1">
          <i class="bi bi-twitter-x"></i>
        </Nav.Link>
        <Nav.Link href="#" className="text-secondary px-1">
          <i class="bi bi-youtube"></i>
        </Nav.Link>
      </Nav>

      <Col>
        <Nav className="fs-6 d-flex flex-column">
          <Nav.Link href="#" className="text-secondary">
            Audio and Subtitles
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary">
            Media Center
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary">
            Privacy
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary">
            Contact us
          </Nav.Link>
        </Nav>
        <button className="border border-secondary text-secondary fs-6 bg-dark py-2 mx-3 my-3 mb-3">
          Service Code
        </button>
        <div className="d-flex justify-content-center align-content-end ">
          <p className="text-secondary fs-6 fw-normal">
            © 1997-2023 Netflix, Inc.
          </p>
        </div>
      </Col>
      <Col>
        <Nav className="fs-6 d-flex flex-column">
          <Nav.Link href="#" className="text-secondary">
            Help Center
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary">
            Jobs
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary">
            Cookie Preferences
          </Nav.Link>
        </Nav>
      </Col>
      <Col>
        <Nav className="fs-6 d-flex flex-column">
          <Nav.Link href="#" className="text-secondary">
            Gift Cards
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary">
            Terms of Use
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary">
            Corporate Information
          </Nav.Link>
        </Nav>
      </Col>
    </Row>
  </Container>
);

export default MyFooter;
