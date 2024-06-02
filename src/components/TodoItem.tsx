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
    <div className="flex flex-col md:flex-row items-center justify-between p-2 border-b border-secondary hover:bg-gray-100 transition-colors">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="flex-1 p-2 border border-secondary rounded shadow-sm focus:outline-none focus:border-accent text-primary bg-white"
          />
          <button onClick={handleSave} className="ml-2 p-2 bg-green-500 text-white rounded shadow hover:bg-green-600">
            Save
          </button>
        </>
      ) : (
        <>
          <span
            className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-secondary' : 'text-primary'}`}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.description}
          </span>
          <div className="flex gap-2 mt-2 md:mt-0">
            <button onClick={handleEdit} className="p-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600">
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="p-2 bg-red-500 text-white rounded shadow hover:bg-red-600">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
