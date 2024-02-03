import './App.css'
import { User } from "./user.ts";
import { useEffect, useState } from 'react';

function App() {

  const [users,setUser]=useState([] as User[])

  useEffect(()=>{
    async function load() {
      try {
        const response=await fetch('http://localhost:3000/bejelentkezesadatok')
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
      
    </div>
    </>
  )
}

export default App
