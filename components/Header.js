import React, { Component } from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends Component {
  render() {
    return (
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Vaga FullStack Desafio</title>
        
      </Head>
    )
  }
}


