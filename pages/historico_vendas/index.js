import { createClient } from "next-sanity";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Table from 'react-bootstrap/Table';


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
  projectId: "tmdmvjqt",
  dataset: "compras",
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