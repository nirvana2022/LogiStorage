import Carousel from 'react-bootstrap/Carousel';
import log_storageImage from '../../imagenes/log_storage.jpg';
import inventario2 from '../../imagenes/inventario2.jpg';
import reportes from '../../imagenes/reportes.jpg';
function Carrusel() {
  return (
    <Carousel className='core'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={log_storageImage}
          alt="Gestiona tu almacenamiento"
        />
        <Carousel.Caption>
          <h1>Administra tu almacenamiento</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={inventario2}
          alt="Gestiona tu inventario"
        />
        <Carousel.Caption>
          <h1>Administra tu inventario</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={reportes}
          alt="Visualización de reportes"
        />
        <Carousel.Caption>
          <h1>Visualización de reportes</h1>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Carrusel;