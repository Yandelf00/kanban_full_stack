"use client"
import React from 'react'
import { useState } from 'react'
import { useAddBoard } from '@/hooks/useAddBoard'


export default function AddBoardModal() {
    const [fields, setFields] = useState<String[]>(["todo", "done"])
    const  isOpen  = useAddBoard((state)=>state.isOpen)
    const close = useAddBoard((state)=>state.onClose)

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
               <div onClick={(e)=>e.stopPropagation()} className='bg-whiteprime 
        dark:bg-blackprime min-h-[450px] w-[480px] rounded-md'>
                <div className='p-10'>
                    <h2 className='font-semibold text-[20px]'>Add new board</h2>
                    <button>add</button> 
                    {fields.map((field:String)=>(
                        <div key="">
                            {field} 
                        </div>
                    ))}
                </div>
               </div> 
            </div> 
            ) : (
                <div></div>
            )} 
        </>
    )
}
