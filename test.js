const { fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js')

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745);
})

test("One Yen should be 0.0055 Pound", function() {
    const pound = fromYenToPound(3.5);
    expect(pound).toBe(0.0194);
})

test("One Dollar should be 146.26 Yen", function() {
    const yen = fromDollarToYen(3.5);
    expect(yen).toBe(511.9156); 
})
