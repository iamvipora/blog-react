import React from 'react'

function Post(props) {
  const parseDate = (date) => {
    const newDate = new Date(date)
    return newDate.toLocaleString('en-US')
  }

  return (
    <div className='w-full px-4 py-2 flex flex-col rounded-md border-2 bg-slate-800 hover:bg-slate-700 border-slate-500 cursor-pointer'>
      <div className='flex justify-between pb-4'>
        <p className='text-2xl truncate w-4/6 lg:w-3/4'>{props.data.title}</p>
        <p>{parseDate(props.data.updatedAt)}</p>
      </div>
      <div className='flex justify-between'>
        <p className='text-slate-500 truncate w-4/6 lg:w-3/4'>{props.data.content}</p>
        <p className='underline'>u/{props.data.user.userName}</p>
      </div> 
    </div>  
  )
}

export default Post