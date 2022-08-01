import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Gerenciador de Vendas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/historico_vendas">Histórico de vendas</Nav.Link>
            <Nav.Link href="/cadastro_vendas">Cadastro de vendas</Nav.Link>
            <Nav.Link href="/aprovar_vendas">Aprovar Vendas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}