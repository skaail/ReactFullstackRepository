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

  render() {
    return (
        <div id="myModal" className="modal">


            <div className="modal-content">
            <span className="close">&times;</span>
            <p>Cadastrado com sucesso</p>
            </div>

        </div>
    )
  }
}


