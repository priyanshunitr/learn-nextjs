"use client";

import { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 relative z-10">
      <div 
        className={`relative flex items-center bg-white rounded-2xl p-2 shadow-lg transition-all duration-300 border ${
          isFocused ? 'ring-4 ring-blue-100 border-blue-400 transform scale-[1.01]' : 'border-gray-100'
        }`}
      >
        <div className="pl-4 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="What needs to be done?"
          className="flex-grow px-4 py-3 text-lg bg-transparent text-gray-700 placeholder-gray-400 outline-none"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
        >
          Add
        </button>
      </div>
    </form>
  );
}
