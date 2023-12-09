import React from 'react'
import { useSelector } from 'react-redux'
import TableBody from '../features/TableBodySlice/TableBodyView'
function Table() {
  const user = useSelector((state)=> {
    return state.user
  });

  function selectAllRows(){
    const masterCheckbox = document.querySelector('.theading input[type="checkbox"]');
    const displayedRows = document.querySelectorAll('.trows input[type="checkbox"]');
    console.log(masterCheckbox, displayedRows);
    displayedRows.forEach((row)=>{
      row.checked = masterCheckbox.checked;
    })
    const checkedRows = document.querySelectorAll('.trows input[type="checkbox"]:checked');
    const pera = document.querySelector('.selected-result');
    pera.textContent = `${checkedRows.length} item(s) selected from ${user.users.length} item(s)`;
  }
  return (
    <table>
      {/* <Table header */}
      <thead className="theading">
        <tr>
          {/* Checkbox for selecting all rows */}
          <th><input type='checkbox' onChange={selectAllRows}/></th>
          {/* Column headers */}
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      {/* Table body */}
      <TableBody/>
      
    </table>
  )
}

export default Table