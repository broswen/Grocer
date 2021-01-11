import React, {useState} from 'react';
import {Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import "./ProductPage.css";

const ProductPage = (props) => {
  return (
    <div className="ProductPage">
      <Typography variant="h2" component="h2">
        { props.product.name }
      </Typography>
      <Typography variant="h5" component="h5">
        { props.product.category }
      </Typography>
      <Typography variant="h5" component="h5">
        ID: { props.product.id }
      </Typography>
      <Divider />

      <Typography variant="h5" component="h5">
        Price
      </Typography>
      <Typography variant="subtitle1" component="p">
        { props.product.price}
      </Typography>

      <Typography variant="h5" component="h5">
        Quantity
      </Typography>
      <Typography variant="subtitle1" component="p">
        { props.product.quantity}
      </Typography>

      <Typography variant="h5" component="h5">
        Description
      </Typography>
      <Typography variant="subtitle1" component="p">
        { props.product.desc}
      </Typography>
    </div>
  );
}

export default ProductPage;