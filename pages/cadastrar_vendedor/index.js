import { createClient } from "next-sanity";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { useEffect } from 'react'
import {app, database} from '../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from "next/router";
import {collection, addDoc} from 'firebase/firestore'
import { useState } from 'react'



export default function CadVendedor() {
  let router = useRouter()

  useEffect(() => {
    let token = sessionStorage.getItem('Token')
  
    if(!token) {
        router.push('/login')
    }
  }, [])  
    
    const [role, setRole] = useState(null)
    const databaseRef = collection(database, 'users')
    const auth = getAuth()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, senha)
    }

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

    }, [])  

    const cadastrarVendedor = event => {
        addData(event)
        signUp(event)
      }



    const addData = () => {
        addDoc(databaseRef, {
            email: email,
            role: 2
        })
        .then(() => {
            alert('Vendedor cadastrado')
            setRole(null)
        })
        .catch((err) => {   console.error(err) })
      }
    return(
        <div>

        <Header></Header>
        <NavBar></NavBar>
            <h1>Register</h1>

            <input placeholder='Email' onChange={(event) =>setEmail(event.target.value)} value={email}></input>
            <input placeholder='Senha' onChange={(event) =>setSenha(event.target.value)} value={senha}></input>
            <input name="hiddenInput" value="role" type="hidden" />
            <button onClick={cadastrarVendedor}>Cadastrar</button>
        </div>
    )
}

const client = createClient({
  projectId: "tmdmvjqt",
  dataset: "compras",
  token: 'skzhPshmupTGmkSdXPlS7FpNiRMO3tUqa3LLNNLOGtyTQZGNPcdbpapns53y6Awm63SM89wrzJro3WVmGB6dbxQsNLctMx6bEJ78eau0ZVu4TrhaHGsDEfiShpuycmSV5EKcwHg6g4nf2JHuUowU4evZ13pBJcbaez4pvNTvyccig3yrKO9H', 
  apiVersion: "2021-10-14",
  useCdn: false
});



export async function getStaticProps() {
  const vendas = await client.fetch(`*[_type == "vendas"]`);

  return {
    props: {
      vendas
    },
    revalidate: 600,
  };
}