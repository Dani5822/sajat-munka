import React, { useState } from 'react';
import axios from 'axios'
function Loginpage() {
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
  

 
    function handleSubmit(e: { preventDefault: () => void; }){
        e.preventDefault()
        axios.post('http://localhost:3000/login',{username,password})
        .then((result) => {
            console.log(result)    
        }).catch((err) => { 
            console.log(err)
        });
    }

  return (
    <>
    <div className='container'>
      <h2>Bejelentkezés</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label id='emaillabel'>Email:</label>
          <input type="email" value={username} onChange={e=> setusername(e.target.value)} />
        </div>
        <div>
          <label>Jelszó:</label>
          <input type="password" value={password} onChange={e=>setpassword(e.target.value)} />
        </div>
        <button>
          Bejelentkezés
        </button>
        <button type="button">
          Regisztráció
        </button>
      </form>
    </div>
    </>
  )
  
};

export default Loginpage