import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-purple-900 text-white min-h-screen flex flex-col">
      <header className="py-10 text-center">
        <h1 className="text-5xl font-bold">Welcome to Psychic Services</h1>
        <p className="mt-4 text-lg">Unlock the mysteries of your future.</p>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-purple-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-semibold">Psychic Reading</h2>
            <p className="mt-2">Connect with our gifted psychics to gain insights.</p>
          </div>
          <div className="bg-purple-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-semibold">Tarot Reading</h2>
            <p className="mt-2">Discover your path through the art of Tarot.</p>
          </div>
          <div className="bg-purple-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-semibold">Spellwork</h2>
            <p className="mt-2">Harness the power of magic for your needs.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
