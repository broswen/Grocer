import React, {useState, useEffect} from 'react';
import Divider from '@material-ui/core/Divider';
import ProductItem from './ProductItem/ProductItem';
import SearchBar from './SearchBar/SearchBar';

import './ProductListPage.css';

const ProductListPage = (props) => {

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(props.products);

  useEffect(() => {
    let filtered = props.products.filter(product => (product.category === props.category) || props.category === "All");
    if (search.trim() !== "") {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    }
    setFilteredProducts(filtered);
  }, [search, props.category, props.products]);

  return (
    <div className="ProductListPage">
      <SearchBar changed={setSearch}/>
      <div className="ProductList">
        {
          filteredProducts.map(product => (
            <ProductItem key={product.id} {...product} click={() => props.click(product)}/>
          ))
        }
      </div>
      
    </div>
  );
}

export default ProductListPage;