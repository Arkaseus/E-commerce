import React, { useState, useEffect } from 'react';
import ProductCard from '../pro_cards/card';
import Styles from './product_list.module.css';
import Button from '../../components/Button/Button.jsx'
// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.imgurl} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>{product.desc}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// };

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchProducts = async () => {
        
      try {
        const response = await fetch("http://localhost:8000/getdata");
        let data = await response.json();
        
        setProducts(data);
        setIsLoading(false);

      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={Styles.product_list}>
     
      {isLoading ? (
        <h5>Loading...</h5>
      ) : (
        products.map(product => (
          <ProductCard key={product.id} product={product} visitor={props.visitor} />
        ))
      )}
    </div>
  );
};

export default ProductList;
