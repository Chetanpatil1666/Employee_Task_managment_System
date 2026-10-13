import React from 'react'

const NewTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 w-[320px] p-6 bg-slate-900/90 border border-indigo-500/30 hover:border-indigo-500/60 rounded-2xl shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group'>
      <div>
        <div className='flex justify-between items-center gap-2'>
          <span className='bg-slate-800 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-700/80'>
            {data.category}
          </span>
          <div className='flex items-center gap-1.5 text-xs text-slate-400'>
            <svg className='w-3.5 h-3.5' fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{data.taskDate}</span>
          </div>
        </div>

        <div className='mt-3 flex items-center gap-1.5'>
          <span className='w-2 h-2 rounded-full bg-indigo-400'></span>
          <span className='text-xs font-medium text-indigo-400 uppercase tracking-wider'>New Assignment</span>
        </div>

        <h2 className='mt-2 text-xl font-bold text-white group-hover:text-indigo-300 transition-colors'>
          {data.taskTitle}
        </h2>
        <p className='text-sm text-slate-400 mt-2 leading-relaxed'>
          {data.taskDescription}
        </p>
      </div>

      <div className='mt-6 pt-4 border-t border-slate-800/80'>
        <button className='w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 px-4 rounded-xl text-xs transition duration-200 cursor-pointer shadow-md shadow-indigo-950/30 flex items-center justify-center gap-1.5'>
          <svg className='w-3.5 h-3.5' fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Accept Assignment
        </button>
      </div>
    </div>
  )
}

export default NewTask