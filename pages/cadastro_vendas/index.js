import { createClient } from "next-sanity";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import CadVenda from "../../components/CadVenda";


export default function IndexPage({ vendas }) {
  return (
    <>
        <Header></Header>
        <NavBar></NavBar>
      <header>
        <h1>Cadastro de vendas</h1>
      </header>
      <main>
        <CadVenda></CadVenda>
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