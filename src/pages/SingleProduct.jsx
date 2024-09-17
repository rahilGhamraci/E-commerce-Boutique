import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function SingleProduct(){
    const { id } = useParams();

    const [product, setProduct] = useState({});

    const [images, setImages] = useState([]);

    useEffect(() => {
      axios.get('https://dummyjson.com/products/'+ id )
        .then((response) => {
            setImages(response.data.images)
            setProduct(response.data)
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    }, []);

    
    return (
        <div className="flex justify-between gap-10 max-w-screen-sm mx-auto"> 
            <div className="w-1/2"> 
              <img className="h-auto w-full bg-gray-100 border border-solid border-black hover:scale-105 transition-transform" src={product.thumbnail} alt={product.title} />
              <div className="mt-5 grid  grid-cols-3 gap-2"> 
                 {images.map((image,i) => (
           
                   <div key={i} className="border border-solid border-black">
                       <img src={image}/>
                    </div>
                 ))}
                </div>
            </div> 
           
           <div className="w-1/2">  
              <h2 className="text-lg font-semibold line-clamp-1">{product.title}</h2>

              <span className="m-2 bg-gray-200 text-sm py-0.5 px-3 rounded-full">{product.category}</span>

              <div className="tracking-wide">{product.description}</div>

             <div className="my-2 flex items-center gap-2 "> 
                <h4 className="text-lg font-semibold text-lg">{product.price} </h4>
                <span className="text-sm"> DZD</span>
             </div>

              <button  className="mt-25 w-full mt-2 h-12 rounded border border-solid border-black bg-gray-200 text-center text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center" >
                   Add to cart
              </button>
            
            </div> 
            
        </div>
    );
}
   
