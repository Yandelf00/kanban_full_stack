import { create } from "zustand";

export type Subtask = {
    id : number;
    title : string;
    isCompleted : boolean;
    taskId : number
}

type Subtasks = {
    subtasks : Subtask[];
    setSubTasks : (subs : Subtask[])=>void;
}

export const useSubTasks = create<Subtasks>((set)=>({
    subtasks : [],
    setSubTasks : (subs : Subtask[])=>{
        set({subtasks : subs})
    }
}))