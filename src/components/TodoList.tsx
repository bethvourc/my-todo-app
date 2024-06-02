import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (description: string) => {
    const newTodo = { id: Date.now(), description, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, description: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, description } : todo
      )
    );
  };

  const filterTodos = (completed: boolean) => {
    return todos.filter((todo) => todo.completed === completed);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <h2 className="text-xl font-semibold mt-4">All Todos</h2>
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center mt-4">No todos available.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      )}
      <h2 className="text-xl font-semibold mt-4">Uncompleted Todos</h2>
      {filterTodos(false).map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
      <h2 className="text-xl font-semibold mt-4">Completed Todos</h2>
      {filterTodos(true).map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
