import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchUsers} from '../user/userSlice'
import { userActions } from '../user/userSlice'

function TableBody() {
  const [users, setUsers] = useState([])
  const [tobeUpdated, setTobeUpdated] = useState([]);

  const user = useSelector((state)=> {
    return state.user
  });

  const pagination = useSelector((state)=> {
    return state.pagination
  });

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])

  useEffect(()=>{
    setUsers(user.users);
  },[user])

  function editRow(e, id){
    setTobeUpdated((prev)=>{
      if(prev.includes(id))return [...prev];
      else return [...prev,id];
    })
  }

  function updateRow(e,id){
    setTobeUpdated((prev)=>{
      return prev.filter(val=>val!==id);
    })

    const obj = {
      id,
      name: e.target.parentElement.parentElement.children[1].children[0].value,
      email: e.target.parentElement.parentElement.children[2].children[0].value,
      role: e.target.parentElement.parentElement.children[3].children[0].value,
    }

    dispatch(userActions.update(obj));

  }

  function updateHeaderCheckBox(){
    const checkedRows = document.querySelectorAll('.trows input[type="checkbox"]:checked');
    const masterCheckbox = document.querySelector('.theading input[type="checkbox"]');
    const displayedRows = document.querySelectorAll('.trows input[type="checkbox"]');
    if(displayedRows.length === checkedRows.length){
      masterCheckbox.checked = true;
    }
    else{
      masterCheckbox.checked = false;
    }
    // document.querySelector('selected-result').innerHTML = `${checkedRows.length} item(s) selected from ${users.length} item(s)`
  }

  return (
    <tbody className="trows">
      { users.filter((_,index)=>{
        if(index>=pagination.ind&&index<pagination.ind+pagination.rowsPerPage){
          return true;
        }
      }).map((element)=>{
            return (
              (tobeUpdated.includes(element.id))?
            <tr key ={element.id}>
              {/* Checkbox for row selection */}
              <td><input type='checkbox' id={element.id} onChange={updateHeaderCheckBox}/></td>
              {/* Display user information */}
              <td>  <input type='text' value={element.name} onChange={(e) => {
                  // Update the name property of the user object
                  const updatedUsers = users.map((user) =>
                    user.id === element.id ? { ...user, name: e.target.value } : user
                  );
                  setUsers(updatedUsers);
                }}/>  
              </td>
              <td>  <input type='email' value={element.email} onChange={(e) => {
                  // Update the email property of the user object
                  const updatedUsers = users.map((user) =>
                    user.id === element.id ? { ...user, email: e.target.value } : user
                  );
                  setUsers(updatedUsers);
                }}/>  
              </td>
              <td>  <input type='text' value={element.role} onChange={(e) => {
                  // Update the role property of the user object
                  const updatedUsers = users.map((user) =>
                    user.id === element.id ? { ...user, role: e.target.value } : user
                  );
                  setUsers(updatedUsers);
                }}/>  
              </td>

              {/* Buttons for editing and deleting rows */}
              <td>
                <button className="edit" onClick={(e)=>{updateRow(e,element.id )}}>
                  <i class="fa-solid fa-check" style={{color: "#36383a;"}}></i>
                </button>
                <button className="delete" onClick={()=>dispatch(userActions.delete(element.id))}>
                  <i className="fa-solid fa-trash" style={{color: "#FF7F7F;"}}></i>
                </button>
              </td>
            </tr>:
            <tr key ={element.id}>
            {/* Checkbox for row selection */}
            <td><input type='checkbox' id={element.id} onChange={updateHeaderCheckBox}/></td>
            {/* Display user information */}
            <td>{element.name}</td>
            <td>{element.email}</td>
            <td>{element.role}</td>
            {/* Buttons for editing and deleting rows */}
            <td>
              <button className="edit" onClick={(e)=>{editRow(e,element.id )}}>
                <i className="fa-regular fa-pen-to-square" style={{color: "#36383a;"}}></i>
              </button>
              <button className="delete" onClick={()=>dispatch(userActions.delete(element.id))}>
                <i className="fa-solid fa-trash" style={{color: "#FF7F7F"}}></i>
              </button>
            </td>
          </tr>
          )
        })
      }
    </tbody>  
  )
}

export default TableBody