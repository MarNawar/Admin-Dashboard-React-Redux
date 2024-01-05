import React from 'react'
import { useDispatch } from 'react-redux';
import { paginationActions } from './PaginationSlice';

function PaginationDropdownForRowPerPage() {
  const dispatch = useDispatch()

  return (
    <span className='row-per-page'>
     <label htmlFor="pet-select">Rows per Page: </label>
      <select name="Rows" id="row-select" onChange={(e)=>{
        e.preventDefault();dispatch(paginationActions.setRowPerPage(+e.target.value))}}>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </span>
  )
}

export default PaginationDropdownForRowPerPage