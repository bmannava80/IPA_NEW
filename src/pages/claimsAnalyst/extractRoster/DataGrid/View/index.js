import React, { useEffect, useRef, useState } from 'react'
import {AiFillCaretDown, AiFillCaretRight} from "react-icons/ai";
import { useDetectClickOutside } from 'react-detect-click-outside';

import HideColumn from '../HideColumn';
import Detach from './Detach';
import AdvancedSorting from './AdvancedSorting';
import QueryByExample from './QueryByExample';
import Reorder from './Reorder';


const View = ({ setReorder, gridRef, advancedSort, setAdvancedSort, detach, setDetach, columns, setColumns }) => {
    const viewRef = useRef(null);
    const [dropdown, setDropdown] = useState({open: false, x: 0, y: 0})
    // close calender if clicked outside calender
    const outsideRef = useDetectClickOutside({ onTriggered: () => setDropdown(old => ({...old, open: false})) });
    
    useEffect(() => {
        window.addEventListener('resize', () => {
            const rect = viewRef.current.getBoundingClientRect(); 
            setDropdown(old => ({open: old.open, x: rect.left, y:rect.bottom}))
        })
    }, [])

    const handleOpen =() =>{
        const rect = viewRef.current.getBoundingClientRect(); 
        setDropdown({open: true, x: rect.left, y:rect.bottom})
    }

    return (
        <>
        <div ref={outsideRef} className={`my-0 z-100 cursor-pointer font-bold  border-r-2 relative flex items-center justify-center ${dropdown.open ? "color-primary" : "border-gray-200"}`}>

            <div ref={viewRef} className="py-0 px-3">
                <div onClick={handleOpen} className={`flex h-full items-center space-x-2 text-sm ${dropdown.open ? "text-white" : ""}`}>
                    <p className='p-0 m-0'>
                        View
                    </p>
                    <AiFillCaretDown />
                </div>
                {
                    dropdown.open &&
                    <div className="shadow-lg fixed dropdown-z h-24 bg-white border-2 border-gray-200 left-0 bottom-0 transform" style={{top: dropdown.y + 10, left: dropdown.x - 2}}>
                        
                        <div className="group relative flex items-center justify-between py-2 px-2 border-b-2 border-gray-200 hover:bg-gray-200 bg-white">
                            <p className='mb-0 ml-1 mr-16 text-sm font-normal'>
                                Columns
                            </p>
                            <AiFillCaretRight/>
                            <HideColumn setDropdown={setDropdown} columns={columns} setColumns={setColumns} />
                        </div>
                        
                        <Detach setDropdown={setDropdown} detach={detach} setDetach={setDetach} />
                        <AdvancedSorting columns={columns} setDropdown={setDropdown} advancedSort={advancedSort} setAdvancedSort={setAdvancedSort} />
                        <QueryByExample gridRef={gridRef} setDropdown={setDropdown}/>
                        <Reorder setReorder={setReorder}/>

                    </div>
                }
            </div>
        </div>
        </>
    )
}

export default View