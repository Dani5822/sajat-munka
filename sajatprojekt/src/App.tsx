import './App.css'
import Loginpage from './login.tsx';
import { User } from "./user.ts";
import { SetStateAction, useEffect, useState } from 'react';


function App() {

  const [users,setUser]=useState([] as User[])

  useEffect(()=>{
    async function load() {
      try {
        const response=await fetch('http://localhost:3000/login')
        const users=await response.json() as User[];
        setUser(users)
        
      } catch (error) {
        console.log(error)
      }
    }
    load()  
  },[])
  return (
    <>
    <div>
      <Loginpage></Loginpage>
    </div>
    </>
  )
}

export default App
