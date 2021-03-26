import React from 'react';
import BiathlonTable from "./components/BiathlonTable";
import './App.css'

const App = ()=> {
  return (
   <div className='container'>
       <h1>Biathlon table</h1>
     <BiathlonTable />
   </div>
  );
};

export default App;
