import React from 'react';
import TodoForm from './../features/todos/TodoForm';
import TodoList from './../features/todos/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
