import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()

        const taskObj = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }

        const data = [...userData]
        let found = false

        data.forEach(function (elem) {
            if (asignTo.trim().toLowerCase() === elem.firstName.toLowerCase()) {
                elem.tasks.push(taskObj)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
                found = true
            }
        })

        if (!found) {
            alert(`Employee with name "${asignTo}" not found. Available employees: ${data.map(e => e.firstName).join(', ')}`)
            return
        }

        setUserData(data)
        localStorage.setItem('employees', JSON.stringify(data))

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
        alert('Task created successfully!')
    }

    return (
        <div className='p-7 bg-slate-900/80 border border-slate-800/90 mt-6 rounded-2xl shadow-xl backdrop-blur-sm'>
            <div className='flex items-center gap-2 mb-6'>
                <div className='w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center'>
                    <svg className='w-4 h-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                </div>
                <div>
                    <h2 className='text-lg font-bold text-white'>Create & Assign Deliverable</h2>
                    <p className='text-xs text-slate-400'>Dispatch new work to your employees with priority tags</p>
                </div>
            </div>

            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='grid grid-cols-1 lg:grid-cols-2 gap-6'
            >
                <div className='space-y-4'>
                    <div>
                        <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5'>Task Title</label>
                        <input
                            required
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-slate-950/70 border border-slate-800 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all'
                            type="text"
                            placeholder='e.g., Redesign checkout flow'
                        />
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5'>Due Date</label>
                            <input
                                required
                                value={taskDate}
                                onChange={(e) => {
                                    setTaskDate(e.target.value)
                                }}
                                className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-slate-950/70 border border-slate-800 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all'
                                type="date"
                            />
                        </div>
                        <div>
                            <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5'>Assign To</label>
                            <input
                                required
                                value={asignTo}
                                onChange={(e) => {
                                    setAsignTo(e.target.value)
                                }}
                                className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-slate-950/70 border border-slate-800 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all'
                                type="text"
                                placeholder='e.g., Arjun, Sneha...'
                            />
                        </div>
                    </div>

                    <div>
                        <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5'>Category Tag</label>
                        <input
                            required
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='w-full text-sm py-2.5 px-4 rounded-xl outline-none bg-slate-950/70 border border-slate-800 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all'
                            type="text"
                            placeholder='e.g., Design, Backend, DevOps'
                        />
                    </div>
                </div>

                <div className='flex flex-col justify-between space-y-4'>
                    <div className='flex-1 flex flex-col'>
                        <label className='block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5'>Detailed Description</label>
                        <textarea
                            required
                            value={taskDescription}
                            onChange={(e) => {
                                setTaskDescription(e.target.value)
                            }}
                            className='w-full flex-1 min-h-[140px] text-sm py-3 px-4 rounded-xl outline-none bg-slate-950/70 border border-slate-800 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none'
                            placeholder='Provide comprehensive specifications and acceptance criteria...'
                        />
                    </div>
                    <button className='w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold py-3 px-6 rounded-xl text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2'>
                        <svg className='w-4 h-4' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        Publish & Assign Deliverable
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask