import { sum } from "./calculator.js";

describe("Calculator tdd", () => {
    test('empty string sum', () => {
        expect(sum('')).toBe(0);
    });

    test('sum of one number', () => {
        expect(sum('1')).toBe(1);
    });

    test('sum of 2 and 3 should be 5', () => {
        expect(sum('2,3')).toBe(5);
    });

    test('sum using different delimiters', () => {
        expect(sum('//;\n1;2')).toBe(3);;
    });


    test('sum with newline as delimiter', () => {
        expect(sum('1\n2,3')).toBe(6);
    });

    test('sum with custom delimiter specified', () => {
        expect(sum('//|\n1|2|3')).toBe(6);
    });

    test('negative numbers throw an error', () => {
        expect(() => sum('1,-2,-3')).toThrow("Negative numbers not allowed: -2, -3");
    });

    test('handles multi-digit numbers', () => {
        expect(sum('10,20,30')).toBe(60);
    });

    test('ignores empty and invalid tokens', () => {
        expect(sum('1,,2\n,3')).toBe(6);
    });
});