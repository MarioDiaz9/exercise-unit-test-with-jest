let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}
let oneYenIs = {
    "GBP": 0.005542857142857143
}
let oneDollarIs = {
    "JPY": 146.2616
}

function fromEuroToDollar(euros){
    return euros * oneEuroIs.USD
}

function fromYenToPound(yen){
    return yen * oneYenIs.GBP
}

function fromDollarToYen(dollar){
    return Math.round(dollar * oneDollarIs.JPY * 10000) / 10000;
}

module.exports = {fromEuroToDollar,fromYenToPound,fromDollarToYen}