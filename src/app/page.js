"use client"
import { Navbar } from '@/components/Navbar/Navbar'
import Products from '@/components/Products/Products'
import { Signin } from '@/components/Signin/Signin'
import Image from 'next/image'
import { useState } from 'react'; 

 import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  
  const handleLogin = (authToken) => {
    setToken(authToken);
  };
  return (
     <main>
      <Navbar/>
      {!token?( <Signin onLogin={handleLogin}/> ): 
      (<Products token={token} />)
      }
     
     <ToastContainer />
     </main>
  )
}
