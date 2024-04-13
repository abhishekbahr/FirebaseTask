import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import {  useNavigate } from 'react-router-dom'

const Home = () => {
    const [authUser,setAuthUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const listen = onAuthStateChanged(auth,(user) => {
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        });
        return () => {
            listen();
        }
    },[])

    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log("signed out successfull")
            navigate('/signup')
        }).catch((err) => console.log(err))
    }
    return (
        <div className= ' bg-gray-300'>
            {authUser ? 
                <div className='flex flex-col justify-center items-center gap-10 p-40'>
                    <p className='text-3xl'>Your email : <span className='font-bold text-pink-500'>{authUser.email}</span> </p>
                    <button className=' rounded-lg px-4 py-2 bg-black font-semibold text-white hover:bg-gray-800 hover:scale-105' onClick={handleLogout}>Log Out</button>
                </div>
                :
                <div className='flex flex-col justify-center items-center p-40'>
                    <h1 className='text-3xl text-red-500'>User not logged in </h1>
                </div>
            }    
        </div>
    )
}

export default Home