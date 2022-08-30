import React from 'react';
import './assets/css/style.css'
import './assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//router
import Routers from "./routers/Router";

function App() {
  return (
    <div className="App">
         <Routers/>      
    </div>
  );
}

export default App;
