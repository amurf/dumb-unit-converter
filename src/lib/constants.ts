import { Unit } from './types';

export const UNITS: Unit[] = [
  // Weight units
  {
    name: 'Gram',
    symbol: 'g',
    type: 'weight',
    system: 'metric',
    baseUnit: 'kg',
    conversionFactor: 0.001,
    preferredForScaling: true
  },
  {
    name: 'Kilogram',
    symbol: 'kg',
    type: 'weight',
    system: 'metric',
    baseUnit: 'kg',
    conversionFactor: 1,
    preferredForScaling: true
  },
  {
    name: 'Milligram',
    symbol: 'mg',
    type: 'weight',
    system: 'metric',
    baseUnit: 'kg',
    conversionFactor: 0.000001,
    preferredForScaling: true
  },
  {
    name: 'Ounce',
    symbol: 'oz',
    type: 'weight',
    system: 'imperial',
    baseUnit: 'kg',
    conversionFactor: 0.0283495
  },
  {
    name: 'Pound',
    symbol: 'lb',
    type: 'weight',
    system: 'imperial',
    baseUnit: 'kg',
    conversionFactor: 0.453592
  },

  // Volume units
  {
    name: 'Milliliter',
    symbol: 'ml',
    type: 'volume',
    system: 'metric',
    baseUnit: 'ml',
    conversionFactor: 1,
    preferredForScaling: true
  },
  {
    name: 'Liter',
    symbol: 'l',
    type: 'volume',
    system: 'metric',
    baseUnit: 'ml',
    conversionFactor: 1000,
    preferredForScaling: true
  },
  {
    name: 'Fluid Ounce',
    symbol: 'fl oz',
    type: 'volume',
    system: 'imperial',
    baseUnit: 'ml',
    conversionFactor: 29.5735
  },
  {
    name: 'Cup',
    symbol: 'cup',
    type: 'volume',
    system: 'imperial',
    baseUnit: 'ml',
    conversionFactor: 236.588
  },
  {
    name: 'Pint',
    symbol: 'pt',
    type: 'volume',
    system: 'imperial',
    baseUnit: 'ml',
    conversionFactor: 473.176
  },
  {
    name: 'Quart',
    symbol: 'qt',
    type: 'volume',
    system: 'imperial',
    baseUnit: 'ml',
    conversionFactor: 946.353
  },
  {
    name: 'Gallon',
    symbol: 'gal',
    type: 'volume',
    system: 'imperial',
    baseUnit: 'ml',
    conversionFactor: 3785.41
  },
  {
    name: 'Tablespoon',
    symbol: 'tbsp',
    type: 'volume',
    system: 'imperial',
    baseUnit: 'ml',
    conversionFactor: 14.7868
  },
  {
    name: 'Teaspoon',
    symbol: 'tsp',
    type: 'volume',
    system: 'imperial',
    baseUnit: 'ml',
    conversionFactor: 4.92892
  },

  // Temperature units
  {
    name: 'Celsius',
    symbol: '°C',
    type: 'temperature',
    system: 'metric',
    baseUnit: '°C',
    conversionFactor: 1,
    preferredForScaling: true
  },
  {
    name: 'Fahrenheit',
    symbol: '°F',
    type: 'temperature',
    system: 'imperial',
    baseUnit: '°C',
    conversionFactor: 1
  },

  // Distance units
  {
    name: 'Kilometer',
    symbol: 'km',
    type: 'distance',
    system: 'metric',
    baseUnit: 'km',
    conversionFactor: 1,
    preferredForScaling: true
  },
  {
    name: 'Mile',
    symbol: 'mi',
    type: 'distance',
    system: 'imperial',
    baseUnit: 'km',
    conversionFactor: 1.60934
  }
];

export const getUnitBySymbol = (symbol: string): Unit | undefined => {
  return UNITS.find(unit => unit.symbol.toLowerCase() === symbol.toLowerCase());
};

export const getUnitsByType = (type: string): Unit[] => {
  return UNITS.filter(unit => unit.type === type);
};

export const getPreferredUnit = (type: string): Unit | undefined => {
  return UNITS.find(unit => unit.type === type && unit.preferredForScaling);
};
