import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (description: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;
    addTodo(description);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter todo description"
        className="flex-1 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
