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
    <main className="min-h-screen bg-cream flex flex-col justify-center items-center px-6 py-12">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-10">
        <h1 className="text-4xl font-heading text-burgundy mb-6 text-center">
          Discover Your Perfect Wine & Dish Pairing
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="font-semibold text-charcoal">Choose what to enter:</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border border-charcoal rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition"
          >
            <option value="dish">Dish</option>
            <option value="wine">Wine</option>
          </select>

          <label htmlFor="inputValue" className="font-semibold text-charcoal">
            Enter your {type}
          </label>
          <input
            id="inputValue"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Type a ${type}...`}
            required
            className="border border-charcoal rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold transition"
          />

          <button
            type="submit"
            className="bg-burgundy text-cream py-3 rounded font-semibold hover:bg-gold hover:text-charcoal transition-colors duration-300"
          >
            Get Pairing
          </button>
        </form>

        {result && (
          <div className="mt-8 p-6 bg-green-50 border-l-8 border-green-400 text-green-800 font-semibold rounded shadow">
            {result}
          </div>
        )}
      </div>
    </main>
  );
}
