import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 

function Error() {
  
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/home')
    }, 4000)
  }, [])

  return (
    <div className='h-screen flex flex-col xl:px-[30rem] md:px-10 px-3 py-10 bg-slate-900 text-white'>
      <div className='w-full'>          
        <div className='p-3 border-2 rounded-md bg-slate-800 border-slate-500 w-full'>
          <h1 className='text-4xl'>Error 404:</h1>
          <h3 className='text-xl'>This page does not exist.</h3>
          <br/>
          <p className='text-md'>You will be automatically redirected in a few seconds.</p>
        </div>   
      </div>  
    </div>
  )
}

export default Error