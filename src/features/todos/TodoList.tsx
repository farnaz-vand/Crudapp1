import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store/store';
import { Todo } from '../../app/api/todos';
import { removeTodo, toggleTodo, editTodo } from './TodosSlice';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState('');
  const dispatch = useDispatch();

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditedTitle(todo.title);
  };

  const handleSave = () => {
    if (!editedTitle.trim()) return;

    dispatch(editTodo({ id: editingId!, title: editedTitle }));
    setEditingId(null);
    setEditedTitle('');
  };

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          {editingId === todo.id ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
              </span>
              <button onClick={() => handleRemove(todo.id)}>Delete</button>
              <button onClick={() => handleEdit(todo)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
