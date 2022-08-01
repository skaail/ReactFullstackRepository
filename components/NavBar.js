
import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Gerenciador de Vendas</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/historico_vendas">Histórico de vendas <span className="sr-only"></span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/cadastro_vendas">Cadastro de vendas <span className="sr-only"></span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Cadstro de Vendedor <span className="sr-only"></span></a>
      </li>
    </ul>
  </div>
</nav>
    )
  }
}