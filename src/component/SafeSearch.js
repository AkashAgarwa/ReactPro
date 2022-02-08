import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useState, useEffect ,useMemo} from 'react';
import {searchitem} from '../Action'
import Input from './Input';
import './SafeSearch.css'
function SafeSearch() {
  
const [searchTerm,setSearchTerm]=useState("");
const data=useSelector(state=>state.safe) 
const mystyle={height:"100%",
     backgroundColor: "#20232e" ,
      border: "0px" ,
      color:"#5e627c" ,
      outline:"0px"
    }
const dispatch=useDispatch();
    const handleOnChange=(e)=>
    {
      setSearchTerm(e.target.value);
dispatch(searchitem(e.target.value));
    }

       return (  <>
    
    <div className="topBarAvailaibleSafe">
<span>All Safes{`(${data.length})`}</span>
<div className='searchGroup'>
  <input type="text" placeholder='Search' value={searchTerm} onChange={handleOnChange}/>
</div>
    </div>
    </>);
}

export default SafeSearch;