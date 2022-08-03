import { createClient } from "next-sanity";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import CadVenda from "../../components/CadVenda";
import Modal from "../../components/Modal"
import { useRouter } from "next/router";
import { useEffect } from 'react'
import {app, database} from '../../firebaseConfig'


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
        <h1>Cadastro de vendas</h1>
      </header>
      <main>
        <CadVenda></CadVenda>
        <Modal></Modal>
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

