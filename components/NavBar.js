
import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Gerenciador de Vendas</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/historico_vendas">Histórico de vendas <span class="sr-only"></span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/cadastro_vendas">Cadastro de vendas <span class="sr-only"></span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Cadstro de Vendedor <span class="sr-only"></span></a>
      </li>
    </ul>
  </div>
</nav>
    )
  }
}