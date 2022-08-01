import { createClient } from "next-sanity";
import React, { Component } from 'react'

const client = createClient({
  projectId: "tmdmvjqt",
  dataset: "compras",
  token: 'skzhPshmupTGmkSdXPlS7FpNiRMO3tUqa3LLNNLOGtyTQZGNPcdbpapns53y6Awm63SM89wrzJro3WVmGB6dbxQsNLctMx6bEJ78eau0ZVu4TrhaHGsDEfiShpuycmSV5EKcwHg6g4nf2JHuUowU4evZ13pBJcbaez4pvNTvyccig3yrKO9H', 
  apiVersion: "2021-10-14",
  useCdn: false
});




export default class CadVenda extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    
        const cliente = e.target.cliente.value;
        const produto = e.target.produto.value;
        const valor = e.target.valor.value;
        

        const doc = {
          
          _type: 'vendas',
          cliente: cliente,
          produto: produto,
          valor: valor,
          status: 'none'
        }
        
        client.create(doc).then((res) => {
          
        })

      };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
            <label htmlFor="Cliente" className="form-label">Cliente</label>
            <input type="text" className="form-control" name="cliente" required></input>
        </div>
        <div className="mb-3">
        <label htmlFor="Produto" className="form-label">Produto</label>
            <input type="text" className="form-control" name="produto" required></input>
        </div>
        <div className="mb-3">
        <label htmlFor="Valor" className="form-label">Valor</label>
            <input type="text" className="form-control" name="valor" required></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
  }
}


