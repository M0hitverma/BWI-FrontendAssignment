"use client"
import React, { useState } from 'react'
import './SigninStyle.css'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



export const Signin = ({onLogin}) => {
   const [username , setUsername] = useState('');
   const [password, setPassword] = useState('');

    const handleLogin = async()=>{
         
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username,
                password,
              }),
            });
      
            if (response.ok) {
              const data = await response.json();
              const authToken = data.token;
              console.log(data);
              localStorage.setItem('token', authToken);
              onLogin(authToken);
            } else {
              toast.error('Wrong Credentials', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: "light",
                });
              console.error('Login failed with status code', response.status);
            }
          } catch (error) {
            
            console.error('Error during login:', error.message);
          }
        };
           
    

  return (
    <div className='maindiv bg-blue-200'>
        
        <form className='flex flex-col gap-4 bg-blue-400 formcontainer drop-shadow-2xl text-xl '>
        <label className='inputfield gap-4'>
          <span className='font-bold'>Username:</span>
          <input
            type="text"
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-1 bg-transparent border-b-2 outline-none"
          />
        </label>
       
        <label className='inputfield gap-5'>
          <span className='font-bold'>Password:</span>
          <input
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" p-1 bg-transparent border-b-2 outline-none "
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin} className="button rounded-md hover:scale-95 drop-shadow-sm font-semibold">
          Login
        </button>
      </form>
    </div>
  )
}

