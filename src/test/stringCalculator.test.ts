import { add } from './stringCalculator';

test('returns 0 for empty string', () => {
  expect(add('')).toBe(0);
});

test('returns number for single input', () => {
  expect(add('1')).toBe(1);
});

test('returns sum for two numbers', () => {
  expect(add('1,5')).toBe(6);
});

test('handles multiple numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
});

test('handles new lines as delimiter', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('handles custom delimiter', () => {
    expect(add('//;\n1;2')).toBe(3);
});

test('throws exception for negative numbers', () => {
    expect(() => add('1,-2,3,-5')).toThrow('negative numbers not allowed -2,-5');
});