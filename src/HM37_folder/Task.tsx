import React from "react";
import "./list.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { IMockData } from "./List";
import { TasksContext } from "./Context";

export const Task: React.FC<{
  item: IMockData;
}> = ({ item }) => {
  const { toChange, toDelete } = React.useContext(TasksContext);
  return (
    <div className={`todo-item ${item.isActive ? "active" : ""}`}>
      <span className="task" key={item.id} onClick={() => toChange(item.id)}>
        <FontAwesomeIcon className="icon circle" icon={faSquare} />

        {item.content}
        {item.isActive}
      </span>
      <div>
        <button className="icon-btn" onClick={() => toChange(item.id)}>
          <FontAwesomeIcon className="icon do" icon={faCheck} />
        </button>
        <button className="icon-btn" onClick={() => toDelete(item.id)}>
          <FontAwesomeIcon className="icon" icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};
