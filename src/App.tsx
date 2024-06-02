import React from 'react';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <TodoList />
    </div>
  );
};

export default App;
