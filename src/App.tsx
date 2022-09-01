import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//router
import Routers from "./routers/Router";


const App=()=> {
  const [user,setUser]=useState<Object | null>()
 
  useEffect(()=>{
    console.log('app.tsx')
      const token=localStorage.getItem('token')
      if(!token){
        setUser(null)
        return
      }
      setUser({name:'safoora',family:'aghabazaz'})
  },[])
  return (
    <div className="App">
         <Routers/>      
    </div>
  );
}

export default App;
