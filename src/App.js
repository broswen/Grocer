import './App.css';
import React, {useState} from 'react';
import ProductListPage from './components/ProductListPage/ProductListPage';
import ProductPage from './components/ProductPage/ProductPage';
import CategoryList from './components/CategoryList/CategoryList';
import NewItemPage from './components/NewItemPage/NewItemPage';

import { connect } from 'react-redux';

function App(props) {
  
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const [newItem, setNewItem] = useState(false);

  const selectCategoryHandler = (c) => {
    setCategory(c);
    setSelected(null);
    setNewItem(false);
  };

  const selectProductHandler = (p) => {
    setSelected(p);
    setNewItem(false);
  }

  const newItemHandler = () => {
    setNewItem(true);
  }

  const saveHandler = (item) => {
    props.onAddProduct(item);
    setNewItem(false);
    setCategory("All");
  }

  let page = <ProductListPage click={selectProductHandler} category={category} products={props.products} />
  if (selected !== null) {
    page = <ProductPage product={selected} />
  }
  if (newItem) {
    page = <NewItemPage save={saveHandler}/>
  }

  return (
      <div className="Wrapper">
        <div className="Toolbar">
        </div>
        <div className="App">
          <CategoryList category={category} new={newItemHandler} click={selectCategoryHandler} categories={props.categories} select={selectCategoryHandler}/>
          {
            page
          }
        </div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: Array.from(state.categories)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: (product) => dispatch({type: "ADD_PRODUCT", product})
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);