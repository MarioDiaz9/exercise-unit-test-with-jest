
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euros){
    return euros * oneEuroIs.USD
}

function fromEuroToYen(euros){
    return euros * oneEuroIs.JPY
}

function fromEuroToPound(euros){
    return euros * oneEuroIs.GBP
}

module.exports = {fromEuroToDollar,fromEuroToYen,fromEuroToPound}