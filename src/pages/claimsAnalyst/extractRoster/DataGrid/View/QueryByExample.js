import React from 'react'
import {AiOutlineCheck} from "react-icons/ai";
const QueryByExample = ({gridRef,setDropdown}) => {
  return (
    <div 
        onClick={() => {
            gridRef.current.onToggleFilter()
            setDropdown(old => ({...old, open:false}))
        }}
    className="group relative flex items-center justify-between py-2 px-2 border-b-2 border-gray-200 hover:bg-gray-200 bg-white">
        <p className='mb-0 ml-1 mr-16 text-sm font-normal'>
            Query By Example
        </p>
            {gridRef.current ? gridRef.current.state.canFilter ? <AiOutlineCheck className='text-color-primary' /> : null : null}
        </div>
  )
}

export default QueryByExample