import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className='flex-shrink-0 w-[320px] p-6 bg-slate-900/90 border border-emerald-500/30 hover:border-emerald-500/60 rounded-2xl shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group'>
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
          <span className='w-2 h-2 rounded-full bg-emerald-400'></span>
          <span className='text-xs font-medium text-emerald-400 uppercase tracking-wider'>Completed</span>
        </div>

        <h2 className='mt-2 text-xl font-bold text-white group-hover:text-emerald-300 transition-colors'>
          {data.taskTitle}
        </h2>
        <p className='text-sm text-slate-400 mt-2 leading-relaxed'>
          {data.taskDescription}
        </p>
      </div>

      <div className='mt-6 pt-4 border-t border-slate-800/80'>
        <div className='w-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5'>
          <svg className='w-4 h-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Deliverable Completed
        </div>
      </div>
    </div>
  )
}

export default CompleteTask