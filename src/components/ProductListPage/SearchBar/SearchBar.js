import React, {useState} from 'react';
import { InputBase } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

import "./SearchBar.css";

const SearchBar = (props) => {

  const [search, setSearch] = useState("");

  const changeHandler = (s) => {
    setSearch(s);
    props.changed(s);
  }

  return (
    <div className="SearchBar">
      <SearchRoundedIcon className="Items"/>
      <InputBase
        style={{color:"white"}}
        fullWidth
        className="SearchInput Items" 
        placeholder="Search..." 
        value={search} 
        onChange={(event) => changeHandler(event.target.value)}/>
      <ClearRoundedIcon className="Items" onClick={() => changeHandler("")}/>
    </div>
  );
}

export default SearchBar;