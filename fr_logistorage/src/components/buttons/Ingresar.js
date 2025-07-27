import {Nav, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
function ButtonIngresar() {
  return (
    <Nav className="ms-auto">
      <Button
        variant="success"
        style={{
          fontWeight: "bold",
          letterSpacing: "1px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <FaUserCircle
          style={{ marginRight: "8px", fontSize: "1.3em", color: "#28a745" }}
        />
        Iniciar Sesión
      </Button>
    </Nav>
  );
}

export default ButtonIngresar;
