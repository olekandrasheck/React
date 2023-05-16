import React, { createContext } from "react";
import { IMockData } from "./List";

interface ITasksContext {
  toAdd: (add: IMockData) => void;
  toChange: (id: string) => void;
  toDelete: (id: string) => void;
}

export const TasksContext = createContext<ITasksContext>({
  toAdd: (add: IMockData) => {},
  toChange: (id: string) => {},
  toDelete: (id: string) => {},
});
