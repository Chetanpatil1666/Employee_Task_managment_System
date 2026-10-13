import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser('')
  }

  const isAdmin = !props.data
  const displayName = props.data ? props.data.firstName : 'Admin'
  const initial = displayName.charAt(0).toUpperCase()

  return (
    <header className='flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80'>
      <div className='flex items-center gap-4'>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold shadow-lg ${
          isAdmin 
            ? 'bg-gradient-to-tr from-violet-600 to-indigo-500 text-white shadow-indigo-500/20' 
            : 'bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-emerald-500/20'
        }`}>
          {initial}
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <h1 className='text-2xl font-bold text-white tracking-tight'>
              Welcome, {displayName}
            </h1>
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${
              isAdmin 
                ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' 
                : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isAdmin ? 'bg-indigo-400' : 'bg-emerald-400'} animate-pulse`}></span>
              {isAdmin ? 'Admin' : 'Employee'}
            </span>
          </div>
          <p className='text-xs text-slate-400 mt-0.5'>
            {isAdmin ? 'Manage company workforce and monitor task distribution' : 'Track your assigned deliverables and update status'}
          </p>
        </div>
      </div>

      <button 
        onClick={logOutUser} 
        className='group flex items-center gap-2 bg-slate-900/80 hover:bg-rose-500/10 text-slate-300 hover:text-rose-400 border border-slate-800 hover:border-rose-500/30 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer shadow-sm hover:shadow-rose-500/5'
      >
        <svg className='w-4 h-4 transition-transform group-hover:translate-x-0.5' fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span>Sign Out</span>
      </button>
    </header>
  )
}

export default Header