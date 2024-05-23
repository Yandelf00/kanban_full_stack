import { create } from 'zustand';


export type Board = {
    id : number,
    isActive: boolean,
    name: string,
    userId : string
}

type Boards = {
    boards: Board[],
    onActive: (name: string) => void,
    setBoards : (boards : Board[]) => void,
    setFirstActive : ()=>void
}

export const useBoards = create<Boards>((set) => ({
    boards: [],
    onActive: (activeName: string) => {
        set((state) => ({
            boards: state.boards.map((board) => ({
                ...board,
                isActive: board.name === activeName
            }))
        }));
    },
    setBoards : (boards : Board[]) =>{
        set({boards : boards})
    },
    setFirstActive : ()=>{
        set((state)=>({boards : state.boards.map((board:Board, index:number)=>({
                ...board,
                isActive : index === 0
        }))
    }))
    }
    
}));
