import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Экзамен</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <NavLink to="/contacts" className="nav-link">
              Контакты
            </NavLink>
            <NavLink to="/groups" className="nav-link">
              Группы
            </NavLink>
            <NavLink to="/contactsGroups" className="nav-link">
              Добавления контактов в группу
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
