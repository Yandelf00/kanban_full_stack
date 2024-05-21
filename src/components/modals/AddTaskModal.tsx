"use client"
import React, { useState } from 'react'
import { useAddTask } from '@/hooks/useAddTask'
import IconCross from '../IconCross'



export default function AddTaskModal() {
    const [subtasks, setSubtasks] = useState<string[]>(["", ""])
    const isOpen = useAddTask((state)=>state.isOpen)
    const close = useAddTask((state)=>state.onClose)
    const fieldClassName = "mt-2 bg-blackprime border border-grayy rounded-md w-full h-[40px] focus:border-purple focus:outline-none pl-4"
    const textClassName = "mt-2 bg-blackprime border border-grayy rounded-md w-full h-[170px] focus:border-purple focus:outline-none pl-4"
    function handleSubChange(index:number){
    }
    function addField(){
        setSubtasks([...subtasks, ""])
    }
    function deleteField(index:number){
        setSubtasks(subtasks.filter((_, i:number)=> i !== index))
    }
    return (
        <>
        {isOpen ? (
            <div onClick={close} className='
                h-full
                w-full
                bg-black 
                justify-center
                items-center
                flex
                overflow-x-hidden
                overflow-y-auto
                fixed
                inset-0
                z-40
                outline-none
                focus:outline-none
                bg-neutral-800
                bg-opacity-70 '>
               <div onClick={(e)=>e.stopPropagation()} className='bg-whiteprime dark:bg-blackprime 
               min-h-[700px] w-[500px] rounded-md p-10'>
                <div className='flex flex-col'>
                    <h2 className='text-[23px] font-semibold'>Add Task</h2>
                    <form action="" className='mt-4 space-y-3'>
                        <div>
                            <label htmlFor="task_name" className='text-grayy dark:text-whiteprime font-semibold '>Task Name</label>
                            <input type="text" name='task_name' placeholder='e.g.Take Coffee Break' className={`${fieldClassName} pb-1`} />
                        </div>
                        <div>
                            <label htmlFor="task_desc" className='text-grayy dark:text-whiteprime font-semibold'>Description</label>
                            <textarea name="task_desc" id="" className={`${textClassName} pt-3`}></textarea> 
                        </div>
                        <div>
                            <label htmlFor="subtasks" className='text-grayy dark:text-whiteprime font-semibold'>Subtasks</label>
                            {subtasks.map((subtask:string, index : number)=>(
                                <div className='flex flex-row items-center'>
                                    <input type="text" name='subtasks' className={`${fieldClassName} mr-3`} onChange={()=>handleSubChange(index)} value={subtask} />                                    
                                    <div onClick={()=>deleteField(index)} className='pt-1'>
                                        <IconCross/>
                                    </div>
                                </div>
                            ))}
                            <AddFieldButton onClick={addField}/>
                        </div>
                        <div>
                            <label htmlFor="status" className='text-grayy dark:text-whiteprime font-semibold'>Current Status</label>
                            
                        </div>
                    </form>
                </div>
               </div> 
            </div>
        ):(
            <></>
        )}
        </>
    )
}

function AddFieldButton({onClick}:{onClick:React.MouseEventHandler<HTMLButtonElement>}){
    return(
        <button onClick={onClick} type = "button" className='w-full h-[40px] mt-[20px] rounded-full dark:bg-whiteprime
        dark:text-purple bg-purple text-whiteprime font-semibold'>+Add New Column</button>
    )
}