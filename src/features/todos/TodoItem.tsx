import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../../app/api/todos';
import { updateTodo, removeTodo } from './TodosSlice';
import Button from '../../app/components/common/Button';
import InputWithFocus from '../../app/components/ui/InputWithFocus'; 

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateTodo({
      ...todo,
      title: editedTitle,
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(todo.title);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  return (
    <tr className="bg-white">
      <td className="px-6 py-4 whitespace-nowrap">
        {isEditing ? (
          <InputWithFocus
            type="text"
            value={editedTitle}
            onChange={handleChange}
            autoFocus={true}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        ) : (
          <div className="text-sm text-gray-900">{todo.title}</div>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {isEditing ? (
          <div className="flex justify-end">
            <Button onClick={handleSave} className="px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2">Save</Button>
            <Button onClick={handleCancel} className="px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">Cancel</Button>
          </div>
        ) : (
          <div className="flex justify-end">
            <Button onClick={handleEdit} className="px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 mr-2">Edit</Button>
            <Button onClick={handleRemove} className="px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Delete</Button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default TodoItem;
