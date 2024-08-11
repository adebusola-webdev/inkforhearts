import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import { Home } from './component/Home';
import Layout from './component/Layout';
import Occassion from './pages/Occassion';
import Birthday from './pages/Birthday';
import { Wedding } from './pages/Wedding';
import { Anniversary } from './pages/Anniversary';
import { Purposal } from './pages/Purposal';
import { Motherday } from './pages/Motherday';
import Valday from './pages/Valday';
import Christmas from './pages/Christmas';
import Fathersday from './pages/Fathersday';

function App() {
  return (
    <>
        <Router>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route path='/home' element={<Home/>}/>
             <Route path='/occ' element={<Occassion/>}/> 
            <Route path='/bday' element={<Birthday/>}/>
           
            <Route path='/wday' element={<Wedding/>}/>
            <Route path='/aday' element={<Anniversary/>}/>
            <Route path='/pday' element={<Purposal/>}/>
            <Route path='/mday' element={<Motherday/>}/>
            <Route path='/vday' element={<Valday/>}/>
            <Route path='/chrisday' element={<Christmas/>}/>
            <Route path='/fday' element={<Fathersday/>}/>
           

            </Route>
          
         
          




        </Routes>
      </Router>
    </>
  );
}

export default App;
