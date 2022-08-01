import { createClient } from "next-sanity";
import Header from "../components/Header";
import NavBar from "../components/NavBar";


export default function IndexPage({ vendas }) {
  return (
    <>
        <Header></Header>
        <NavBar></NavBar>
      <header>
        <h1>Home</h1>
      </header>

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