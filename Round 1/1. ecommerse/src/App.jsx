import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import Product from './pages/Product';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Replace with your actual API call
        const response = await axios.get('http://localhost:8000/api/products'); // Replace with Test Server API
        const formattedData = response.data.map((product) => ({
          ...product,
          id: generateProductId(product),
        }));
        setProducts(formattedData.slice(0, 10)); // Top 10 Products
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        {loading && <p>Loading products...</p>}
        {error && <p>Error: {error}</p>}
        <Routes>
          <Route path="/" element={<AllProducts products={products} />} />
          <Route path="/product/:productId" element={<Product products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
