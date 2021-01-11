import './App.css';
import React, {useState} from 'react';
import ProductListPage from './components/ProductListPage/ProductListPage';
import ProductPage from './components/ProductPage/ProductPage';
import CategoryList from './components/CategoryList/CategoryList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewItemPage from './components/NewItemPage/NewItemPage';
function App() {

  let categories = ["🥩 Meat", "🥕 Vegetables", "🍎 Fruits", "🧀 Dairy", "🍞 Grains"];
  const [products, setProducts] = useState([
    {id: 1, name: "Ground Beef", category: "🥩 Meat", price: "5.00", quantity: "12", desc: "Ground beef in a plastic tube"},
    {id: 2, name: "T-bone Steak", category: "🥩 Meat", price: "12.00", quantity: "8", desc: "T-bone Steak"},
    {id: 3, name: "2% Milk - Gallon", category: "🧀 Dairy", price: "3.00", quantity: "22", desc: "A gallon of 2% milk"},
    {id: 4, name: "Chocolate Milk", category: "🧀 Dairy", price: "4.00", quantity: "13", desc: "A gallon of chocolate milk"},
    {id: 5, name: "Spinach", category: "🥕 Vegetables", price: "3.00", quantity: "15", desc: "Spinach in a plastic bag"},
    {id: 6, name: "Lettuce", category: "🥕 Vegetables", price: "2.00", quantity: "12", desc: "A head of lettuce"},
    {id: 7, name: "Bananas", category: "🍎 Fruits", price: "3.00", quantity: "5", desc: "A bunch of bananas"},
  ]);
  
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
    item.id = products.length + 1;
    setProducts([...products, item]);
    setNewItem(false);
    setCategory("All");
  }

  let page = <ProductListPage click={selectProductHandler} category={category} products={products} />
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
          <CategoryList category={category} new={newItemHandler} click={selectCategoryHandler} categories={categories} select={selectCategoryHandler}/>
          {
            page
          }
        </div>
      </div>
  );
}

export default App;
