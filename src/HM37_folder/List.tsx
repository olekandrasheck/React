import React from "react";
import "./list.scss";
import { AddTaskForm } from "./AddTaskForm";
import { Task } from "./Task";
import { TasksContext } from "./Context";
export interface IMockData {
  id: string;
  content: string;
  isActive: boolean;
}

export const List = () => {
  const [tasks, setTasks] = React.useState<any[]>([]);

  const toAdd = (add: IMockData) => {
    setTasks([...tasks, add]);
  };
  const toDelete = (id: string) => {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
  };

  const toChange = (id: string) => {
    const changedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isActive: !task.isActive };
      } else {
        return task;
      }
    });
    setTasks(changedTasks);
  };

  return (
    <TasksContext.Provider value={{ toDelete, toChange, toAdd }}>
      <div className="wrapper-todo">
        <p>HM 37</p>
        <p className="header-todo">MY TO DO LIST</p>

        <div className="wrapper-tasks">
          {tasks.map((item: IMockData) => {
            return <Task item={item} />;
          })}
        </div>
        <AddTaskForm />
      </div>
    </TasksContext.Provider>
  );
};
