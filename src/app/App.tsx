import React from 'react';
import TodoList from '../features/todos/TodoList';
import TodoForm from '../features/todos/TodoForm';
import Navbar from './components/layout/Navbar'; 

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4">Crud</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
