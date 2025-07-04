'use client';

import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [type, setType] = useState('dish');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'dish') {
      setResult(`A great wine pairing for "${input}" is Pinot Noir.`);
    } else {
      setResult(`A delicious dish pairing for "${input}" is roast duck.`);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-gray-50 p-6 rounded-lg shadow"
      >
        <label className="font-semibold">What would you like to enter?</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="dish">Dish</option>
          <option value="wine">Wine</option>
        </select>
        <input
          type="text"
          placeholder={`Enter your ${type}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
        >
          Get Pairing
        </button>
      </form>
      {result && (
        <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-400">
          {result}
        </div>
      )}
    </div>
  );
}
