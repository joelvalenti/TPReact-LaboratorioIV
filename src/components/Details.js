import React, { Component } from 'react';
import { instrumentos } from '../datos/instrumentos.json';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Envio from "./Envio";

class Details extends Component {

  constructor() {
    super();
    this.state = {
      instrumentos
    }
  }

  render() {
    console.log(this.props);
    const parametroId = this.props.match.params.id;
    const instrumentoEncontrado = instrumentos.filter(
      (instrumento) => instrumento.id === parametroId
    );
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <h3 className="titulo">Detalles del Producto</h3>
        <Card className="cardDetails">
          <Container>
            <Row>
              <Col>
                <img
                  className="imageDetails"
                  src={require(`../assets/images/${instrumentoEncontrado[0].imagen}`)}
                />
                <h6 className="descrip">
                  Descripcion:
                      <br />
                  <br />
                  {instrumentoEncontrado[0].descripcion}
                </h6>
              </Col>
              <Col className="colDetails">
                <Row className="cantVendidos">
                  <br></br>
                  {instrumentoEncontrado[0].cantidadVendida} vendidos
                    </Row>
                <br />
                <Row>
                  <h2>{instrumentoEncontrado[0].instrumento}</h2>
                </Row>
                <br />
                <Row>
                  <h3>Precio:${instrumentoEncontrado[0].precio}</h3>
                </Row>
                <br />
                <Row>
                  <h5>Marca:{instrumentoEncontrado[0].marca}</h5>
                </Row>
                <Row>
                  <h5>modelo:{instrumentoEncontrado[0].modelo}</h5>
                </Row>
                <br />
                <Row>
                  <h6>Costo Envio:</h6>
                </Row>
                <Row>
                  <Envio costoEnvio={instrumentoEncontrado[0].costoEnvio}></Envio>
                </Row>
                <Row>
                  <button className="btn btn-primary boton">Agregar al carrito</button>
                </Row>
              </Col>
            </Row>
          </Container>
        </Card>
      </React.Fragment>
    );
  }
}

export default Details;