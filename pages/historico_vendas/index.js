import { createClient } from "next-sanity";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";


export default function IndexPage({ vendas }) {
  return (
    <>
        <Header></Header>
        <NavBar></NavBar>
      <header>
        <h1>Histórico de vendas</h1>
      </header>
      <main>

        <table border='1' className="table">
          <thead>
            <tr>
              <td scope="col">Cliente</td>
              <td scope="col">Produto</td>
              <td scope="col">Data</td>
            </tr>
          </thead>
          <tbody>
            {vendas.map((vendas) => (
              <tr>
                <td key={vendas.cliente}>{vendas?.cliente}</td>
                <td key={vendas.produto}>{vendas?.produto}</td>
                <td key={vendas._createdAt}>{vendas?._createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

const client = createClient({
  projectId: "j8341ehi",
  dataset: "production",
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