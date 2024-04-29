import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    userId: localStorage.getItem('id')
  })
    
  const navigate = useNavigate()

  const handleChange = (e) => {
    setPostData(prevPostData => {
      return {
        ...prevPostData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    axios.post(import.meta.env.VITE_SERVER_URL+'/post', postData)
      .then(() => navigate('/home'))
      .catch((error) => console.error(error))
  }

  return (
    <div className='h-screen px-3 py-10 md:px-24 xl:px-48 2xl:px-[26rem] bg-slate-900 text-white'>
      <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-4'>
        <div className='rounded-md border-2 bg-slate-800 border-slate-500 p-3'>
          <input 
            className='w-full rounded-md px-2 py-1 bg-slate-600 focus:outline-none' 
            type='text'
            autoComplete='off' 
            name='title'
            placeholder='Title ' 
            value={postData.title} 
            onChange={(e) => handleChange(e)} 
            required
            maxLength={60}
            />
            <span className={`pl-2 ${postData.title.length === 60 ? 'text-red-500' : 'text-gray-500'}`}>Character limit: {postData.title.length}/60</span>          
        </div>
        <div className='rounded-md border-2 bg-slate-800 border-slate-500 p-3'>
          <textarea 
            className='w-full rounded-md px-2 py-1 bg-slate-600 focus:outline-none resize-none'
            rows='10'
            name='content' 
            placeholder="What's on your mind?"
            value={postData.content}
            onChange={(e) => handleChange(e)} 
            required
          />
          <div className='flex justify-end gap-4 pt-3'>
            <Link 
              to='/home' 
              className='rounded-md border-2 bg-slate-800 hover:bg-slate-700 border-slate-500 w-20 text-center'>
              Cancel
            </Link>
            <button 
              className='rounded-md border-2 bg-slate-800 hover:bg-slate-700 border-slate-500 w-20 text-center'>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Create