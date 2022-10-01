import React, {useState} from 'react'
import "./Extract.css";

import Popup from "./Popup";
import SearchLayout from './SearchLayout';

import {BiSearchAlt2} from "react-icons/bi";
import { useEffect } from 'react';

const Extract = () => {
    const [popup, setPopup] = useState(false)
    const [selected, setSelected] = useState("");
    
  return (
    <>
        <div className="extract-flex">
            <label htmlFor="extract-parameter"><strong>Extract Parameter</strong></label>
            <select className="select-box" name="extract-paramater" value="File Layout">
                <option value="File Layout">File Layout</option>
            </select>
        </div>
        <p className='file-layout'>File layout</p>
        <div className="extract-flex e-mt-1" onClick={() => setPopup(true)}>
            <label htmlFor="extract-parameter">File Layout</label>
            <div className='extract-search-field'>
                <input readOnly disabled type="text" value={selected ? selected.file_id : ""} />
                <div className="extract-icon-btn">
                    <BiSearchAlt2 />
                </div>
            </div>
        </div>

        {
            popup &&
                <Popup title="Search and result dialogue" width={"650px"} close={() => setPopup(false)}>
                    <p className="search-large">
                        Search
                    </p>
                    <div className='search-flex'>
                        <label htmlFor="file-id-search" className='label-bold e-mr-1'>File layout id</label>
                        <input type="text" className='e-input' />
                    </div>
                    <div className='search-flex'>
                        <label htmlFor="file-description-search" className='label-bold e-mr-1'>File layout description</label>
                        <input type="text" className='e-input' name="file-description-search" />
                    </div>

                    <div className="search-flex">
                        <button className='color-primary py-2 px-4 font-bold text-white rounded-md shadow-md mr-4'>
                            Search
                        </button>
                        <button className='color-primary py-2 px-4 font-bold text-white rounded-md shadow-md mr-4'>
                            Reset
                        </button>
                    </div>
                    <div className="e-mb-1"></div>
                    <SearchLayout selected={selected} setSelected={setSelected}close={() => setPopup(false)}/>
                </Popup>
        }
    </>
  )
}

export default Extract