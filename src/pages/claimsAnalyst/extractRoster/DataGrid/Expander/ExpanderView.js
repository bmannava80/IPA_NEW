import React from 'react'

const ExpanderView = ({data}) => {
  return (
    <div className="p-4 w-full" style={{height:"110px"}}>
      <p className="text-lg font-bold">Parameters</p>
      <div className="space-y-1">
      <div className="flex justify-between w-10/12 lg:w-6/12">
        <p className='p-0'>
          MTV Group Number
        </p>
        <p className='p-0 font-bold'>
          {data.id}
        </p>
      </div>
      <div className="flex justify-between w-10/12 lg:w-6/12">
        <p className='p-0'>
          File Layout
        </p>
        <p className='p-0 font-bold'>
          ADP
        </p>
      </div>
      </div>
    </div>
  )
}

export default ExpanderView