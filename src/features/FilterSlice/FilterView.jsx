import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../user/userSlice'

function FilterView() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  return (
    <input
      type="text"
      className="form-input-filter search-icon"
      id="filter"
      placeholder="Search Items"
      value={text}
      onChange={(e)=>{ 
        dispatch(userActions.search(e.target.value));
        setText(e.target.value)}}
    />
  )
}


export default FilterView
