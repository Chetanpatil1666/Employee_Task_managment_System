import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


  return (
    <div className='min-h-screen w-full flex items-center justify-center px-4 bg-[#090d16] relative overflow-hidden'>
        {/* Subtle ambient background glow */}
        <div className='absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none'></div>
        <div className='absolute -bottom-40 -right-40 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none'></div>

        <div className='relative z-10 border border-slate-800/80 p-8 sm:p-10 max-w-md w-full bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/60'>
            <div className='flex flex-col items-center mb-7'>
                <div className='w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30 mb-4'>
                    <svg className='w-7 h-7' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                </div>
                <h2 className='text-2xl font-bold text-white tracking-tight'>WorkPulse EMS</h2>
                <p className='text-xs text-slate-400 mt-1'>Sign in to your workplace portal</p>
            </div>

            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col gap-4 w-full'
            >
                <div>
                    <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5'>Email Address</label>
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required 
                    className='w-full outline-none bg-slate-950/70 border border-slate-800 font-medium text-sm py-2.5 px-4 rounded-xl text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all' 
                    type="email" 
                    placeholder='name@company.com' 
                    />
                </div>

                <div>
                    <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5'>Password</label>
                    <input
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required 
                    className='w-full outline-none bg-slate-950/70 border border-slate-800 font-medium text-sm py-2.5 px-4 rounded-xl text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all' 
                    type="password" 
                    placeholder='••••••••' 
                    />
                </div>

                <button className='mt-2 text-white font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-sm py-3 px-6 w-full rounded-xl transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 cursor-pointer'>
                    Sign In
                </button>
            </form>

            <div className='mt-7 pt-6 border-t border-slate-800 text-xs text-slate-300'>
                <p className='font-semibold text-slate-400 mb-2.5 text-center uppercase tracking-wider text-[11px]'>1-Click Quick Login</p>
                <div className='flex flex-col gap-2'>
                    <button 
                        type="button"
                        onClick={() => { setEmail('admin@me.com'); setPassword('123'); }}
                        className='bg-slate-950/50 hover:bg-slate-800/60 text-left p-2.5 rounded-xl border border-slate-800 hover:border-indigo-500/30 transition flex justify-between items-center cursor-pointer'>
                        <span className='font-medium text-slate-200'>👑 <strong>Admin:</strong> admin@me.com</span>
                        <span className='text-slate-400 font-mono text-[11px] bg-slate-800/80 px-2 py-0.5 rounded'>123</span>
                    </button>
                    <button 
                        type="button"
                        onClick={() => { setEmail('e@e.com'); setPassword('123'); }}
                        className='bg-slate-950/50 hover:bg-slate-800/60 text-left p-2.5 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition flex justify-between items-center cursor-pointer'>
                        <span className='font-medium text-slate-200'>👤 <strong>Employee (Arjun):</strong> e@e.com</span>
                        <span className='text-slate-400 font-mono text-[11px] bg-slate-800/80 px-2 py-0.5 rounded'>123</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login