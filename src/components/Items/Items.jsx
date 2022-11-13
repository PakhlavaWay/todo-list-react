import React from 'react';
import Item from '../Item/Item';

const Items = ({ tasks, deleteTask, editTask, saveEditedTask }) => {
  return (
    <div className='items'> 
      {tasks.map((task) => 
        <Item task={task} deleteTask={deleteTask} editTask={editTask} saveEditedTask={saveEditedTask} key={task.id}/> 
      )}
    </div>
  );
};

export default Items;