import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div className='mt-8'>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-bold text-white flex items-center gap-2'>
                    <span>Assigned Deliverables</span>
                    <span className='text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/80'>
                        {data?.tasks?.length || 0} Total
                    </span>
                </h3>
            </div>
            <div id='tasklist' className='overflow-x-auto flex items-stretch justify-start gap-5 pb-4 w-full'>
                {data?.tasks?.map((elem, idx) => {
                    if (elem.active) {
                        return <AcceptTask key={idx} data={elem} />
                    }
                    if (elem.newTask) {
                        return <NewTask key={idx} data={elem} />
                    }
                    if (elem.completed) {
                        return <CompleteTask key={idx} data={elem} />
                    }
                    if (elem.failed) {
                        return <FailedTask key={idx} data={elem} />
                    }
                    return null
                })}
            </div>
        </div>
    )
}

export default TaskList