import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'
import { Link } from 'react-router-dom'

function Feed() {
  const [APIData, setAPIData] = useState([])

  useEffect(() => {
    axios.get(import.meta.env.SERVER_URL+'/feed')
      .then((response) => {
        setAPIData(response.data)
      })
      .catch((error) => console.error(error))
  }, [])

  const renderFeed = APIData.map((data) => {
    return (
      <Link to={`/view/${data.id}`} key={data.id}>
        <Post 
          data={data}
        />
      </Link>
    )
  })

  return (
    <div className='w-full flex flex-col gap-4 py-8'>
      {APIData.length ? 
      renderFeed 
      : 
      (
        <div className='pt-6'>
          <p className='text-4xl text-slate-500 text-center'>Start posting now</p>
        </div>
      )}
    </div>
  )
}

export default Feed