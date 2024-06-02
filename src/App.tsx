import React from 'react';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
