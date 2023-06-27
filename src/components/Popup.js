import React  from 'react'

export default function Popup({content, handleClose, file}) {


  return (
    <div >
        <div className="popup-box" >
            <textarea></textarea>
            <button className='pop-close' onClick={handleClose}>
                Close
            </button>
        </div>
    </div>
  )
}
