// Code your solution in this file!
const drivers =['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(matFactor){
    return function (fare){
        return fare * matFactor
    }
}

const fareDoubler = function(fare){
    return fare * 2
}

const fareTripler = function(fare){
    return fare * 3
}

function selectDifferentDrivers(drivers, selectingDrivers){
   return selectingDrivers(drivers)
}