import React from 'react';

function TodoItem({ task, deleteTask }) {
  return (
    <li>
      {task}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default TodoItem;
