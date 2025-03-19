import { convert } from '../conversion';

describe('Unit Conversion Tests', () => {
  // Weight conversions
  describe('Weight Conversions', () => {
    test('ounces to grams', () => {
      const result = convert(16, 'oz');
      expect(result[0].value).toBeCloseTo(453.592, 3);
      expect(result[0].unit.symbol).toBe('g');
    });

    test('pounds to grams', () => {
      const result = convert(1, 'lb');
      expect(result[0].value).toBeCloseTo(453.592, 3);
      expect(result[0].unit.symbol).toBe('g');
    });

    test('pounds to kilograms', () => {
      const result = convert(2.20462, 'lb');
      expect(result[0].value).toBeCloseTo(1, 3);
      expect(result[0].unit.symbol).toBe('kg');
    });
  });

  // Volume conversions
  describe('Volume Conversions', () => {
    test('fluid ounces to milliliters', () => {
      const result = convert(1, 'fl oz');
      expect(result[0].value).toBeCloseTo(29.5735, 3);
      expect(result[0].unit.symbol).toBe('ml');
    });

    test('cups to milliliters', () => {
      const result = convert(1, 'cup');
      expect(result[0].value).toBeCloseTo(236.588, 3);
      expect(result[0].unit.symbol).toBe('ml');
    });

    test('gallons to liters', () => {
      const result = convert(1, 'gal');
      expect(result[0].value).toBeCloseTo(3.78541, 3);
      expect(result[0].unit.symbol).toBe('l');
    });
  });

  // Temperature conversions
  describe('Temperature Conversions', () => {
    test('Fahrenheit to Celsius', () => {
      const result = convert(32, '°F');
      expect(result[0].value).toBeCloseTo(0, 3);
      expect(result[0].unit.symbol).toBe('°C');
    });

    test('Fahrenheit to Celsius (boiling point)', () => {
      const result = convert(212, '°F');
      expect(result[0].value).toBeCloseTo(100, 3);
      expect(result[0].unit.symbol).toBe('°C');
    });

    test('Fahrenheit to Celsius (room temperature)', () => {
      const result = convert(68, '°F');
      expect(result[0].value).toBeCloseTo(20, 3);
      expect(result[0].unit.symbol).toBe('°C');
    });
  });

  // Distance conversions
  describe('Distance Conversions', () => {
    test('miles to kilometers', () => {
      const result = convert(1, 'mi');
      expect(result[0].value).toBeCloseTo(1.60934, 3);
      expect(result[0].unit.symbol).toBe('km');
    });

    test('yards to kilometers', () => {
      const result = convert(1000, 'yd');
      expect(result[0].value).toBeCloseTo(0.9144, 3);
      expect(result[0].unit.symbol).toBe('km');
    });

    test('feet to meters', () => {
      const result = convert(3.28084, 'ft');
      expect(result[0].value).toBeCloseTo(1, 3);
      expect(result[0].unit.symbol).toBe('m');
    });

    test('inches to centimeters', () => {
      const result = convert(1, 'in');
      expect(result[0].value).toBeCloseTo(2.54, 3);
      expect(result[0].unit.symbol).toBe('cm');
    });
  });

  // Area conversions
  describe('Area Conversions', () => {
    test('square miles to square kilometers', () => {
      const result = convert(1, 'mi²');
      expect(result[0].value).toBeCloseTo(2.58999, 3);
      expect(result[0].unit.symbol).toBe('km²');
    });

    test('acres to square meters', () => {
      const result = convert(1, 'ac');
      expect(result[0].value).toBeCloseTo(4046.86, 3);
      expect(result[0].unit.symbol).toBe('m²');
    });

    test('square yards to square meters', () => {
      const result = convert(1, 'yd²');
      expect(result[0].value).toBeCloseTo(0.836127, 3);
      expect(result[0].unit.symbol).toBe('m²');
    });

    test('square feet to square meters', () => {
      const result = convert(10.764, 'ft²');
      expect(result[0].value).toBeCloseTo(1, 3);
      expect(result[0].unit.symbol).toBe('m²');
    });
  });

  // Speed conversions
  describe('Speed Conversions', () => {
    test('miles per hour to kilometers per hour', () => {
      const result = convert(1, 'mph');
      expect(result[0].value).toBeCloseTo(1.60934, 3);
      expect(result[0].unit.symbol).toBe('km/h');
    });

    test('feet per second to meters per second', () => {
      const result = convert(3.28084, 'ft/s');
      expect(result[0].value).toBeCloseTo(1, 3);
      expect(result[0].unit.symbol).toBe('m/s');
    });

    test('meters per second to kilometers per hour', () => {
      const result = convert(1, 'm/s');
      expect(result[0].value).toBeCloseTo(3.6, 3);
      expect(result[0].unit.symbol).toBe('km/h');
    });
  });

  // Power conversions
  describe('Power Conversions', () => {
    test('horsepower to kilowatts', () => {
      const result = convert(1, 'hp');
      expect(result[0].value).toBeCloseTo(0.7457, 3);
      expect(result[0].unit.symbol).toBe('kW');
    });

    test('watts to kilowatts', () => {
      const result = convert(1000, 'W');
      expect(result[0].value).toBeCloseTo(1, 3);
      expect(result[0].unit.symbol).toBe('kW');
    });
  });

  // Additional weight conversions
  describe('Additional Weight Conversions', () => {
    test('tons to kilograms', () => {
      const result = convert(1, 'ton');
      expect(result[0].value).toBeCloseTo(907.185, 3);
      expect(result[0].unit.symbol).toBe('kg');
    });

    test('grains to grams', () => {
      const result = convert(15.4324, 'gr');
      expect(result[0].value).toBeCloseTo(1, 3);
      expect(result[0].unit.symbol).toBe('g');
    });

    test('hundredweight to kilograms', () => {
      const result = convert(1, 'cwt');
      expect(result[0].value).toBeCloseTo(45.3592, 3);
      expect(result[0].unit.symbol).toBe('kg');
    });
  });

  // Edge cases and error handling
  describe('Edge Cases and Error Handling', () => {
    test('handles zero values', () => {
      const result = convert(0, '°F');
      expect(result[0].value).toBeCloseTo(-17.7778, 4);
      expect(result[0].unit.symbol).toBe('°C');
    });

    test('handles negative values', () => {
      const result = convert(-40, '°F');
      expect(result[0].value).toBeCloseTo(-40, 3);
      expect(result[0].unit.symbol).toBe('°C');
    });

    test('handles large values', () => {
      const result = convert(1000, 'mi');
      expect(result[0].value).toBeCloseTo(1609.34, 3);
      expect(result[0].unit.symbol).toBe('km');
    });

    test('handles decimal values', () => {
      const result = convert(0.5, 'lb');
      expect(result[0].value).toBeCloseTo(226.796, 3);
      expect(result[0].unit.symbol).toBe('g');
    });
  });

  // Unit selection tests
  describe('Unit Selection Tests', () => {
    test('selects appropriate unit for weight', () => {
      const result = convert(1000, 'oz');
      expect(result[0].unit.symbol).toBe('kg');
    });

    test('selects appropriate unit for volume', () => {
      const result = convert(1000, 'fl oz');
      expect(result[0].unit.symbol).toBe('l');
    });

    test('selects appropriate unit for distance', () => {
      const result = convert(100, 'mi');
      expect(result[0].unit.symbol).toBe('km');
    });
  });
});

