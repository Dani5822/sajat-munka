import './App.css'
import { User, Users } from "./user.ts";
import { useEffect, useState } from 'react';

function App() {

  const [users,setUser]=useState([] as User[])

  useEffect(()=>{
    async function load() {
      try {
        const response=await fetch('http://localhost:3000/bejelentkezesadatok')
        const users=await response.json() as User[];
        console.log(users)
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
      <ul>
          {
            users.map((user)=><li> {user.name} {user.email}</li>)
          }
      </ul>
    </div>
    </>
  )
}

export default App
