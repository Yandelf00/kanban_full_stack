"use client"
import React, { useEffect, useState } from 'react'
import { Task } from '@/hooks/useTasks'
import { useSubTasks } from '@/hooks/useSubTasks'
import { Subtask } from '@/hooks/useSubTasks'

type TaskCardProps = {
    task : Task
}


export default function TaskCard( { task } : TaskCardProps) {
  const subs = useSubTasks((state)=>state.subtasks)
  const [done, setDone] = useState<number>(0)
  const [undone, setUndone] = useState<number>(0)
  function subIsDone(){
    const doneSubs = subs.filter((sub:Subtask)=>{
      return sub.isCompleted === true
    })
    setDone(doneSubs.length)
  }
  function subIsUndone(){
    const doneSubs = subs.filter((sub:Subtask)=>{
      return sub.isCompleted === false
    })
    setUndone(doneSubs.length)
  }
  useEffect(()=>{
    subIsDone()
    subIsUndone()
  }, [subs])
  return (
    <div className='p-3 mt-5 w-80 min-h-20 bg-blackprime 
    flex flex-col rounded-md cursor-pointer hover:text-purple'>
        <h1 className='font-semibold'>
            {task.title}
        </h1>
        <p className='text-grayy font-thin text-sm mt-2'>{done} out of {undone} </p>
    </div>
  )
}
