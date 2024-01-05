import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { paginationActions } from './PaginationSlice'
import UpdatePaginationButtons from './UpdatePaginationButtons';
import PaginationDropdownForRowPerPage from './PaginationDropdownForRowPerPage';

function PaginationView() {
  const pagination = useSelector((state)=> {
    return state.pagination
  });

  const user = useSelector((state)=>{
    return state.user
  });

  const dispatch = useDispatch()

  useEffect(()=>{
    if(pagination.ind >= user.users.length && pagination.ind - pagination.rowsPerPage >= 0)
      dispatch(paginationActions.indexSet(Math.floor((user.users.length-1)/pagination.rowsPerPage)*pagination.rowsPerPage));
  },[user.users]);


  return <>
  <div className="updatePaginationContainer">
    <PaginationDropdownForRowPerPage/>

    <span style={{fontSize:'14px', margin:'0 20px'}}>{user.users.length ? Math.ceil((pagination.ind + 1) / pagination.rowsPerPage) : 0} Page of {Math.ceil(user.users.length / pagination.rowsPerPage)}</span>

    <button className="btn-pagination"  onClick={()=>{
      dispatch(paginationActions.indexFirst());
    }}  disabled={pagination.ind===0?true:false}>
      <i className="fa-solid fa-angles-left"></i>
    </button>

    <button className="btn-pagination" onClick={()=>{
      dispatch(paginationActions.indexDec());
    }} disabled={pagination.ind===0?true:false}>
      <i className="fa-solid fa-angle-left"></i>
    </button>
    
    <UpdatePaginationButtons/>

    <button className="btn-pagination"  onClick={()=>{
      dispatch(paginationActions.indexInc());
    }} disabled={pagination.ind===(Math.floor(Math.abs((user.users.length-1)/pagination.rowsPerPage))*pagination.rowsPerPage)?true:false}>
      <i className="fa-solid fa-angle-right"></i>
    </button>
    
    <button className="btn-pagination" onClick={()=>{
      dispatch(paginationActions.indexLast((Math.floor(Math.abs((user.users.length-1)/pagination.rowsPerPage))*pagination.rowsPerPage)));
    }} disabled={pagination.ind===(Math.floor(Math.abs((user.users.length-1)/pagination.rowsPerPage))*pagination.rowsPerPage)?true:false}>
      <i className="fa-solid fa-angles-right"></i>
    </button>
    
    </div>
    </>

}

export default PaginationView



