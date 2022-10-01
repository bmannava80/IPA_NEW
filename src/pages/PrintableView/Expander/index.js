import React from 'react'
import {AiFillCaretDown, AiFillCaretRight} from "react-icons/ai";

const Expander = (props) => {
  return (
    <>

    <p className='underline text-blue-700 cursor-pointer' onClick={() => {
          props.dependentValues.setRows(old => {
            const copy = JSON.parse(JSON.stringify(old));
            const index = copy.findIndex(item => item.id === props.row.id);
            copy[index]= { ...copy[index], expanded: copy[index].expanded === 1 ? -1 : 1 }
            return copy
          })
        }}>
          {props.row.expanded === 1 ? <AiFillCaretDown/> : <AiFillCaretRight/>}
    </p>
    </>
   
  )
}

export default Expander