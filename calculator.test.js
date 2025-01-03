import { sum } from "./calculator.js";

describe("Calculator tdd",()=>{

test('empty string sum',()=>{
    expect(sum('')).toBe(0);
})

test('sum of one number',()=>{
    expect(sum('1')).toBe(1);
})

test('sum of 2 and 3 should be 5', () => {
    expect(sum('2,3')).toBe(5);
});

test('sum using different delimiters', () => {
    expect(sum(';\n1;2')).toBe(3);
});

test('sum using different delimiters', () => {
    expect(sum(';\n1;2')).toBe(3);
});


});