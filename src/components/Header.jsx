import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import { BsPersonXFill } from "react-icons/bs"
import DeleteModal from './DeleteModal'

function Header() { 

  const [ toggleModal, setToggleModal] = useState(false)

  return (
    <header>
      {toggleModal &&
        <div className='h-screen w-screen backdrop-blur-sm fixed z-10 flex justify-center items-center top-0 left-0'>
          <DeleteModal
            toggleModal={setToggleModal}
          />
        </div>
      }
      <div className='pb-6 flex justify-between items-center'>
        <p className='text-xl '>Welcome, <span className='text-xl underline text-orange-400'>{localStorage.getItem('userName')}</span>!</p>
        <button
          onClick={() => setToggleModal(true)}
        >
          <BsPersonXFill className='text-2xl'/>
        </button>
      </div>
      <div className='w-full'>          
          <div className='p-3 border-2 rounded-md bg-slate-800 border-slate-500 w-full'>
            <Link to='/create'>
              <div className='w-full text-left p-2 border-2 rounded-md bg-slate-700 hover:bg-slate-600 border-slate-500'>
                Create Post
              </div>
            </Link>
          </div>   
      </div>
    </header>
  )
}

export default Header