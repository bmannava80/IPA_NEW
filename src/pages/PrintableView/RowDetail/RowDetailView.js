import React from 'react'
import { GrDocumentPdf } from 'react-icons/gr'
const RowDetailView = ({rowDetail, setRowDetail}) => {
  return (
    <>
        <div className="mb-8 flex items-center space-x-4">
            <p className='text-lg'>Extract {rowDetail.id}</p>
            <div className="cursor-pointer  font-bold flex items-center space-x-2 ">
                <p className="text-color-primary">
                Printable View
                </p>
                <GrDocumentPdf className="text-color-primary text-xl" />
            </div>
        </div>
        <div className="space-y-4">
            <div className="flex space-x-8 text-sm">
                <div className="w-36 text-right">
                    <p className="font-bold">Extract ID</p>
                </div>
                <p>{rowDetail.id}</p>
            </div>
            <div className="flex space-x-8 text-sm">
                <div className="w-36 text-right">
                    <p className="font-bold">Extract Description</p>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, odio!</p>
            </div>
            <div className="flex space-x-8 text-sm">
                <div className="w-36 text-right">
                    <p className="font-bold">Interface ID</p>
                </div>
                <p>{rowDetail.id}</p>
            </div>
        </div>
        <div className="border-b-2 border-gray-200 h-4 w-full">

        </div>
        <p className="font-bold text-color-primary cursor-pointer">
            [Show Parameters]
        </p>
        <div className="flex items-center mt-4">
            <button onClick={() => setRowDetail(false)} className='text-sm color-primary py-2 px-4 font-bold text-white rounded-md shadow-md mr-4' type="button">
                Cancel
            </button>
        </div>
    </>
  )
}

export default RowDetailView