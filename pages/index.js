    import { createClient } from "next-sanity";
    import Header from "../components/Header";
    import NavBarVendedor from "../components/NavBarVendedor";
    import NavBarMan from "../components/NavBarManager";
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
        <header>
            <h1>Carregando...</h1>
        </header>

        </>
    );
    }
