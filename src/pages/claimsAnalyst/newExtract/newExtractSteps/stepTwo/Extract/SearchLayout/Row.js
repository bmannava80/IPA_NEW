import React from 'react'

const Row = ({selected, item, setSelected, close}) => {
  return (
    <div className={`extract-grid ${item === selected ? "extract-grid-row-selected" : "extract-grid-row"}`} onClick={() => {
        if(selected=== item){
            return null
        } else{
            setSelected(item)
            close()
        }
    }}>
      <div className="extract-grid-child">
        <p className="e-font-normal">
          {item.file_id}
        </p>
      </div>
      <div className="extract-grid-child">
        <p className="e-font-normal">
          {item.file_description}
        </p>
      </div>
    </div>
  )
}

export default Row