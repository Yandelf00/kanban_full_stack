import React from 'react'
import { Task } from '@/hooks/useTasks'


type TaskCardProps = {
    task : Task
}


export default function TaskCard( { task } : TaskCardProps) {
  return (
    <div className='p-3 mt-5 w-80 min-h-20 bg-blackprime 
    flex flex-col rounded-md cursor-pointer hover:text-purple'>
        <h1 className='font-semibold'>
            {task.title}
        </h1>
    </div>
  )
}
