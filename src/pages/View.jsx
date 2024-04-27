import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Error from './Error.jsx'


function View() {
  const { id } = useParams()
  const userID = localStorage.getItem('id')
  const navigate = useNavigate()
  const env = import.meta.env.VITE_SERVER_URL
  const [APIData, setAPIData] = useState ([])
  const [editContentHeight, setEditContentHeight] = useState('auto')
  const [isOnEdit, setIsOnEdit] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (APIData) autoResize()  
  }, [APIData])

  const getData = () => {
    axios.get(env+`/post/${id}`)
      .then((response) => {
        setAPIData(response.data)
      })
      .catch((error) => {
        console.error(error)
        setAPIData(null)
      })
  }

  const autoResize = () => {
    const textarea = document.getElementById("editContent");
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
    setEditContentHeight(textarea.style.height);
  }

  const handleChange = (e) => {
    setAPIData(prevAPIData => {
      return {
        ...prevAPIData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleDelete = () => {
    axios.delete(env+`/post/${id}`)
      .then(() => navigate('/home'))
      .catch((error) => console.error(error))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    axios.patch(env+`/post/${id}`, APIData)
      .then(() => navigate('/home'))
      .catch((error) => console.error(error))
  }
  if (!APIData) return <Error/>
  
  return (
    <div className='h-screen xl:px-[30rem] md:px-10 px-3 py-10 bg-slate-900 text-white'>
      <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-4'>
        <div className='rounded-md border-2 bg-slate-800 border-slate-500 p-3'>
          <input 
            className='w-full rounded-md px-2 py-1 bg-slate-600 focus:outline-none' 
            type="text" 
            name='title'
            placeholder='title' 
            value={APIData.title} 
            onChange={(e) => handleChange(e)} 
            required
            disabled={isOnEdit}
          />
        </div>
        <div className='rounded-md border-2 bg-slate-800 border-slate-500 p-3'>
          <textarea 
            className='w-full h-auto rounded-md px-2 py-1 bg-slate-600 focus:outline-none resize-none text-justify'
            id='editContent'
            name='content' 
            placeholder="What's on your mind?"
            value={APIData.content}
            onChange={(e) => handleChange(e)} 
            style={{height: editContentHeight}}
            required
            disabled={isOnEdit}
          />
          <div className='flex justify-between pt-3'>
            <Link 
              to='/home' 
              className='rounded-md border-2 bg-slate-800 hover:bg-slate-700 border-slate-500 w-20 text-center'>
              Back
            </Link>
            {!isOnEdit ? 
            <div className='flex gap-4'>
              <button
                type='button'
                className='rounded-md border-2 bg-slate-800 hover:bg-slate-700 border-slate-500 w-20 text-center'
                onClick={()=> {setIsOnEdit(!isOnEdit), getData()}}>
                Cancel
              </button>
              <button
                type='submit'
                className='rounded-md border-2 bg-slate-800 hover:bg-slate-700 border-slate-500 w-20 text-center'>
                Save
              </button>
            </div> 
            :
            APIData.userId == userID &&
            <div className='flex gap-4'>
              <button
                type='button'
                className='rounded-md border-2 bg-slate-800 hover:bg-slate-700 border-slate-500 w-20 text-center'
                onClick={()=> setIsOnEdit(!isOnEdit)}>
                Edit
              </button>
              <button
                type='button'
                className='rounded-md border-2 bg-slate-800 hover:bg-slate-700 border-slate-500 w-20 text-center'
                onClick={handleDelete}>
                Delete
              </button>
            </div>
            }
          </div>
        </div>
      </form>
    </div>
  )                     
}

export default View