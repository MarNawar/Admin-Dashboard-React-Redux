import React from 'react'
import PaginationView from '../features/PaginationSlice/PaginationView.jsx'

function PaginationContainer() {
  
  return (
    <>
    <div className="pagination-results-update">
    <div id="selected-results">
      <p class="selected-result">0 item(s) selected from 0 item(s)</p>
    </div>      
    <div id="updatePaginationContainer">
        <PaginationView/>
      </div>
    </div>

    </>
  )
}

export default PaginationContainer