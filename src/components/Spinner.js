import React from 'react'
import LoadingIcon from './LoadingIcon.gif'

const Spinner =()=> {
  return (
    <div className='container text-center '>
        <img  className="w-25 h-25" src={LoadingIcon} alt="Loading" />
    </div>
  )
}
export default Spinner