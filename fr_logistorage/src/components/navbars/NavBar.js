import { Navbar, Nav, Container, NavDropdown,} from 'react-bootstrap';
import ButtonIngresar from '../buttons/Ingresar';


function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Container>
                <Navbar.Brand href="#" style={{ fontWeight: 'bold', letterSpacing: '2px' }}>
                    LogiStorage
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#">Usuarios</Nav.Link>
                        <NavDropdown title="Inventario" id="inventario-dropdown" className="custom-dropdown">
                            <NavDropdown.Item href="#">Ver Inventario</NavDropdown.Item>
                            <NavDropdown.Item href="#">Agregar Producto</NavDropdown.Item>
                            <NavDropdown.Item href="#">Categorías</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Reportes</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <ButtonIngresar />
            </Container>
        </Navbar>
    );
}

export default NavBar;