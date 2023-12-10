import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userActions } from '../features/user/userSlice'
import FilterView from '../features/FilterSlice/FilterView'

function Header() {
  const pagination = useSelector((state)=> {
    return state.pagination
  });

  const dispatch = useDispatch()

  useEffect(()=>{
    const masterCheckbox = document.querySelector('.theading input[type="checkbox"]');
    masterCheckbox.checked = false;
  },[pagination.ind])


  function deleteAllRows(){
    const checkedRows = document.querySelectorAll('.trows input[type="checkbox"]:checked');
    const masterCheckbox = document.querySelector('.theading input[type="checkbox"]');
    masterCheckbox.checked = false;
    checkedRows.forEach((row)=>{
      dispatch(userActions.delete(row.id))
    })
  }
  return (
    <div className="actions_container">
    {/* Search input field */}
      <FilterView/>
      {/* Button to delete all selected rows */}
      <button onClick={deleteAllRows}>
        {/* Icon for delete action */}
        <i className="fa-regular fa-trash-can" style={{color: "#FFF", backgroundColor: "#FF7F7F"}}></i>
      </button>
  </div>
  )
}

export default Header