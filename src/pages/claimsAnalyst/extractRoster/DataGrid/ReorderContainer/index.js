import React from 'react'
import _ from "lodash";
import { FaTimes, FaAngleDoubleUp, FaAngleDoubleDown, FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useState } from 'react';

const AdvancedSortContainer = ({setHide, setColumns, columns, setReorder}) => {
    const [localColumns, setLocalColumns] = useState(_.cloneDeep(columns));
    const [selected, setSelected] = useState({name: "", index: ""});
    const close = () => setReorder(false)

    const handleSelect = (name, index) => {
        if(selected.name === name){
            setSelected(false);
        } else{
            setSelected({
                name,
                index
            })
        }
    }

    const moveItem = (from, to, data) => {
        // remove `from` item and store it
        var f = data.splice(from, 1)[0];
        // insert stored item into position `to`
        data.splice(to, 0, f);
        return data;
      }

    const handleUp= () => {
        if(!selected.name){
            return
        }
        setLocalColumns(old => {
            let copy = _.cloneDeep(old);
            moveItem(selected.index, (selected.index-1 === 0 ? selected.index : selected.index-1),  copy);
            const find = copy.findIndex(item => item.name === selected.name);
            setSelected(old => ({...old, index: find}))
            return copy
        })

    }
    const handleFirst = () => {
        if(!selected.name){
            return
        }
        setLocalColumns(old => {
            let copy = _.cloneDeep(old);
            moveItem(selected.index, 1, copy);
            const find = copy.findIndex(item => item.name === selected.name);
            setSelected(old => ({...old, index: find}))
            return copy
        })
    }
    const handleDown= () => {
        if(!selected.name){
            return
        }
        setLocalColumns(old => {
            let copy = _.cloneDeep(old);
            moveItem(selected.index, (selected.index+1 <= copy.length-1 ? selected.index+1 : selected.index),  copy);
            const find = copy.findIndex(item => item.name === selected.name);
            setSelected(old => ({...old, index: find}))
            return copy
        })
        
    }
        const handleLast= () => {
            if(!selected.name){
            return
        }
        setLocalColumns(old => {
            let copy = _.cloneDeep(old);
            moveItem(selected.index, copy.length -1, copy);
            const find = copy.findIndex(item => item.name === selected.name);
            setSelected(old => ({...old, index: find}))
            return copy
        })
    }

    const setCoulmnsOrder = () => {
        setColumns(old => {
            const copy =_.cloneDeep(localColumns);
            return copy
        })

        setHide(false)
        setReorder(false);
    }

    return (
        <>
            <div className='e-popup-container-bg' style={{ zIndex: 200000 }}>

            </div>

            <div className={"animation-in e-popup-container"} style={{ zIndex: 200001 }}>
                <div className="bg-white w-11/12 lg:w-6/12 shadow-lg">
                    <div className={"flex justify-between p-4 bg-gray-100"}>
                        <p className="font-medium">
                            Reorder Columns
                        </p>
                        <FaTimes className="e-icon" onClick={close} />
                    </div>
                    <div className={"e-popup-body w-full overflow-x-auto"}>

                        <div className="border-2 border-gray-100 flex max-w-[290px]">
                            <div className="flex-grow border-r-2 border-gray-100 h-44 overflow-y-auto">
                                {
                                    localColumns.map((col, index) => (
                                        col.name &&
                                        <p key={index} className={`py-1 px-2 cusror-pointer  ${selected.name === col.name ? "color-primary text-white" : "hover:bg-gray-100"}`} onClick={() => handleSelect(col.name, index)}>
                                            {
                                                col.name
                                            }
                                        </p>
                                        
                                    ))
                                }
                            </div>
                            <div className="flex-shrink-0 w-12 flex flex-col justify-center items-center space-y-2">
                                <p
                                    className={`select-none p-2 ${selected.name ? "cursor-pointer color-primary text-white" : "text-gray-600"}`}
                                    onClick={handleFirst}
                                >
                                    <FaAngleDoubleUp/>
                                </p>
                                <p
                                    className={`select-none p-2 ${selected.name ? "cursor-pointer color-primary text-white" : "text-gray-600"}`}
                                    onClick={handleUp}
                                >
                                    <FaAngleUp/>
                                </p>
                                <p
                                    className={`select-none p-2 ${selected.name ? "cursor-pointer color-primary text-white" : "text-gray-600"}`}
                                    onClick={handleDown}
                                >
                                    <FaAngleDown/>
                                </p>
                                <p
                                    className={`select-none p-2 ${selected.name ? "cursor-pointer color-primary text-white" : "text-gray-600"}`}
                                    onClick={handleLast}
                                >
                                    <FaAngleDoubleDown/>
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex justify-end items-center mt-4">
                            <button onClick={setCoulmnsOrder} type="button" className='color-primary py-2 px-4 font-bold text-white rounded-md shadow-md mr-4'>
                                OK
                            </button>
                            <button onClick={close} type="button" className='bg-white py-2 px-4 font-bold text-black rounded-md shadow-md mr-4'>
                                Cancel
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AdvancedSortContainer