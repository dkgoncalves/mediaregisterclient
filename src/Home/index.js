import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-materialize'

const Home = () => (
  <Container>
    <Card>
      <Row style={{ textAlign: 'center' }}>
        <h2> Associação dos Programadores </h2>
        <h5> Registre-se como membro para receber informações de TI toda a semana! </h5>

      </Row>
      <Row style={{ textAlign: 'center' }}>
        <Col s={12} m={12}>
          <Col s={12} m={6}>
            <a href="/mediaregisterclient/register/" >
              <Button style={{ width: '100%' }} > Registrar </Button>
            </a>
          </Col>
          <Col s={12} m={6}>
            <a href="/mediaregisterclient/members/">
              <Button style={{ width: '100%' }} > Ver Membros </Button>
            </a>
          </Col>
        </Col>
      </Row>
    </Card>
  </Container>
)

export default Home
