import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <img src="../assets/logo.png" alt="logo" style={{ width: "118px" }} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-secondary">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-secondary">
              Tv Shows
            </Nav.Link>
            <Nav.Link href="#link" className="text-secondary">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#link" className="text-secondary">
              Added
            </Nav.Link>
            <Nav.Link href="#link" className="text-secondary">
              My List
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#link">
              <i class="bi bi-search text-white"></i>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              KIDS
            </Nav.Link>
            <Nav.Link href="#link">
              <i class="bi bi-bell text-white" />
            </Nav.Link>
            <Nav.Link href="#link">
              <i class="bi bi-person-circle text-white"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
