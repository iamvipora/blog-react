import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DeleteModal = (props) => {
  const navigate = useNavigate()

  const deleteAccount = () => {
    axios.delete(import.meta.env.VITE_SERVER_URL+`/user/${localStorage.getItem('id')}`)
    .then(() => {
      localStorage.removeItem('userName')
      localStorage.removeItem('id')
      
      navigate('/')
    })
    .catch((error) => console.error(error)) 
  }
  
  return (
    <div className='w-96 px-4 py-2 flex flex-col rounded-md border-2 bg-slate-800 border-slate-500'>
     {props.view ?
      <h3 className='text-lg text-center mt-2'>Are you sure you want to <span className='text-red-700'>delete</span> your post?</h3>
      :
      <h3 className='text-lg text-center mt-2'>Are you sure you want to <span className='text-red-700'>delete</span> your account and posts?</h3>
     }
      <div className='flex gap-4 my-2 justify-center'>
        <button
          type='button'
          className='rounded-md border-2 bg-slate-800 hover:bg-slate-700 border-slate-500 w-20 text-center'
          onClick={() => props.toggleModal(false)}>
          Cancel
        </button>
        {props.view?
          <button
            type='submit'
            onClick={props.deletePost}
            className='rounded-md border-2 bg-slate-800 hover:bg-slate-700 border-slate-500 w-20 text-center'>
            Delete
        </button>
        :
        <button
          type='submit'
          onClick={deleteAccount}
          className='rounded-md border-2 bg-slate-800 hover:bg-slate-700 border-slate-500 w-20 text-center'>
          Delete
        </button>
        }
      </div> 
    </div>
  )
}

export default DeleteModal