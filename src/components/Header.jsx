import React from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../features/user/userSlice'
import FilterView from '../features/FilterSlice/FilterView'

function Header() {
  const dispatch = useDispatch()


  function deleteAllRows(){
    const checkedRows = document.querySelectorAll('.trows input[type="checkbox"]:checked');
    const masterCheckbox = document.querySelector('.theading input[type="checkbox"]');
    masterCheckbox.checked = false;


    console.log(checkedRows[0].id, masterCheckbox);
    checkedRows.forEach((row)=>{
      dispatch(userActions.delete(row.id))
    })

  }
  return (
    <div className="actions_container">
    {/* Search input field */}
      <FilterView/>
      {/* Button to delete all selected rows */}
      <button onClick={deleteAllRows}>X
        {/* Icon for delete action */}
        {/* <i className="fa-regular fa-trash-can" style="color: #FFF; background-color: #FF7F7F;"></i> */}
      </button>
  </div>
  )
}

export default Header