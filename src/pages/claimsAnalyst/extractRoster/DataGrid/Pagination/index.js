import React, { useEffect, useState } from 'react'
const LISTING_LIMIT = 10;
const Pagination = ({page, setPage, rows}) => {
    const [pageVal, setPageVal] = useState(page)
    const totalPage = Math.ceil(rows.length/LISTING_LIMIT);

    const handleInput = (e) => {
        const value = e.target.value;
        if(value ===""){
            setPageVal("");
            return 
        }
        if(value && parseInt(value)){
            if(parseInt(value) <= totalPage){
                setPage(parseInt(value))
            }
        }

    }

    useEffect(() => {
        setPageVal(page)
    }, [page])

  return (
    <>
        <div className="font-bold flex items-center space-x-2 border-r-2 border-gray-200 py-0 px-3">
          <p 
            onClick={() => {
                setPage(1)
          }} 
          className={`mb-0 cursor-pointer select-none  py-1 px-2 border-r-2 ${page-1 >= 1 ? "color-primary text-white" : "bg-gray-50"}`}>
           {"|<"}
          </p>
          <p 
          onClick={() => {
            if(page-1 >= 1){
                setPage(page-1)
            }
          }}

          className={`mb-0 cursor-pointer select-none  py-1 px-2 border-r-2 ${page-1 >= 1 ? "color-primary text-white" : "bg-gray-50"}`}>
           {"<"}
          </p>
          <p className="mb-0 p-0">
          Page
          </p>

          <div className="py-2">
          <input value={pageVal} type="text" className="e-input-sm" onChange={handleInput} />

          </div>
          <p className="mb-0 p-0 font-normal">
          of {totalPage}
          </p>
          <p onClick={() => {
            if(page+1 <= totalPage){
                setPage(page+1)
            }
          }} className={`mb-0 cursor-pointer select-none py-1 px-2 border-2  ${page+1 <= totalPage ? "color-primary text-white" : "bg-gray-50"}`}>
           {">"}
          </p>
          <p 
          onClick={() => {
                setPage(totalPage)
          }} 
          className={`mb-0 cursor-pointer select-none py-1 px-2 border-2  ${page+1 <= totalPage ? "color-primary text-white" : "bg-gray-50"}`}>
           {">|"}
          </p>
        </div>
    </>
  )
}

export default Pagination