import React, {useState} from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


import "./CategoryList.css";

const CategoryList = (props) => {
  return (
    <div className="CategoryList" data-testid="category-list">
      {
        props.categories.map(cat => (
          <CategoryItem key={cat} title={cat} click={props.click} selected={cat === props.category}/>
        ))
      }
      <CategoryItem title="All" click={props.click} selected={"All" === props.category}/>
      <Divider />
      <CategoryItem title="New Item" click={props.new}/>
    </div>
  );
}

export default CategoryList;