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
    <div className="bg-white shadow-lg rounded-lg p-6 w-full">
      <h1 className="text-2xl font-bold text-center mb-4 text-primary">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-primary">All Todos</h2>
        {todos.length === 0 ? (
          <p className="text-secondary text-center mt-4">No todos available.</p>
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
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-primary">Uncompleted Todos</h2>
        {filterTodos(false).map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-primary">Completed Todos</h2>
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
    </div>
  );
};

export default TodoList;
