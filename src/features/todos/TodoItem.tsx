import React, { useState } from 'react';
import { Todo } from '../../app/api/todos';
import Input from '../../app/components/ui/Input';
import Button  from '../../app/components/common/Button'; 

interface TodoItemProps {
  todo: Todo;
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
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
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        {isEditing ? (
          <Input
            type="text"
            placeholder="Edit todo..." // Add placeholder
            value={editedTitle}
            onChange={handleChange}
          />
        ) : (
          <div className="flex items-center">
            <div className="text-sm font-medium text-gray-900">{todo.title}</div>
          </div>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {isEditing ? (
          <div className="flex justify-end">
            <Button type="button" onClick={handleSave}>Save</Button>
            <Button type="button" onClick={handleCancel}>Cancel</Button>
          </div>
        ) : (
          <div className="flex justify-end">
            <Button type="button" onClick={handleEdit}>Edit</Button>
            <Button type="button" onClick={() => onRemove(todo.id)}>Delete</Button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default TodoItem;
