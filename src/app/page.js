'use client';

import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [type, setType] = useState('dish');
  const [result, setResult] = useState('');

  // Expanded pairing dictionary
  const pairings = {
    'steak': 'Cabernet Sauvignon',
    'beef': 'Merlot',
    'lamb': 'Syrah',
    'pork': 'Zinfandel',
    'chicken': 'Chardonnay',
    'roast chicken': 'Viognier',
    'duck': 'Merlot',
    'turkey': 'Pinot Noir',
    'fish': 'Sauvignon Blanc',
    'salmon': 'Pinot Noir',
    'tuna': 'Chablis',
    'shrimp': 'Vermentino',
    'scallops': 'Albariño',
    'lobster': 'Chardonnay',
    'sushi': 'Riesling',
    'pizza': 'Barbera',
    'spaghetti': 'Chianti',
    'baked ziti': 'Montepulciano',
    'pasta': 'Sangiovese',
    'risotto': 'Soave',
    'eggs': 'Prosecco',
    'omelette': 'Prosecco',
    'cheese': 'Chardonnay',
    'chocolate': 'Port',
    'cake': 'Moscato d’Asti',
    'dessert': 'Sauternes',
    'burger': 'Malbec',
    'french fries': 'Cava',
    'bbq': 'Shiraz',
    'curry': 'Gewürztraminer',
    'spicy': 'Riesling',
    'mushroom': 'Pinot Noir',
    'veal': 'Nebbiolo',
    'foie gras': 'Sauternes',
    'truffle': 'Barolo',
    'tuna fish': 'Albariño'
  };

  // Reverse lookup: wine -> array of dishes
  const reversePairings = Object.entries(pairings).reduce((acc, [dish, wine]) => {
    if (!acc[wine]) acc[wine] = [];
    acc[wine].push(dish);
    return acc;
  }, {});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === 'dish') {
      const key = Object.keys(pairings).find((k) =>
        input.toLowerCase().includes(k)
      );
      if (key) {
        setResult(`🍷 A perfect wine pairing for "${input}" is **${pairings[key]}**.`);
      } else {
        setResult(`❌ Sorry, I don't have a pairing for "${input}" yet.`);
      }
    } else {
      const matches = Object.entries(reversePairings).find(([wine]) =>
        input.toLowerCase().includes(wine.toLowerCase())
      );
      if (matches) {
        setResult(
          `🍽️ Delicious dishes to enjoy with "${input}" include: ${matches[1]
            .map((dish) => `**${dish}**`)
            .join(', ')}.`
        );
      } else {
        setResult(`❌ Sorry, I don't have dish suggestions for "${input}" yet.`);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 backdrop-blur-lg bg-white/60 border border-gray-200 shadow-xl p-8 rounded-2xl w-full transition duration-300"
      >
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center">
          Discover Your Perfect Pairing
        </h1>

        <div className="flex flex-col gap-2">
          <label className="font-medium text-gray-700">
            What would you like to enter?
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="dish">Dish</option>
            <option value="wine">Wine</option>
          </select>
        </div>

        <input
          type="text"
          placeholder={`Enter your ${type}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-2 rounded-lg hover:scale-105 transition-transform"
        >
          Get Pairing
        </button>
      </form>

      {result && (
        <div
          className="mt-6 p-6 max-w-xl w-full bg-gradient-to-br from-purple-50 to-pink-50 border-l-4 border-purple-400 text-gray-800 rounded-lg shadow transition-opacity duration-500 animate-fadeIn"
          dangerouslySetInnerHTML={{ __html: result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
        />
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
