import { createClient } from "next-sanity";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Table from 'react-bootstrap/Table';
import { useRouter } from "next/router";
import { useEffect } from 'react'

export default function IndexPage({ vendas }) {
  let router = useRouter()

  useEffect(() => {
    let token = sessionStorage.getItem('Token')
  
    if(!token) {
        router.push('/login')
    }
  }, [])  

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
                <th>Valor</th>
                <th>Data</th>
                <th>Comissão</th>
              </tr>
            </thead>
            <tbody>
            {vendas.map((vendas) => (
              <tr className={vendas.status}>
                <td >{vendas.cliente}</td>
                <td >{vendas.produto}</td>
                <td >{vendas.valor}</td>
                <td >{vendas._createdAt}</td>
                <td >{vendas.comis}</td>
              </tr>
            ))}
          </tbody>
      </Table>
      </main>
    </>
  );
}



const client = createClient({
  projectId: "tmdmvjqt",
  dataset: "compras",
  token: 'skzhPshmupTGmkSdXPlS7FpNiRMO3tUqa3LLNNLOGtyTQZGNPcdbpapns53y6Awm63SM89wrzJro3WVmGB6dbxQsNLctMx6bEJ78eau0ZVu4TrhaHGsDEfiShpuycmSV5EKcwHg6g4nf2JHuUowU4evZ13pBJcbaez4pvNTvyccig3yrKO9H', 
  apiVersion: "2021-10-14",
  useCdn: false
});




export async function getServerSideProps() {
  const vendas = await client.fetch(`*[_type == "vendas"]`)
  return {
    props: {
      vendas
    }
  }
}
