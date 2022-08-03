import {app, database} from '../firebaseConfig'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function Register(){

    const auth = getAuth()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, senha)
        .then((response) => {
            sessionStorage.setItem('Token', response.user.accessToken)
            router.push('/home')

        })
    }

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if(token) {
            router.push('/home')
        }
    }, [])  




    return(
        <div>
            <h1>Register</h1>

            <input placeholder='Email' onChange={(event) =>setEmail(event.target.value)} value={email}></input>
            <input placeholder='Senha' onChange={(event) =>setSenha (event.target.value)} value={senha}></input>
            <button onClick={signUp}>Cadastrar</button>
        </div>
    )
}