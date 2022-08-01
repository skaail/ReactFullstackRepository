
import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link href="/">
      <a className="navbar-brand">Gerenciador de Vendas</a>
    </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link href="/historico_vendas">
          <a className="nav-item active">Histórico de vendas</a>
        </Link>
      </li>
      <li className="nav-item active">
        <Link href="/cadastro_vendas">
            <a className="nav-item active">Cadastro de vendas</a>
        </Link>
      </li>
      <li className="nav-item active">
        <Link href="#">
            <a className="nav-item active">Cadstro de Vendedor</a>
        </Link> 
      </li>
    </ul>
  </div>
</nav>
    )
  }
}