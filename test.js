const {fromEuroToDollar, fromEuroToYen, fromEuroToPound } = require('./app.js')


test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
     expect(fromEuroToDollar(3.5)).toBe(3.745);
})
test("One euro should be 156.5 yen", function() {
    const yen = fromEuroToYen(3.5)
    const expected = 3.5 * 156.5
    expect(fromEuroToYen(3.5)).toBe(547.75)
})
test("One euro should be 0.87 pounds", function() {
    const yen = fromEuroToPound(3.5)
    const expected = 3.5 * 0.87
    expect(fromEuroToPound(3.5)).toBe(3.045)
})

