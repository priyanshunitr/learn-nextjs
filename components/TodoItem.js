"use client";

import { useState } from 'react';

export default function TodoItem({ todo, onToggle, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group flex items-center justify-between p-4 mb-3 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-0.5 ${todo.completed ? 'opacity-75 bg-gray-50' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 flex-1">
        <div className="relative">
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => onToggle(todo.id)}
            className="peer w-6 h-6 border-2 border-gray-300 rounded-lg cursor-pointer transition-all duration-300 checked:bg-blue-500 checked:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none appearance-none"
          />
          <svg className="absolute w-4 h-4 text-white top-1 left-1 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <span 
          className={`text-base font-medium transition-all duration-300 ${
            todo.completed 
              ? 'text-gray-400 line-through decoration-2 decoration-gray-300' 
              : 'text-gray-700'
          }`}
        >
          {todo.name}
        </span>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className={`p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none`}
        aria-label="Delete todo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
}
