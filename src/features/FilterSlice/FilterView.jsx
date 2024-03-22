import {useState} from 'react'
// import React from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../user/userSlice'
import useDebounce from '../../customHooks/useDebounce';

function FilterView() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const debouncedSearch = useDebounce((val)=>{ 
    dispatch(userActions.search(val));
    }, 300);

  return (
    <input
      type="text"
      className="form-input-filter search-icon"
      id="filter"
      placeholder="Search Items"
      autoComplete="off"
      value={text}
      onChange={(e)=>{
        debouncedSearch(e.target.value)
        setText(e.target.value)
      }
      }
    />
  )
}


export default FilterView
