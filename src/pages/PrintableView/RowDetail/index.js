import React from 'react'

const RowDetail = (props) => {
    return(
        <p className='underline text-blue-700 cursor-pointer' onClick={() => {
          props.dependentValues.setRowDetail(props.row)
        }}>
          {props.row.id}
        </p>
      )
}

export default RowDetail