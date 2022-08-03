<<<<<<< HEAD
    import { createClient } from "next-sanity";
    import Header from "../components/Header";
    import NavBar from "../components/NavBar";
    import { useEffect } from 'react'
    import {app} from '../firebaseConfig'
    import { useRouter } from "next/router";
    import {collection, addDoc} from 'firebase/firestore'
=======
import { createClient } from "next-sanity";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useEffect } from 'react'
import {app} from '../firebaseConfig'
import { useRouter } from "next/router";
import {collection, addDoc} from 'firebase/firestore'
>>>>>>> 4ea7031817f63433f3276a25b1286fcc12c0d358




<<<<<<< HEAD
    export default function IndexPage({ vendas }) {
    let router = useRouter()

    useEffect(() => {
    

            router.push('/home')
        
    }, [])  
=======
export default function IndexPage({ vendas }) {
  let router = useRouter()

  useEffect(() => {
  

        router.push('/home')
    
  }, [])  
>>>>>>> 4ea7031817f63433f3276a25b1286fcc12c0d358




<<<<<<< HEAD
    return (
        <>
        <header>
            <h1>Carregando...</h1>
        </header>

        </>
    );
    }
=======
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
>>>>>>> 4ea7031817f63433f3276a25b1286fcc12c0d358
