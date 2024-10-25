import React, { useState, useEffect } from 'react';

function ProductItem({ product }) {
  return (
    <li key={product.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', borderRadius: '4px' }}>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
    </li>
  );
}

function ProductList() {
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products'); 
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
        setIsLoading(false); 
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchProducts(); 
  }, []); 

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p> 
      ) : error ? (
        <p>Error: {error.message}</p> 
      ) : (
        <ul>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} /> 
          ))}
        </ul>
      )}
    </div>
  );
}

function App() {
  return (
    <div >
      <h1>Products</h1>
      <ProductList />
    </div>
  );
}

export default App;
