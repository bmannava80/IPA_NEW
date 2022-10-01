import React from 'react'
import {AiOutlineSortDescending} from "react-icons/ai";
import _ from "lodash";

const AdvancedSorting = ({setAdvancedSort}) => {
  return (
    <div onClick={() => {
        setAdvancedSort(old => {
            let copy = _.cloneDeep(old);
            copy.visible = true;
            return copy
        })
    }} className="group relative flex items-center justify-between py-2 px-2 border-b-2 border-gray-200 hover:bg-gray-200 bg-white">
        <p className='mb-0 ml-1 mr-16 text-sm font-normal'>
            Advanced Sorting
        </p>
        <AiOutlineSortDescending/>
        </div>
  )
}

export default AdvancedSorting