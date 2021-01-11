import React, {useState} from 'react';
import {Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import "./NewItemPage.css";
import { ContactSupportOutlined } from '@material-ui/icons';

const NewItemPage = (props) => {

  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setValues({...values, [event.target.name]: event.target.value});
  }

  const saveHandler = () => {
    props.save(values)
    setValues({});
  }

  return (
    <div className="NewItemPage">
      <form>
        <TextField 
          onChange={handleChange}
          variant="outlined"
          label="Name"
          name="name"
          type="text"
          />
        <TextField 
          onChange={handleChange}
          variant="outlined"
          label="Category"
          name="category"
          type="text"
          />
        <TextField 
          onChange={handleChange}
          variant="outlined"
          label="Description"
          name="desc"
          type="text"
          />
        <TextField 
          onChange={handleChange}
          variant="outlined"
          label="Quantity"
          name="quantity"
          type="number"
          />
        <TextField 
          onChange={handleChange}
          variant="outlined"
          label="Price"
          name="price"
          type="number"
          />
        <Button variant="outlined" onClick={saveHandler}>Save</Button>
      </form>
    </div>
  );
}

export default NewItemPage;