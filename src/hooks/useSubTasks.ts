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

export const useSubTasks = create<Subtasks>((set, get)=>({
    subtasks : [],
    setSubTasks : (subtasks : Subtask[])=>{
        set({subtasks : subtasks})
    }
}))