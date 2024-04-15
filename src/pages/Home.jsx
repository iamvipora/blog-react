import React from 'react'
import Header from '../components/Header.jsx'
import Feed from '../components/Feed.jsx'

function Home() {

  return (
    <div className='h-screen flex flex-col xl:px-[30rem] md:px-10 px-3 py-10 bg-slate-900 text-white'>
      <Header />   
      <Feed />
    </div>
  )
}

export default Home