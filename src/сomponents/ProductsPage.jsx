import React, { useState, useEffect, useContext, createContext } from 'react';
import Stars from './Stars';
import '../style.css'; 
import { Link } from 'react-router-dom';


const ProductsPage = () => {
    const [data, setData] = useState([]);

    
  const handleId =(id)=>{
        console.log(id);
        <idProduct value={id}/>
        
        
  }
    useEffect(() => {
        fetch('https://671f75cfe7a5792f052e55dd.mockapi.io/items')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    
    return (
        
        <div className="products-container">
 
            {data.map(product => (
                <Link onClick={()=>handleId(product.id)} to={`product/${product.id}` }>
                <div key={product.id} className="product-card">
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <Stars rating={product.rating.rate} />
                </div>
                </Link>
            ))}
        </div>
    );
};


export default ProductsPage;
