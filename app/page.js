"use client";

import { useState } from 'react';
import initialTodos from '../todos.json';
import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';

export default function Home() {
  // Normalize initial data: map status to completed boolean if needed
  const normalizedTodos = initialTodos.map(t => ({
    ...t,
    completed: t.status === 'completed'
  }));

  const [todos, setTodos] = useState(normalizedTodos);

//​​​​‌============================== HANDLE TOGGLE ===============================

  const handleToggle = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

//​​​​‌============================== HANDLE DELETE ===============================

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

//​​​​‌================================ HANDLE ADD ================================

  const handleAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      name: text,
      completed: false,
      status: 'pending' 
    };
    setTodos([newTodo, ...todos]);
  };

  const activeTodos = todos.filter(t => !t.completed);
  const completedTodos = todos.filter(t => t.completed);

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-y-[-50%]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl translate-y-[50%]"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
            Manage your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Tasks</span>
          </h2>
          <p className="text-gray-500 text-lg">Stay organized and boost your productivity</p>
        </div>

        <AddTodo onAdd={handleAdd} />

        <div className="space-y-8">
          {/* Active Todos */}
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-4 pl-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              To Do — {activeTodos.length}
            </h3>
            
            {activeTodos.length === 0 ? (
               <div className="text-center py-10 text-gray-400 italic">
                 No tasks pending. Enjoy your day!
               </div>
            ) : (
              <div className="space-y-1">
                {activeTodos.map(todo => (
                  <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onToggle={handleToggle} 
                    onDelete={handleDelete} 
                  />
                ))}
              </div>
            )}
          </div>

          {/* Completed Todos */}
          {completedTodos.length > 0 && (
            <div className="opacity-90">
              <h3 className="text-sm uppercase tracking-wider text-gray-400 font-bold mb-4 pl-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Completed — {completedTodos.length}
              </h3>
              <div className="space-y-1">
                {completedTodos.map(todo => (
                  <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onToggle={handleToggle} 
                    onDelete={handleDelete} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}