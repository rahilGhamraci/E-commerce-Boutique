import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Layout from './Layouts/Layout'
import SingleProduct from './pages/SingleProduct';
import ProductsList from './components/ProductsList'; 

function App() {
  

  return (
    <Router>
      <div>
        <Routes>
           <Route path="/" element={<Layout />}>
           
            <Route index element={<ProductsList />} />
           
            <Route path="product/:id" element={<SingleProduct />} />
            
            </Route>
        
        </Routes>
      </div>
    </Router>
   
  );
}

export default App
