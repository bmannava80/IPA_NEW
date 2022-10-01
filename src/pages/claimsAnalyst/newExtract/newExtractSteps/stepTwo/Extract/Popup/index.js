import React from 'react'
import {FaTimes} from "react-icons/fa";

const Popup = ({ children, close, width, title }) => {
    return (
        <>
            <div className='e-popup-container-bg' onClick={close}>

            </div>
            <div className='animation-in e-popup-container'>
                <div className="e-popup"  style={{maxWidth: width}}>
                    
                    <div className="e-popup-close e-mb-1">
                    <div className="e-popup-title">
                        {title}
                    </div>
                        <FaTimes className="e-icon" onClick={close}/>
                    </div>
                    <div className="e-popup-body">
                    {children}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Popup