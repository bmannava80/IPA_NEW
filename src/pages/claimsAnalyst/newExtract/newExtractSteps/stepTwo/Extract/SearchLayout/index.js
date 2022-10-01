import React from 'react'
import data from "./data.json"
import Row from './Row'

const SearchLayout = ({selected, setSelected, close}) => {

  return (
    <>

    <div className='extract-grid'>
      <div className="extract-grid-child">
        <p className="e-font-bold">
          File Layout ID
        </p>
      </div>
      <div className="extract-grid-child">
        <p className="e-font-bold">
          File Layout Description
        </p>
      </div>
    </div>
    {
      data.map((item,index) => (
        <Row selected={selected} close={close} setSelected={setSelected} key={index} item={item} />
      ))
    }
    </>
  )
}

export default SearchLayout