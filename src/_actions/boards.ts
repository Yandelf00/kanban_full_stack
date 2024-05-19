"use server"
import { z } from "zod"
import db from "@/db/db"
import { notFound } from "next/navigation"
import { revalidatePath, revalidateTag } from "next/cache"
import { auth } from "@clerk/nextjs/server"


const addBoard = z.object({
  name : z.string().min(1),
  cols : z.array(z.string().min(1))
})


export async function anotherOne(prevState : any, formData:FormData){
  const rawFormData = {
      name : formData.get('name'),
      cols : formData.getAll('cols'),
  }
  const result = addBoard.safeParse(rawFormData)
  const data = result.data
  console.log(data)
  return {message : "something"}
}

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


export async function showFormData(name : string, cols : string[] ) {
  console.log(name)
  console.log(cols)
}

export async function createBoard(){
    try {
    const boards = await db.board.create({
      data : {
        userId : "something",
        name: "itsaname",
        isActive : false,
        columns: {
          create : [{name:""}]
        } 
    }})
    if (!boards) {
      return notFound();
    }
    revalidatePath('/', 'page')
    revalidatePath('/page')
    revalidateTag('OpenSideBar')
    return boards;
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while getting the board." };
  }

}

export async function createBord(formData : FormData) {
    const result = addBoard.safeParse(Object.fromEntries(formData.entries()))
    if(result.success === false){
      return result.error.formErrors.fieldErrors
    }
    const data = result.data
    const { userId } = auth()
    
    if (userId){
        try {
        const boards = await db.board.create({
          data : {
            userId : userId,
            name: data.name,
            isActive : false,
            columns: {
              create : [{name:""}]
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