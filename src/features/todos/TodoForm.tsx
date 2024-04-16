import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './TodosSlice';
import { Todo } from '../../app/api/todos';


const TodoForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded p-2 mr-2"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
