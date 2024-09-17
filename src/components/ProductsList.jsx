import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; 


export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products); 
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  

  return (
    <div className="pt-16 grid  grid-cols-3 gap-10 max-w-screen-lg mx-auto">
     
      {products.map((product) => (
           
           <ProductCard key={product.id} product={product} />
      ))}
      
    </div>
  );
}
