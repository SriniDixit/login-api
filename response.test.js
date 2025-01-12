const greet = require('./response');

test("Greet should return Hello", ()=>{
    expect(greet()).toBe("Hello World")
})