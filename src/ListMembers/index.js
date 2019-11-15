import React, { Component } from 'react'
import { Container, Card, Row, Col } from 'react-materialize'
import API from '.././api.js'
import Members from './members.js'

class ListMembers extends Component {
  constructor(props){
    super(props);
    this.state = {
      members: []
    }
  }

  componentDidMount(){
    this.getMembers()
  }

  getMembers = async () => {
    const request = await API.get('/users').then(resp => resp.data)
    this.setState({ members: request })
  }

  render() {
    return(
      <Container>
        <Card actions={<a href="/" styled={{ mouse: 'pointer' }}> Voltar </a>} >
          <Row style={{ textAlign: 'center' }}>
            <Col s={12} m={8} offset="m2" >
              <Members members={this.state.members} />
            </Col>
          </Row>
        </Card>
      </Container>
    )
  }
}

export default ListMembers
