import { createClient } from "next-sanity";
import Header from "../components/Header";
import NavBarVendedor from "../components/NavBarVendedor";
import NavBarMan from "../components/NavBarManager";
import { useEffect } from 'react'
import {app} from '../firebaseConfig'
import { useRouter } from "next/router";
import {collection, addDoc} from 'firebase/firestore'
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
        <h1>Home</h1>
      </header>

    </>
  );
}
