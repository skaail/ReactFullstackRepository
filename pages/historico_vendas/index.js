import { createClient } from "next-sanity";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Table from 'react-bootstrap/Table';
import React, { useEffect } from "react";


export default function IndexPage({ vendas }) {

  useEffect(() => {
    let headersList = {
      "Accept": "*/*",
      "Authorization": "Bearer skzhPshmupTGmkSdXPlS7FpNiRMO3tUqa3LLNNLOGtyTQZGNPcdbpapns53y6Awm63SM89wrzJro3WVmGB6dbxQsNLctMx6bEJ78eau0ZVu4TrhaHGsDEfiShpuycmSV5EKcwHg6g4nf2JHuUowU4evZ13pBJcbaez4pvNTvyccig3yrKO9H"
     }
     
     fetch("https://tmdmvjqt.api.sanity.io/v2021-10-21/data/query/compras?query=*%5B_type%20%3D%3D%20%22vendas%22%5D", { 
       method: "GET",
       headers: headersList
     }).then(function(response) {
       return response.text();
     }).then(function(data) {
       console.log(data);
     })
   }, []);

  return (
    <>
        <Header></Header>
        <NavBar></NavBar>
      <header>
        <h1>Histórico de vendas</h1>
      </header>
      <main>
      <Table  striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Produto</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
            {vendas.map((vendas) => (
              <tr>
                <td >{vendas.cliente}</td>
                <td >{vendas.produto}</td>
                <td >{vendas._createdAt}</td>
              </tr>
            ))}
          </tbody>
      </Table>
      </main>
    </>
  );
}



const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  token: process.env.SANITY_API_WRITE_TOKEN, 
  apiVersion: "2021-10-14",
  useCdn: false
});


export async function getStaticProps() {
  const vendas = await client.fetch(`*[_type == "vendas"]`);
  return {
    props: {
      vendas
    }
  };


}