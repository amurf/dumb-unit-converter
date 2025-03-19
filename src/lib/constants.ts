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
  {
    name: 'Ton',
    symbol: 'ton',
    type: 'weight',
    system: 'imperial',
    baseUnit: 'kg',
    conversionFactor: 907.185
  },
  {
    name: 'Grain',
    symbol: 'gr',
    type: 'weight',
    system: 'imperial',
    baseUnit: 'kg',
    conversionFactor: 0.0000647989
  },
  {
    name: 'Hundredweight',
    symbol: 'cwt',
    type: 'weight',
    system: 'imperial',
    baseUnit: 'kg',
    conversionFactor: 45.3592
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
    name: 'Meter',
    symbol: 'm',
    type: 'distance',
    system: 'metric',
    baseUnit: 'km',
    conversionFactor: 0.001,
    preferredForScaling: true
  },
  {
    name: 'Centimeter',
    symbol: 'cm',
    type: 'distance',
    system: 'metric',
    baseUnit: 'km',
    conversionFactor: 0.00001,
    preferredForScaling: true
  },
  {
    name: 'Mile',
    symbol: 'mi',
    type: 'distance',
    system: 'imperial',
    baseUnit: 'km',
    conversionFactor: 1.60934
  },
  {
    name: 'Yard',
    symbol: 'yd',
    type: 'distance',
    system: 'imperial',
    baseUnit: 'km',
    conversionFactor: 0.0009144
  },
  {
    name: 'Foot',
    symbol: 'ft',
    type: 'distance',
    system: 'imperial',
    baseUnit: 'km',
    conversionFactor: 0.0003048
  },
  {
    name: 'Inch',
    symbol: 'in',
    type: 'distance',
    system: 'imperial',
    baseUnit: 'km',
    conversionFactor: 0.0000254
  },
  {
    name: 'Furlong',
    symbol: 'fur',
    type: 'distance',
    system: 'imperial',
    baseUnit: 'km',
    conversionFactor: 0.201168
  },
  {
    name: 'League',
    symbol: 'lea',
    type: 'distance',
    system: 'imperial',
    baseUnit: 'km',
    conversionFactor: 4.82803
  },

  // Area units
  {
    name: 'Square Kilometer',
    symbol: 'km²',
    type: 'area',
    system: 'metric',
    baseUnit: 'km²',
    conversionFactor: 1,
    preferredForScaling: true
  },
  {
    name: 'Square Meter',
    symbol: 'm²',
    type: 'area',
    system: 'metric',
    baseUnit: 'km²',
    conversionFactor: 0.000001,
    preferredForScaling: true
  },
  {
    name: 'Square Mile',
    symbol: 'mi²',
    type: 'area',
    system: 'imperial',
    baseUnit: 'km²',
    conversionFactor: 2.58999
  },
  {
    name: 'Acre',
    symbol: 'ac',
    type: 'area',
    system: 'imperial',
    baseUnit: 'km²',
    conversionFactor: 0.00404686
  },
  {
    name: 'Square Yard',
    symbol: 'yd²',
    type: 'area',
    system: 'imperial',
    baseUnit: 'km²',
    conversionFactor: 0.000000836127
  },
  {
    name: 'Square Foot',
    symbol: 'ft²',
    type: 'area',
    system: 'imperial',
    baseUnit: 'km²',
    conversionFactor: 0.000000092903
  },

  // Speed units
  {
    name: 'Kilometers per Hour',
    symbol: 'km/h',
    type: 'speed',
    system: 'metric',
    baseUnit: 'km/h',
    conversionFactor: 1,
    preferredForScaling: true
  },
  {
    name: 'Meters per Second',
    symbol: 'm/s',
    type: 'speed',
    system: 'metric',
    baseUnit: 'km/h',
    conversionFactor: 3.6,
    preferredForScaling: true
  },
  {
    name: 'Miles per Hour',
    symbol: 'mph',
    type: 'speed',
    system: 'imperial',
    baseUnit: 'km/h',
    conversionFactor: 1.60934
  },
  {
    name: 'Feet per Second',
    symbol: 'ft/s',
    type: 'speed',
    system: 'imperial',
    baseUnit: 'km/h',
    conversionFactor: 1.09728
  },

  // Power units
  {
    name: 'Kilowatt',
    symbol: 'kW',
    type: 'power',
    system: 'metric',
    baseUnit: 'kW',
    conversionFactor: 1,
    preferredForScaling: true
  },
  {
    name: 'Watt',
    symbol: 'W',
    type: 'power',
    system: 'metric',
    baseUnit: 'kW',
    conversionFactor: 0.001,
    preferredForScaling: true
  },
  {
    name: 'Horsepower',
    symbol: 'hp',
    type: 'power',
    system: 'imperial',
    baseUnit: 'kW',
    conversionFactor: 0.7457
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
