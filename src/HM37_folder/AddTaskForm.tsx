import React from "react";
import { nanoid } from "nanoid";
import "./list.scss";
import { TasksContext } from "./Context";

export const AddTaskForm: React.FC<{}> = () => {
  const [formValue, setFormValues] = React.useState("");
  const { toAdd } = React.useContext(TasksContext);
  const inputHandler = (event: any) => {
    setFormValues(event.target.value);
  };

  return (
    <div>
      <button
        className="btn-add"
        onClick={() =>
          toAdd({
            id: nanoid(),
            content: formValue,
            isActive: false,
          })
        }
      >
        + ADD
      </button>
      <input
        className="input-todo"
        type="text"
        value={formValue}
        onChange={inputHandler}
      />
    </div>
  );
};
