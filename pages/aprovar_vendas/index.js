import { createClient } from "next-sanity";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Table from 'react-bootstrap/Table';


function aprovarVenda(id){
    client.patch(id).set({status: 'Aprovada'}).commit().then((res) => {window.location.reload(false);})
}

function reprovarVenda(id){
    client.patch(id).set({status: 'Reprovada'}).commit().then((res) => {window.location.reload(false);})
}

export default function IndexPage({ vendas }) {



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
                <th>Aprovação</th>
              </tr>
            </thead>
            <tbody>
            {vendas.map((vendas) => (
              
              <tr className='{vendas.status}'>
                <td >{vendas.cliente}</td>
                <td >{vendas.produto}</td>
                <td >{vendas.valor}</td>
                <td >{vendas._createdAt}</td>
                <td ><button onClick={() => aprovarVenda(vendas._id)}>Aprovar venda</button>
                <button onClick={() => reprovarVenda(vendas._id)}>Reprovar venda</button></td>
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
  const vendas = await client.fetch(`*[_type == "vendas" && status == 'none']`);
  return {
    props: {
      vendas
    }
  };
}