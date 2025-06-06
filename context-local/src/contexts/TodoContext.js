import { useContext, createContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Read books",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    udpateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export function useTodoContext() {
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider; 