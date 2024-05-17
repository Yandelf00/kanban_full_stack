"use server"
import db from "@/db/db"
import { notFound } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function getBoards() {
    try {
    const boards = await db.board.findMany()
    if (!boards) {
      return notFound();
    }
    return boards;
  } catch (error) {
    console.error(error);
    return []
  }

}

export async function createBord() {
    try {
    const boards = await db.board.create({
      data : {
        userId : "sdlmj",
        name: "secondboard",
        isActive : false,
        columns: {
          create : [{name: "", }]
        } 
    }})
    if (!boards) {
      return notFound();
    }
    return boards;
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while getting the board." };
  }

}


export async function deleteAll() {
  try{
    const deleteAllBoards = await prisma?.board.deleteMany({})
    if (!deleteAllBoards)
    return deleteAllBoards
  }catch(error){
    console.log(error)
  }
}