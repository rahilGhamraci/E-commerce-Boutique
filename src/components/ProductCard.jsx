import { Link } from 'react-router-dom';
export default function ProductCard({ product }){
    return (
        <div className=" shadow-xl rounder-tl-2xl rounded-tr-2xl">   
           <img className=" w-16 bg-gray-200 w-full rounded-tl-2xl rounded-tr-2xl hover:scale-105 transition-transform" src={product.thumbnail} />
           <div className="p-3"> 
             <h2 className="text-lg font-semibold line-clamp-1">{product.title}</h2>
             <div className="flex justify-between mt-2">
              <h4 className="text-lg font-semibold text-lg">{product.price}</h4>
              <h4 className="bg-gray-200 text-sm py-0.5 px-3 rounded-full">{product.category}</h4>
             </div>
             <Link 
              to={'/product/' + product.id}
              className="w-full mt-2 h-12 rounded border border-solid border-black bg-gray-200 text-center text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
              >
              Show
              </Link>

           </div>
          
          
        </div>
    );
}