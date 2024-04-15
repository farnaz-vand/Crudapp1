import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './TodosSlice';
import { Todo } from '../../app/api/todos'; 
import Input from '../../app/components/ui/Input'; 
import Button from '../../app/components/common/Button'; 

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
      <Input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default TodoForm;
