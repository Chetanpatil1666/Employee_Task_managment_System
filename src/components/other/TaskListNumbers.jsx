import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
      {/* New Tasks */}
      <div className='relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-indigo-950/30 border border-indigo-500/20 hover:border-indigo-500/40 p-5 rounded-2xl shadow-xl transition-all duration-300 group'>
        <div className='flex items-center justify-between mb-3'>
          <span className='text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20'>
            New Assigned
          </span>
          <div className='w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center'>
            <svg className='w-4 h-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
        <h2 className='text-3xl font-extrabold text-white tracking-tight'>{data?.taskCounts?.newTask || 0}</h2>
        <p className='text-xs text-slate-400 mt-1 font-medium'>Awaiting employee acceptance</p>
      </div>

      {/* Active Tasks */}
      <div className='relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-amber-950/30 border border-amber-500/20 hover:border-amber-500/40 p-5 rounded-2xl shadow-xl transition-all duration-300 group'>
        <div className='flex items-center justify-between mb-3'>
          <span className='text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20'>
            In Progress
          </span>
          <div className='w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center'>
            <svg className='w-4 h-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <h2 className='text-3xl font-extrabold text-white tracking-tight'>{data?.taskCounts?.active || 0}</h2>
        <p className='text-xs text-slate-400 mt-1 font-medium'>Currently being worked on</p>
      </div>

      {/* Completed Tasks */}
      <div className='relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-emerald-950/30 border border-emerald-500/20 hover:border-emerald-500/40 p-5 rounded-2xl shadow-xl transition-all duration-300 group'>
        <div className='flex items-center justify-between mb-3'>
          <span className='text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20'>
            Completed
          </span>
          <div className='w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center'>
            <svg className='w-4 h-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h2 className='text-3xl font-extrabold text-white tracking-tight'>{data?.taskCounts?.completed || 0}</h2>
        <p className='text-xs text-slate-400 mt-1 font-medium'>Finished and delivered</p>
      </div>

      {/* Failed Tasks */}
      <div className='relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-rose-950/30 border border-rose-500/20 hover:border-rose-500/40 p-5 rounded-2xl shadow-xl transition-all duration-300 group'>
        <div className='flex items-center justify-between mb-3'>
          <span className='text-xs font-semibold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20'>
            Failed
          </span>
          <div className='w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center'>
            <svg className='w-4 h-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <h2 className='text-3xl font-extrabold text-white tracking-tight'>{data?.taskCounts?.failed || 0}</h2>
        <p className='text-xs text-slate-400 mt-1 font-medium'>Missed or cancelled</p>
      </div>
    </div>
  )
}

export default TaskListNumbers