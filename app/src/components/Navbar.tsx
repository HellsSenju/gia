import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Деканат</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        <NavLink to="/students" className="nav-link">
                            Студенты
                        </NavLink>
                        <NavLink to="/subjects" className="nav-link">
                            Предметы
                        </NavLink>
                        <NavLink to="/grades" className="nav-link">
                            Оценки
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
