import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoForm from '../components/TodoForm';

test('adds a new todo', () => {
  const addTodo = jest.fn();
  render(<TodoForm addTodo={addTodo} />);
  
  fireEvent.change(screen.getByPlaceholderText(/enter todo description/i), {
    target: { value: 'New Todo' },
  });
  fireEvent.click(screen.getByText(/add todo/i));
  
  expect(addTodo).toHaveBeenCalledWith('New Todo');
  expect(addTodo).toHaveBeenCalledTimes(1);
});
