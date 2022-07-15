const mul = require("./index");

const  {test,expect }= require("@jest/globals");

test("Should work on all positive number", function(){
    expect(mul(2.5,2)).toBe(5.0);
    expect(mul(0,0)).toBe(0);
    expect(mul(100,0)).toBe(0);
});