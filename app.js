let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}

function fromEuroToDollar(euros){
    return euros * oneEuroIs.USD
}

function fromYenToPound(yen){
    return yen / oneEuroIs.JPY * oneEuroIs.GBP 
}

function fromDollarToYen(dollar){
    return dollar / oneEuroIs.USD * oneEuroIs.JPY
}

module.exports = {fromEuroToDollar,fromYenToPound,fromDollarToYen}

console.log(fromDollarToYen(1)) 