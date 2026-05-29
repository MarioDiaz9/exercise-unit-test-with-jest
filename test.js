const { fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js')

test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07, 2)
})

test("One Yen should be 0.0055 Pound", function() {
    expect(fromYenToPound(1000)).toBeCloseTo(5.559, 3)
})

test("One Dollar should be 146.26 Yen", function() {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2)
})
