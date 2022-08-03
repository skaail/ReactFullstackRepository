import { createClient } from "next-sanity";
import Header from "../components/Header";
import NavBarVendedor from "../components/NavBarVendedor";
import NavBarMan from "../components/NavBarManager";
import { useEffect } from 'react'
import {app} from '../firebaseConfig'
import { useRouter } from "next/router";
import {collection, addDoc} from 'firebase/firestore'
import CadVenda from '../components/CadVenda'
import Modal from '../components/Modal'
import { useState } from 'react';


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
    if (role == 1) {
      return <NavVend />;
    }
    return <NavMan />;
  }

  return (
    
    <>
    <NavBar/>
        <Header></Header>
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

