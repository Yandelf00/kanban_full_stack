"use client"
import React, { useEffect, useState } from 'react'
import { useCols } from '@/hooks/useCols'
import { getTheCols } from '@/_actions/cols'
import { useBoards } from '@/hooks/useBoards'
import SolCol from './SolCol'
import { getSpefTasks } from '@/_actions/tasks'
import { useTasks } from '@/hooks/useTasks'

export default function ColTemp() {
    const setTasks = useTasks((state)=>state.setTasks)
    const cols = useCols((state)=>state.cols)
    const setCols = useCols((state)=>state.setCols)
    const boards = useBoards((state)=>state.boards)
    const getActBoardId = useBoards((state)=>state.getActive)
    const [actBoard, setActBoard] = useState<number>(0)
    async function getThemCols(){
        try {
            const res = await getTheCols(actBoard) 
            if (res){
               setCols(res) 
            }
        } catch (error) {
            console.log(error)
            return[]
        }
    }
    async function getTheTasks(){
        const colIds = cols.map((col)=>{
            return col.id
        })
        try {
            const tasks = await getSpefTasks(colIds) 
            if (tasks){
                setTasks(tasks)
            }
        } catch (error) {
            console.log(error) 
        }
    }
    useEffect(()=>{
        setActBoard(getActBoardId)
    }, [boards])
    useEffect(()=>{
        getThemCols()
    }, [actBoard])
    useEffect(()=>{
        getTheTasks()
    }, [cols])

    return (
        <div className='ml-10 fixed flex flex-row'>

            {cols.map((col)=>(
                <div key={col.id} className=''>
                    <SolCol name={col?.name} colId={col.id}/>
                </div>
            ))}
        </div>
    )
}
