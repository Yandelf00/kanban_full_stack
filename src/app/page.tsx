import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import AddTaskModal from "@/components/modals/AddTaskModal";
import Sidebar from "@/components/sidebar/Sidebar";
export default function Home() {
  return (
    <main className="bg-whitesecond dark:bg-blacksecond min-h-full w-full">
      <AddTaskModal/>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar/>
        <div className="bg-purple size-[100px]"></div>
      </div>
      {/*
        <div>
            <UserButton />
        </div>
        <h1>hello world! this is a test for the fonts</h1>
       */}
    
    </main>
  );
}
