import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Rating } from '@mui/material';

function Product({ products }) {
  const { productId } = useParams();
  const selectedProduct = products.find((product) => product.id === productId);

  if (!selectedProduct) {
    return <p>Product not found!</p>;
  }

  const { name, company, category, price, rating, discount, image, availability } = selectedProduct;

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="300"
        image={image || 'https://via.placeholder.com/300'}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company} - {category}
        </Typography>
        <Typography variant="body2">
          Price: ${price.toFixed(2)} {discount && `(${discount}% off)`}
        </Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Typography variant="body2" color="text.secondary">
          Availability: {availability ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Product;
