import React from 'react'
import { Card, Row, Col } from 'react-materialize'

const Members = (props) => {
  return(
    props.members.map((member, index) => {
      return (
        <Card>
          <p style={{ textAlign: 'right' }} > Membro: {index} </p>
          <Row style={{ verticalAlign: 'middle', marginBottom: '0' }}>
            <Col m={2} className="card-image" >
              <img style={{ borderRadius: '50%' }} src={member.photo.profile.url} alt={member.name} />
            </Col>
            <Col m={2} style={{ marginTop: '20px' }} >
              <p><b> {member.name} </b></p>
            </Col>
            <Col m={2} style={{ marginTop: '20px' }}>
              <p> - </p>
            </Col>
            <Col m={2} style={{ marginTop: '20px' }}>
              <p><b><i> {member.email} </i></b></p>
            </Col>
          </Row>
        </Card>
      )
    })
  )
}

export default Members
