import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const CategoryItem = (props) => {
  return (
    <div className="CategoryItem">
      <ListItem 
        data-testid="category-item" 
        button 
        divider 
        onClick={() => props.click(props.title)} 
        selected={props.selected}
      >
        <ListItemText primary={props.title}/>
      </ListItem>
    </div>
  );
}

export default CategoryItem;