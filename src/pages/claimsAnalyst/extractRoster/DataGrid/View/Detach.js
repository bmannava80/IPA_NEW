import React from 'react'
import {AiOutlineFullscreenExit, AiOutlineFullscreen} from "react-icons/ai";
const Detach = ({detach, setDetach, setDropdown}) => {
  return (
    <div onClick={() => {
        setDetach(old => !old)
        setDropdown(old => ({...old, open:false}))
    }} className="group relative flex items-center justify-between py-2 px-2 border-b-2 border-gray-200 hover:bg-gray-200 bg-white">
        <p className='my-0 p-0 ml-1 mr-16 text-sm font-normal'>
            Detach
        </p>
        {detach ?
            <AiOutlineFullscreenExit />
            :
            <AiOutlineFullscreen />
        }
        </div>
  )
}

export default Detach