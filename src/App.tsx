import React, { useEffect, useState } from 'react';
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'
//router
import Routers from "./routers/Router";

const queryClient = new QueryClient()

const App=()=> {
  return (
    <div className="App">
           <QueryClientProvider client={queryClient}>
           <Routers/>      
           </QueryClientProvider>
        
    </div>
  );
}

export default App;
