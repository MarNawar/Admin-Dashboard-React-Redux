import React from 'react'
import PaginationView from '../features/PaginationSlice/PaginationView.jsx'

function PaginationContainer() {
  return (
    <>
    <div className="pagination-results-update">
      <div>PaginationContainer</div>
      <div id="updatePaginationContainer">
        <PaginationView/>
      </div>
    </div>

    </>
  )
}

export default PaginationContainer