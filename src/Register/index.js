import React, { Component } from 'react';
import { Container, Card, Button, Col, Row } from 'react-materialize'
import API from '.././api.js'

 class Register extends Component {
   constructor(props) {
     super(props);
     this.state = {
       name: '',
       email: '',
       photo: '',
       isValid: true
     }

     this.tiraFoto = this.tiraFoto.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
     this.handleChange = this.handleChange.bind(this)
     this.clear = this.clear.bind(this)
   }

  habilitarFoto = async () => {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      await navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (mediaStream) {
          let video = document.getElementById('video')
          video.style.visibility = "visible"
          video.srcObject = mediaStream
          video.onloadedmetadata = function (e) {
            video.play()
          }
        })
        .catch(function (err) { console.log(err.name + ": " + err.message); });
    }
  }

  tiraFoto = () => {
    let canvas = document.getElementById('canvas')
    let video = document.getElementById('video')
    let context = canvas.getContext('2d')

    context.drawImage(video, 0, 0, 320, 240)
    video.pause()
    video.style.visibility = 'hidden'

    this.setState({ photo: canvas.toDataURL('image/png') })
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = async () => {
    this.checkValidations()
    if (this.state.isValid === false){ return }

    const params = {'user': { name: this.state.name, email: this.state.email, photo: this.state.photo }}
    const request = await API.post(`/users`, params)
    if(request.status === 201) { window.M.toast({html: 'Registrado com sucesso!'}) }
    setTimeout(() => this.relocation(), 600)
  }

  relocation = () => {
    window.location = "/"
  }

  checkValidations = () => {
    if (this.state.name === ''){
      this.setState({ isValid: false })
      window.M.toast({ html: 'Por favor, preencha o campo nome.' })
      let name = document.getElementById('name')
      name.focus()
      return
    }

    if (this.state.email === ''){
      this.setState({ isValid: false })
      window.M.toast({ html: 'Por favor, preencha o campo e-mail.' })
      let name = document.getElementById('email')
      name.focus()
      return
    }

    if (this.state.photo === ''){
      this.setState({ isValid: false })
      window.M.toast({ html: 'Por favor, registre uma foto.' })
      return
    }

    this.setState({ isValid: true })
  }

  clear = () => {
    let video = document.getElementById('video')
    video.pause()
    video.style.visibility = 'hidden'

    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)

    this.setState({ name: '', email: '', photo: '' })
  }

  render() {
    return (
      <Container>
        <Card actions={<a href="/" style={{ mouse: 'pointer' }} > Voltar </a> }>
          <Row>
            <Col s={12} m={5}>
              <Col s={12} m={12} >
                <input name="name" id="name" type="text" placeholder="Nome" value={this.state.name} onChange={this.handleChange} />
              </Col>
              <Col s={12} m={12} >
                <input name="email" id="email" type="text" placeholder="E-mail" value={this.state.email} onChange={this.handleChange} />
              </Col>
              <Col s={12} m={4} style={{ textAlign: 'center', marginTop: '3px', marginBottom: '3px' }}>
                <Button style={{width: '100%'}} onClick={this.habilitarFoto}> Habilitar foto </Button>
              </Col>
              <Col s={12} m={4} style={{ textAlign: 'center', marginTop: '3px', marginBottom: '3px'  }}>
                <Button  style={{width: '100%'}} onClick={this.clear}> Limpar </Button>
              </Col>
              <Col s={12} m={4} style={{ textAlign: 'center', marginTop: '3px', marginBottom: '3px'  }}>
                <Button style={{width: '100%'}} onClick={this.handleSubmit}> Registrar </Button>
              </Col>
            </Col>

            <Col s={12} m={7} style={{ textAlign: 'center'}}>
              <div style={{ marginBottom: '3px', padding: '3px', border: '1px solid grey' }}>
                <video className="card-image" id="video" width="320" height="240" />
                <canvas id="canvas" width="320" height="240" />
              </div>
              <Button onClick={this.tiraFoto}> Tira foto </Button>
            </Col>
          </Row>
        </Card>
      </Container>
    )
  }
}

export default Register;
