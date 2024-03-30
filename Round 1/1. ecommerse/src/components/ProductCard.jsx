import React from 'react';
import { Card, CardContent, CardMedia, Typography, Rating } from '@mui/material';

function ProductCard({ product }) {
  const { name, company, category, price, rating, discount, image, availability } = product;

  return (
    <Card sx={{ maxWidth: 345, margin: '10px' }}>  {/* Added margin for spacing */}
      <CardMedia
        component="img"
        height="140"
        image={image || 'https://via.placeholder.com/150'}  {/* Placeholder image */}
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
          Price: ${price.toFixed(2)}  {/* Format price to 2 decimal places */}
          {discount && ` (${discount}% off)`}
        </Typography>
        <Rating name="read-only" value={rating} readOnly precision={0.5} />  {/* Allow half-star ratings */}
        <Typography variant="body2" color="text.secondary">
          Availability: {availability ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
