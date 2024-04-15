import React, { useState, useEffect} from 'react'
import { useNavigate} from "react-router-dom"
import axios from 'axios'

function Index() {
  let navigate = useNavigate()
  const [userName, setUserName] = useState('')

  useEffect(() => {
    if (localStorage.getItem('id')) navigate('/home')
  }, [])
  
  const handleChange = (e) => {
    setUserName(() => e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const formData = new FormData(e.currentTarget)
    const userName = formData.get("userName")
    axios.post('http://localhost:3000/user', {
      userName
    })
    .then((res) => {
      localStorage.setItem('id', res.data.id)
      localStorage.setItem('userName', res.data.userName)      
      navigate('/home')
    })
    .catch((error) => console.error(error))
  }

  return (
    <>
      <div className='h-screen flex items-center xl:px-96 md:px-10 px-3 align-center bg-slate-900 text-white'>
        <div className='h-3/4 md:h-1/2 py-8 flex flex-col y-evenly'>
          <h1 className='text-7xl'>
            Temp. Feelings
            <br/>
            <p className='text-orange-400'>Blog App</p>
          </h1>
          <p className='text-lg font-light pt-9'>
            Life can be miserable sometimes, so we made a blog app for you to anonymously rant online.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              name="userName"
              placeholder="What should we call you?" 
              onChange={handleChange}
              value={userName}
              type="text" 
              autoComplete='off'
              className="bg-transparent w-full border-b text-2xl md:text-5xl xl:text-6xl border-orange-900 focus:border-orange-400 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
            {userName.length > 0 
            && 
            <button
            className='rounded-md border-2 mt-2 bg-slate-800 hover:bg-slate-700 border-slate-500 w-20 text-center'
            type='submit'
            >
              Enter
            </button>}
          </form>
        </div>
      </div>
    </>
  )
}

export default Index