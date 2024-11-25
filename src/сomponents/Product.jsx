import { useEffect,useState } from "react";
import Stars from './Stars';
import '../style.css'; 
import { Link, useLocation } from "react-router-dom";
const Product = ({id}) => {
    
    const location = useLocation()
    const arrLocation = location.pathname.split("/").pop()
   
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://671f75cfe7a5792f052e55dd.mockapi.io/items/${arrLocation}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [id]);
    
    return (
        <div className="product-page">
            <div className="product-details" key={product.id}>
                <div className="product-details-container">
                    <h1>{product.title}</h1>
                    <img src={product.image} alt="asd" />                
                    <p>{product.description}</p>
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price}</p>
                    <Stars rating={product.rating} />
                    <a href="/"><button>Назад</button></a>
                </div>
            </div>
        </div>
    );
};

export default Product;