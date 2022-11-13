import React, { useState } from "react";
import Button from "../Button/Button";
import MyInput from "../Input/MyInput";
import classes from "./Item.module.css";

const Item = ({ task, deleteTask, editTask, saveEditedTask }) => {
  // создать локальное состояние
  const [localTask, setLocalTask] = useState({id:task.id, task: '', date: '', editMode: false});
  


  return (
    <div className={classes.item}>
      <div>
        {!task.editMode ? (
          <h2 className={classes.task}>{task.task}</h2>
        ) : (
          <MyInput
            placeholder="Task"
            value={localTask.task}
            onChange={(e) => setLocalTask({...localTask, task: e.target.value})}
          ></MyInput>
        )}
        {/* <p className={classes.date}>{task.date}</p> */}
        {!task.editMode ? (
          <p className={classes.date}>{task.date}</p>
        ) : (
          <MyInput
            placeholder="Date"
            value={localTask.date}
            onChange={(e) => setLocalTask({...localTask, date: e.target.value})}
          ></MyInput>
        )}
      </div>
      <div style={{ display: "flex", columnGap: "10px" }}>
        {!task.editMode ? (
          <Button onClick={() => editTask(task)}>Edit</Button>
        ) : (
          <Button onClick={() => saveEditedTask(localTask)}>Save</Button>
        )}
        <Button onClick={() => deleteTask(task)}>Delete</Button>
      </div>
    </div>
  );
};

export default Item;
