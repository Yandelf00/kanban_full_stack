import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="bg-whitesecond min-h-full w-full">
      <Navbar />
      {/*
        <div>
            <UserButton />
        </div>
        <h1>hello world! this is a test for the fonts</h1>
       */}
    </main>
  );
}
