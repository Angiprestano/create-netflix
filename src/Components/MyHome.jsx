import { Container, NavDropdown, Nav } from "react-bootstrap";

const MyHome = () => {
  return (
    <Container className="d-flex mt-3">
      <h2 className="ms-4">Harry Potter</h2>
      <NavDropdown
        title="Genres"
        id="basic-nav-dropdown"
        className="mt-1 mb-2 ms-3 pt-1 ps-1 pe-1 border border-black"
      >
        <NavDropdown.Item href="#action/3.1">Comedy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
      </NavDropdown>
      <Nav>
        <i class="bi bi-grid text-black" />
        <i class="bi bi-grid-3x3" />
      </Nav>
    </Container>
  );
};

export default MyHome;
