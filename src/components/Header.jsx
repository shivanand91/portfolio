import React from 'react';

const PremiumComponent = () => {
  // Premium color palette
  const colors = {
    primary: 'bg-indigo-900 text-white',
    secondary: 'bg-amber-600 text-white',
    accent: 'bg-emerald-700 text-white',
    light: 'bg-gray-50 text-gray-900',
    dark: 'bg-gray-900 text-white'
  };

  return (
    <div className={`min-h-screen ${colors.light} transition-colors duration-300`}>

      {/* Hero section */}
      <section className={`${colors.dark} py-20 px-4`}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Exclusive Premium Experience</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover our curated collection of premium products designed for discerning tastes.
          </p>
          <button className={`${colors.secondary} px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors`}>
            Explore Collection
          </button>
        </div>
      </section>
    </div>
  );
};

export default PremiumComponent;