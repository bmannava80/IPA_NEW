import React, { useState } from 'react'
import {AiOutlineCheck} from "react-icons/ai";
import {BiCheckbox} from "react-icons/bi";
import _ from 'lodash';
const HideColumn = ({ columns, setColumns, setDropdown }) => {
    const [popup, setPopup] = useState(false);
    const handleHide = (index) => {
        setColumns(old => {
            // const json_old = JSON.stringify(old);
            // let copy = JSON.parse(json_old);
            let copy = _.cloneDeep(old)
            let el = copy[index]
            if(el.width === -1){
                copy[index].width = 200; 
            }else{
                copy[index].width = -1; 
            }
            return copy;
        })
        setDropdown(old => ({...old, open: false}))
    }
    const showAll = (index) => {
        setColumns(old => {
            let copy = _.cloneDeep(old)
            copy = copy.map((item, index) => {
                if(item.name){
                    item.width = 200
                }
                return item
            })
            return copy;
        })
        setDropdown(old => ({...old, open: false}))
    }
    return (
        <>
            <div className="group-hover:block hidden absolute w-44 bg-white border-2 border-gray-200 right-0 top-0 transform translate-x-full">
                    
                                <div onClick={showAll} className="relative flex items-center py-2 px-10 hover:bg-gray-200 bg-white">
                                    <p className="mb-0 text-xs font-normal">Show All</p>
                                </div>
                    {
                        columns.map((item, index) => (
                            item.name &&
                            <>
                                <div onClick={() => handleHide(index)} className="relative flex items-center py-2 px-2  hover:bg-gray-200 bg-white">
                                    {item.width === -1 ? 
                                    <BiCheckbox className='flex-shrink-0 text-gray-500'/>
                                    :
                                    <AiOutlineCheck className='flex-shrink-0 text-color-primary'/>

                                    }
                                    <p className='mb-0 text-xs font-normal ml-4'>
                                        {item.name}
                                    </p>
                                </div>
                            </>
                        ))
                    }
            </div>
        </>
    )
}

export default HideColumn
