import React from 'react'

const ExpanderView = ({data}) => {
  return (
    <div className="p-4 w-full" style={{height:"110px"}}>
      <p className="text-lg font-bold">Parameters</p>
      <div className="space-y-1">
      <div className="flex justify-between w-10/12 lg:w-6/12">
        <p>
          MTV Group Number
        </p>
        <p className='font-bold'>
          {data.id}
        </p>
      </div>
      <div className="flex justify-between w-10/12 lg:w-6/12">
        <p>
          File Layout
        </p>
        <p className='font-bold'>
          ADP
        </p>
      </div>
      </div>
    </div>
  )
}

export default ExpanderView