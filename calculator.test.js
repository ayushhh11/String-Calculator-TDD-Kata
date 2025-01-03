import { sum } from "./calculator.js";

describe("Calculator tdd",()=>{

test('empty string sum',()=>{
    expect(sum('')).toBe(null);
})
});