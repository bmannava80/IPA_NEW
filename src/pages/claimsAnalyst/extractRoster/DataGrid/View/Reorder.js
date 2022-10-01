import React from 'react'
import {AiOutlineSortDescending} from "react-icons/ai";

const Reorder = ({setReorder}) => {
  return (
    <div onClick={() => {
        setReorder(true)
    }} className="group relative flex items-center justify-between py-2 px-2 border-b-2 border-gray-200 hover:bg-gray-200 bg-white">
        <p className='mb-0 ml-1 mr-16 text-sm font-normal'>
            Reorder Columns
        </p>
        <AiOutlineSortDescending/>
        </div>
  )
}

export default Reorder