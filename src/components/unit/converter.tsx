'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { convert } from '@/lib/conversion';
import { UNITS } from '@/lib/constants';
import { Unit, ConversionResult } from '@/lib/types';

export default function UnitConverter() {
  const [value, setValue] = useState<string>('');
  const [detectedUnit, setDetectedUnit] = useState<string>('');
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState<string>('');
  const [showLegend, setShowLegend] = useState(false);
  const [debouncedValue, setDebouncedValue] = useState<string>('');

  // Debounce the input value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 250);

    return () => clearTimeout(timer);
  }, [value]);

  // Handle the debounced value
  useEffect(() => {
    if (debouncedValue.trim()) {
      const { unit, error } = detectUnit(debouncedValue);
      setDetectedUnit(unit);
      setError(error || '');

      if (unit) {
        const numericValue = parseFloat(debouncedValue.replace(/[^0-9.-]/g, ''));
        if (!isNaN(numericValue)) {
          const result = convert(numericValue, unit);
          setResult(result[0]);
          setError(''); // Clear any previous errors
        } else {
          setResult(null);
        }
      } else {
        setResult(null);
      }
    } else {
      setDetectedUnit('');
      setError('');
      setResult(null);
    }
  }, [debouncedValue]);

  const detectUnit = (input: string): { unit: string; error?: string } => {
    // Remove any whitespace and convert to lowercase for matching
    const cleanInput = input.trim().toLowerCase();

    // Check for metric units first
    const metricUnits = ['km', 'm', 'cm', 'kg', 'g', 'mg', 'l', 'ml', '°c'];
    const lastWord = cleanInput.split(/\s+/).pop();
    if (lastWord && metricUnits.some(metric => lastWord.endsWith(metric))) {
      return {
        unit: '',
        error: `We refuse to convert back to those archaic imperial units. Join the rest of the world and embrace the metric system! (Unless you're measuring your freedom, which is infinite and can't be measured in any system. Also, we're not responsible for any confusion caused by using base-12 measurements)`
      };
    }

    // Filter out units that are their own base unit
    const convertibleUnits = UNITS.filter(unit => unit.symbol !== unit.baseUnit);

    // Try to find a matching unit symbol
    const unit = convertibleUnits.find(u => {
      const symbol = u.symbol.toLowerCase();
      // Check if the input ends with the unit symbol
      // For Fahrenheit and Celsius, check for both with and without degree symbol
      if (symbol === '°f') {
        return cleanInput.endsWith('f') || cleanInput.endsWith('°f');
      }
      if (symbol === '°c') {
        return cleanInput.endsWith('c') || cleanInput.endsWith('°c');
      }
      return cleanInput.endsWith(symbol);
    });

    if (!unit) {
      // Try to match against unit names as well
      const unitByName = convertibleUnits.find(u => {
        const name = u.name.toLowerCase();
        return cleanInput.endsWith(name);
      });

      if (unitByName) {
        return { unit: unitByName.symbol };
      }

      // If no unit is found, check if there's any text at the end that might be a unit
      if (lastWord && lastWord !== cleanInput) {
        return {
          unit: '',
          error: `Unknown unit: ${lastWord}. Try using a standard unit symbol (e.g., F/°F, C/°C, lb, fl oz)`
        };
      }
    }

    return { unit: unit?.symbol || '' };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const getUnitPatterns = (unit: Unit) => {
    const patterns = new Set<string>();

    // Add the symbol
    patterns.add(unit.symbol);

    // Add the name if it exists
    if (unit.name) {
      patterns.add(unit.name.toLowerCase());
    }

    // Special cases for temperature units
    if (unit.symbol === '°F') {
      patterns.add('F');
      patterns.add('fahrenheit');
    }
    if (unit.symbol === '°C') {
      patterns.add('C');
      patterns.add('celsius');
    }

    return Array.from(patterns).join(', ');
  };

  const sortedUnits = [...UNITS]
    .filter(unit => unit.symbol !== unit.baseUnit) // Filter out units that are their own base unit
    .sort((a, b) => (a.name || a.symbol).localeCompare(b.name || b.symbol));

  return (
    <div className="container">
      <div className="form-group">
        <div className="input-group">
          <input
            type="text"
            className="input"
            value={value}
            onChange={handleInputChange}
            placeholder="Enter value with unit (e.g. 15F, 2.5lb, 1 fl oz)"
          />
          {detectedUnit && (
            <div className="unit-display">
              {UNITS.find(u => u.symbol === detectedUnit)?.name || detectedUnit}
            </div>
          )}
        </div>

        <div className="error-container">
          {error && <p className="error">{error}</p>}
        </div>
      </div>

      <div className="result-container">
        {result && !error && (
          <div className="result-card">
            <p className="result-value">{result.formattedValue}</p>
          </div>
        )}
      </div>

      <button
        className="legend-toggle"
        onClick={() => setShowLegend(!showLegend)}
        aria-label={showLegend ? "Close units help" : "Show available units"}
        aria-expanded={showLegend}
        aria-controls="units-legend"
      >
        {showLegend ? '×' : '?'}
      </button>

      <div
        className={`legend-overlay ${showLegend ? 'open' : ''}`}
        onClick={() => setShowLegend(false)}
        aria-hidden="true"
      />

      <div
        id="units-legend"
        className={`legend-container ${showLegend ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Available units"
      >
        <div className="legend-header">
          <span className="legend-title">Available Units</span>
        </div>
        <div className="legend-content">
          {sortedUnits.map((unit) => (
            <div key={unit.symbol} className="legend-item">
              <span className="legend-unit">{unit.name || unit.symbol}</span>
              <span className="legend-patterns">{getUnitPatterns(unit)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
