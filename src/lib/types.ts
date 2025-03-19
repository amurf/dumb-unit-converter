export type MeasurementType = 'volume' | 'weight' | 'temperature' | 'distance' | 'area' | 'speed' | 'power';

export interface Unit {
  name: string;
  symbol: string;
  type: MeasurementType;
  system: 'metric' | 'imperial';
  baseUnit: string;
  conversionFactor: number;
  preferredForScaling?: boolean;
}

export interface ConversionResult {
  value: number;
  formattedValue: string;
  unit: Unit;
}
