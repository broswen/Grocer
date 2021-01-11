import React, {useState} from 'react';
import { Card, CardContent, CardActions, Typography, Button} from '@material-ui/core';

import "./ProductItem.css";

const ProductItem = (props) => {
  return (
    <div className="ProductItem">
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            { props.name }
          </Typography>
          <Typography variant="body2" component="p">
            Quantity: { props.quantity }
          </Typography>
          <Typography variant="body2" component="p">
            Price: { props.price }
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small" onClick={props.click}>View</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ProductItem;