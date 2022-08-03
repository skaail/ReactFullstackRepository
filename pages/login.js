
import { useEffect } from 'react';
import {
    getAuth,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { useState } from 'react';
import { useRouter } from 'next/router';
import {app, database} from '../firebaseConfig'
import {collection, getDocs, where, query} from 'firebase/firestore'

export default function Register() {
    const databaseRef = query(collection(database, 'users'), where("email", "==", email))
    const auth = getAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');

    const signUp = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response.user)
                sessionStorage.setItem('Token', response.user.accessToken);
                sessionStorage.setItem('role', id);
                router.push('/home')
            })
            .catch(err => {
                alert('Cannot Log in')
            })
    }

    const register = () => {
                router.push('/register')
    }

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

    const login = event => {
        getData(event)
        signUp(event)
      }



    useEffect(() => {
        let token = sessionStorage.getItem('Token')
        getData()
        if(token){
            
            router.push('/home')
        }
    }, [])

    return (
        <div >

            <main className='login'>

        <h1 className="title">Login</h1>

        <div className="mb-3">
                <input
                    placeholder='Email'
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    type='email'
                    className="form-control"
                />
        </div>
        <div className="mb-3">
                <input
                    placeholder='Password'
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    type='password'
                    className="form-control"
                />
        </div>
        <div className="d-grid">
                <button
                className="btn btn-primary"

                    onClick={login}
                >Sign In</button>
                <button
                className="btn btn-primary"

                    onClick={register}
                >Register</button>
        </div>


            </main>
        </div>
    )
}