"use client"
import Navbar from "@/components/Navbar";
import AddTaskModal from "@/components/modals/AddTaskModal";
import AddBoardModal from "@/components/modals/AddBoardModal";
import Sidebar from "@/components/sidebar/Sidebar";
import { getBoards } from "@/_actions/boards";
import { useEffect } from "react";
import { useBoards } from "@/hooks/useBoards";

export default function Home() {
  const setBoards = useBoards((state)=>state.setBoards)
  const setActiveBoard = useBoards((state)=>state.setFirstActive)
  const getTheBoards = async()=>{
    try {
      const themBoards = await getBoards() 
      if (themBoards) {
        setBoards(themBoards) 
        setActiveBoard()
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getTheBoards()
  },[])
  return (
    <main className="bg-whitesecond dark:bg-blacksecond min-h-full w-full">
      <AddBoardModal/>
      <AddTaskModal/>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar/>
        <div className="bg-purple size-[100px]"></div>
      </div>
    </main>
  );
}
