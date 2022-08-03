import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react'

function logout() {
  sessionStorage.setItem('Token', "")
  sessionStorage.setItem('role', "")
  window.location.reload(false)
}

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
            <Nav.Link href="/aprovar_vendas">Aprovar Vendas</Nav.Link>
            <Nav.Link href="/cadastro_vendedor">Cadastro de vendedor</Nav.Link>
            <div className="d-grid ">
                <button
                className="btn btn-primary logout"

                    onClick={logout}
                >Log Out</button>
        </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}