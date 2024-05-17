"use client"
import React from 'react'
import { useAddTask } from '@/hooks/useAddTask'

export default function AddTaskModal() {
    const isOpen = useAddTask((state)=>state.isOpen)
    const close = useAddTask((state)=>state.onClose)
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
               <div onClick={(e)=>e.stopPropagation()} className='bg-whiteprime dark:bg-blackprime h-[500px] w-[300px]'>
                <form action="function"></form> 
               </div> 
            </div>
        ):(
            <></>
        )}
        </>
    )
}
