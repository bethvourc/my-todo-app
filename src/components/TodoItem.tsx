import React from 'react';

interface TodoItemProps {
  todo: { id: number; description: string; completed: boolean };
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, description: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newDescription, setNewDescription] = React.useState(todo.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newDescription);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-200 hover:bg-gray-100 transition-colors">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
          />
          <button onClick={handleSave} className="ml-2 p-2 bg-green-500 text-white rounded shadow hover:bg-green-600">
            Save
          </button>
        </>
      ) : (
        <>
          <span
            className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.description}
          </span>
          <button onClick={handleEdit} className="ml-2 p-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600">
            Edit
          </button>
          <button onClick={() => deleteTodo(todo.id)} className="ml-2 p-2 bg-red-500 text-white rounded shadow hover:bg-red-600">
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
