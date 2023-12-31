"use client"
import React,{ useState , useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import Card from '../Card/Card';
import './ProductStyle.css'

const Products = ({token}) => {
    const [products, setProducts]= useState([]);
    const [searchitem, Setsearchitem]= useState('');
    const [maxPrice, setMaxPrice]=useState(1000);
   const [filteredproduct, setFilteredproduct]= useState([]);
    const fetchdata=async()=>{
        try {
            const response = await fetch('https://dummyjson.com/products',{
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
    
            if (response.ok) {
              const data = await response.json(); 
              setProducts(data.products);
              setFilteredproduct(data.products);
            
            } else {
              console.error('Failed to fetch products with status code', response.status);
            }
          } catch (error) {
            console.error('Error fetching products:', error.message);
          }
        }

    useEffect(()=>{
        fetchdata();
    }
    ,[token]);


   const handlesearch= ()=>{
     const filtered= products.filter((product)=>{
        return (
            product.title.toLowerCase().includes(searchitem.toLowerCase()) &&
            (maxPrice === '' || parseFloat(product.price) <= parseFloat(maxPrice))
          );
     });
     setFilteredproduct(filtered);
   }

  return (
    <div className='homecontainer bg-white '>
        <form className='flex flex-row justify-center gap-3 py-10'>
            <input 
            className=' p-2 bg-neutral-700 rounded-md w-70 '
            placeholder='Title'
            type="text"
            value={searchitem}
            onChange={(e)=>Setsearchitem(e.target.value)}
            ></input>

          <label className='text-black w-60 '>
            Price &nbsp;
           <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          &nbsp;
         {maxPrice}
          </label>

        <button className='searchbutton text-black text-2xl drop-shadow-xl ' type="button" onClick={handlesearch}><FaSearch /> </button>

        </form>

        <div className="slider">
          {filteredproduct.map((product)=>(

            <Card key={product.id} {...product} />
    
          ))}
          </div>
         
    </div>
  )
}

export default Products
