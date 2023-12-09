import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { paginationActions } from './PaginationSlice';

function UpdatePaginationButtons() {
  const [ind, setInd] = useState(0);
  const [total, setTotal]= useState(0);

  const pagination = useSelector((state)=> {
    return state.pagination
  });

  const user = useSelector((state)=>{
    return state.user
  });

  useEffect(()=>{
    setInd(Math.ceil((pagination.ind + 1) / pagination.rowsPerPage))
    setTotal(Math.ceil(user.users.length / pagination.rowsPerPage));

  },[user, pagination])

  console.log(pagination, user.users.length);


  const dispatch = useDispatch()
  
  const fBtn = Math.floor(ind / (pagination.rowsPerPage + 1)) * (pagination.rowsPerPage) + 1;
  const lBtn = Math.min(Math.floor(ind / (pagination.rowsPerPage + 1)) * (pagination.rowsPerPage) + (pagination.rowsPerPage), total);

  const arr = new Array(lBtn-fBtn+1).fill(0);

  console.log('ggg',arr, fBtn, lBtn,user);
  return (
      <span className="numberButton">
        {
        arr.map((_,i)=>{
          const mapIndex =i;

        return <button key={i+fBtn} className="btn-pagination" onClick={()=>{
            const newIndex = Number(fBtn-1 + mapIndex * pagination.rowsPerPage);
            dispatch(paginationActions.indexSet(newIndex));
          }}>
          {i+fBtn}
        </button>
        })
      }
      </span>
  )
}

export default UpdatePaginationButtons