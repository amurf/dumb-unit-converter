import React from 'react';
import UnitConverter from '@/components/unit/converter';

export default function Home() {
  return (
    <main className="page-container">
      <div className="page-content">
        <h1 className="heading">Dumb Unit Converter</h1>
        <p className="subheading">
          Convert any unit to the smartest unit
        </p>
        <UnitConverter />
      </div>
    </main>
  );
}
