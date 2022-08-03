import { createClient } from "next-sanity";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useEffect } from 'react'
import {app} from '../firebaseConfig'
import { useRouter } from "next/router";
import {collection, addDoc} from 'firebase/firestore'




export default function IndexPage({ vendas }) {
  let router = useRouter()

  useEffect(() => {
  

        router.push('/home')
    
  }, [])  




  return (
    <>
        <Header></Header>
        <NavBar></NavBar>
      <header>
        <h1>Carregando...</h1>
      </header>

    </>
  );
}
