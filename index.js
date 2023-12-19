// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(a) {
    return function(b) {
        return a*b
    } 
}

const fareDoubler = function(f) {
    return createFareMultiplier(f)(2)
}

const fareTripler = function(f) {
    return createFareMultiplier(f)(3)
}

const selectDifferentDrivers = function(driversArray, func) {
    return func(driversArray)
}