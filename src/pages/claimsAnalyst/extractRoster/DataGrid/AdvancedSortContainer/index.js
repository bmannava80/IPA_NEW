import React from 'react'
import _ from "lodash";
import { FaTimes } from "react-icons/fa";

const AdvancedSortContainer = ({ columns, advancedSort, setAdvancedSort }) => {
    const columns_filter = columns.filter(item => item.name)
    const close = () => {
        setAdvancedSort(old => {
            let copy = _.cloneDeep(old);
            copy.visible = false;
            return copy
        })
    }

    const handleFilterSelect = (value, index) => {
        setAdvancedSort(old => {
            const copy = _.cloneDeep(old);
            copy.filters[index].sort = value;
            
            //hiding column sort if value exists
            let count =0;
            copy.filters.map(item => {
                if(item.sort){
                    count += 1
                }
            })
            if(count > 0){
                copy.hideColumnSort = true;
            } else{
                copy.hideColumnSort = true;
            }
            //hiding column sort if value exists

            return copy
        })
    }
    const handleDirection = (value, index) => {
        setAdvancedSort(old => {
            const copy = _.cloneDeep(old);
            copy.filters[index].direction = value;
            return copy
        })
    }
    
    const applyFilters = () => {
        setAdvancedSort(old => {
            const copy = _.cloneDeep(old);
            copy.applied = true;
            copy.visible = false;
            return copy
        })
    }
    const cancelFilters = () => {
        setAdvancedSort(old => {
            const copy = _.cloneDeep(old);
            copy.applied = false;
            copy.visible = false;
            copy.filters = copy.filters.map(item => {
                item.sort = "";
                return item
            })
            return copy
        })
    }

    return (
        <>
            <div className='e-popup-container-bg' style={{ zIndex: 200000 }} onClick={cancelFilters}>

            </div>

            <div className={"animation-in e-popup-container"} style={{ zIndex: 200001 }}>
                <div className="bg-white w-11/12 lg:w-6/12 shadow-lg">
                    <div className={"flex justify-between p-4 bg-gray-100"}>
                        <p className="font-medium p-0">
                            Advanced Sort
                        </p>
                        <FaTimes className="e-icon" onClick={close} />
                    </div>
                    <div className={"e-popup-body w-full overflow-x-auto"}>

                        {
                            advancedSort.filters.map((filter, index) => (
                                <>
                                    <div key={index} className="mb-4 flex items-center justify-around">
                                        <div>
                                            <label className="block font-bold" htmlFor={`sort-${index}`}>
                                                {index === 0 ? "Sort By" : "Then by"}
                                            </label>
                                            <select onChange={(e) => handleFilterSelect(e.target.value, index)} className="border-2 border-gray-800 py-2 px-4 w-52" name={`sort-${index}`} value={advancedSort.filters[index].sort}>
                                                <option value={""}>

                                                </option>
                                                {columns_filter.map((item, i) => (
                                                    <option key={i} value={item.key}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='space-y-1'>
                                        <div className='flex items-center space-x-4'>
                                            <input onClick={() => handleDirection("ASC", index)} type="radio" name={`direction-${index}-1`} checked={advancedSort.filters[index].direction === "ASC"}/>
                                            <label className="block" htmlFor={`direction-${index}-1`}>
                                                Ascending
                                            </label>
                                        </div>
                                        <div className='flex items-center space-x-4'>
                                            <input onClick={() => handleDirection("DESC", index)} type="radio" name={`direction-${index}-2`} checked={advancedSort.filters[index].direction === "DESC"}/>
                                            <label className="block" htmlFor={`direction-${index}-2`}>
                                                Descending
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                        <div className="flex justify-end items-center mt-4">
                            <button onClick={applyFilters} type="button" className='color-primary py-2 px-4 font-bold text-white rounded-md shadow-md mr-4'>
                                OK
                            </button>
                            <button onClick={cancelFilters} type="button" className='bg-white py-2 px-4 font-bold text-black rounded-md shadow-md mr-4'>
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