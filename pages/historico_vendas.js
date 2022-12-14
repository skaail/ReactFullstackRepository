import { createClient } from "next-sanity";
import Header from "../components/Header";
import NavBarVendedor from "../components/NavBarVendedor";
import NavBarMan from "../components/NavBarManager";import { useEffect } from 'react'
import {app} from '../firebaseConfig'
import { useRouter } from "next/router";
import {collection, addDoc} from 'firebase/firestore'
import Table from 'react-bootstrap/Table';
import { useState } from 'react'

export default function IndexPage({ vendas }) {
  let router = useRouter()
  const [role, setRole] = useState('');

  useEffect(() => {
    let token = sessionStorage.getItem('Token')
    let role = sessionStorage.getItem('role')
    setRole(role)
    console.log(role)
    if(!token) {
        router.push('/login')
    }
    

    
  }, []) 

  function NavVend(props) {
    return <NavBarVendedor></NavBarVendedor>
  }
  
  function NavMan(props) {
    return <NavBarMan></NavBarMan>
  }

  function NavBar(props) {
    if (role == 2) {
      return <NavVend />;
    }
    return <NavMan />;
  }




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



export async function getStaticProps() {
  const vendas = await client.fetch(`*[_type == "vendas"]`);

  return {
    props: {
      vendas
    },
    revalidate: 600,
  };
}