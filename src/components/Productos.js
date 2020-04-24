import React, { Component } from 'react';
import Navigation from './Navigation';
import { instrumentos } from '../datos/instrumentos.json';
import Cards from "./Cards";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class Productos extends Component {

  constructor() {
    super();
    this.state = {
      instrumentos,
    };
  }
  render() {
    const instrumentos = this.state.instrumentos.map((instrumento, i) => {
      return (
        <Cards
          id={instrumento.id}
          nombre={instrumento.instrumento}
          marca={instrumento.marca}
          modelo={instrumento.modelo}
          imagen={instrumento.imagen}
          precio={instrumento.precio}
          costoEnvio={instrumento.costoEnvio}
          cantidadVendida={instrumento.cantidadVendida}
          descripcion={instrumento.descripcion}
        ></Cards>
      );
    }
    );
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <h2 class="titulo">¡Instrumentos a la venta!</h2>
        <Container fluid="md">
          <Col className="col">{instrumentos}</Col>
        </Container>
      </React.Fragment>
    );
  }
}


export default Productos;