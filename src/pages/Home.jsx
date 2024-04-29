import React from 'react'
import Header from '../components/Header.jsx'
import Feed from '../components/Feed.jsx'

function Home() {

  return (
    <div className='h-screen flex flex-col px-3 py-10 md:px-24 xl:px-48 2xl:px-[26rem] bg-slate-900 text-white'>
      <Header />   
      <Feed />
    </div>
  )
}

export default Home