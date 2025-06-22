import { useState } from "react";
import { TaskContext } from "./TaskContext";
import { initialState } from "./initialTaskState";

// TaskContextProvider configs
type TaskContextProviderProps = {
  children: React.ReactNode;
};  

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, setState] = useState(initialState);
  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}