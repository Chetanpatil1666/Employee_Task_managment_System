import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext)

   
  return (
    <div className='bg-slate-900/80 border border-slate-800/90 p-7 rounded-2xl shadow-xl mt-6 backdrop-blur-sm'>
        <div className='flex items-center justify-between mb-5'>
            <div className='flex items-center gap-2'>
                <div className='w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center'>
                    <svg className='w-4 h-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <div>
                    <h2 className='text-lg font-bold text-white'>Workforce Status & Load</h2>
                    <p className='text-xs text-slate-400'>Live real-time monitoring of active tasks per employee</p>
                </div>
            </div>
            <span className='text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/80'>
                {userData?.length || 0} Employees
            </span>
        </div>

        {/* Table Header */}
        <div className='bg-slate-950/60 border border-slate-800/80 py-3 px-5 flex items-center justify-between rounded-xl text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3'>
            <div className='w-2/5'>Employee</div>
            <div className='w-1/5 text-center'>New Task</div>
            <div className='w-1/5 text-center'>In Progress</div>
            <div className='w-1/5 text-center'>Completed</div>
            <div className='w-1/5 text-center'>Failed</div>
        </div>

        {/* Rows */}
        <div className='space-y-2.5'>
        {userData && userData.map(function(elem, idx){
            const initial = elem.firstName.charAt(0).toUpperCase()
            return (
                <div key={idx} className='bg-slate-950/40 hover:bg-slate-800/40 border border-slate-800/60 hover:border-slate-700 py-3 px-5 flex items-center justify-between rounded-xl transition-all duration-200'>
                    <div className='w-2/5 flex items-center gap-3'>
                        <div className='w-9 h-9 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-700 border border-slate-600/50 flex items-center justify-center text-sm font-bold text-white shadow-sm'>
                            {initial}
                        </div>
                        <div>
                            <h3 className='text-sm font-semibold text-white'>{elem.firstName}</h3>
                            <p className='text-xs text-slate-400'>{elem.email}</p>
                        </div>
                    </div>
                    <div className='w-1/5 flex justify-center'>
                        <span className='inline-flex items-center justify-center min-w-[48px] px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'>
                            {elem.taskCounts?.newTask || 0}
                        </span>
                    </div>
                    <div className='w-1/5 flex justify-center'>
                        <span className='inline-flex items-center justify-center min-w-[48px] px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20'>
                            {elem.taskCounts?.active || 0}
                        </span>
                    </div>
                    <div className='w-1/5 flex justify-center'>
                        <span className='inline-flex items-center justify-center min-w-[48px] px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'>
                            {elem.taskCounts?.completed || 0}
                        </span>
                    </div>
                    <div className='w-1/5 flex justify-center'>
                        <span className='inline-flex items-center justify-center min-w-[48px] px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20'>
                            {elem.taskCounts?.failed || 0}
                        </span>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default AllTask