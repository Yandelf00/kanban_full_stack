"use client"
import React, { useEffect, useState } from 'react'
import IconCross from '../IconCross'
import { useTaskModal } from '@/hooks/useTaskModal'
import { Subtask } from '@/hooks/useSubTasks'

export default function TaskModal() {
    const data = useTaskModal((state)=>state.data)
    const onClose = useTaskModal((state)=>state.onClose)
    return (
        <>
        {data.isOpen? (
            <div onClick={onClose} className='
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
               min-h-[400px] w-[500px] rounded-md p-10'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-whiteprime text-xl'>{data.title}</h1>
                    <p className='text-grayy mt-2 text-md'>{data.description}</p>
                    <h2 className='font-bold text-grayy mt-5'>Subtasks</h2>
                    {data.subtasks.map((subtask)=>(
                        <div>
                            {subtask.title}
                        </div>
                    ))}
                </div>
               </div> 
            </div>
        ):(
            null
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

function SubmitButton(){
    return(
        <button type='submit' className='w-full h-[40px] mt-5 rounded-full bg-purple 
        text-whiteprime font-semibold'>Create New Board</button>
    )
}