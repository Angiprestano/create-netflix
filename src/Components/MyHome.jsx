import { Container, NavDropdown, Nav } from "react-bootstrap";

const MyHome = () => {
  return (
    <Container className="d-flex mt-3">
      <div className="d-flex ms-0">
        <h2 className="ms-1 text-white">Tv Show</h2>
        <NavDropdown
          title="Genres"
          id="basic-nav-dropdown"
          className="mt-1 mb-2 ms-3 pt-1 ps-1 pe-1 text-white border border-white"
        >
          <NavDropdown.Item href="#action/3.1">Comedy</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Drama</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
        </NavDropdown>
      </div>
    </Container>
  );
};

export default MyHome;
