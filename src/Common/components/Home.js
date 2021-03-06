import React, { useContext, useState } from 'react'
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from '../../UserContext';

const Home = () => {
    
  const state2 = useContext(UserContext)
  const {user, setUser} = state2
  
  const closeSesion = () =>{
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    setUser("")
  }

  return (
    <div className="col-6 m-auto mt-10 d-flex flex-column">
      <h1 className="text-center"> Sesión Iniciada</h1>
      <button className="btn btn-outline-primary btn-lg btn-block w-50 m-auto mt-3" onClick={closeSesion}>
        Cerrar Sesión
      </button>
    </div>
  )
}

export default Home