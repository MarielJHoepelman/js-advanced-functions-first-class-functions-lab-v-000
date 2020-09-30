// Code your solution in this file!

function returnFirstTwoDrivers(arrayOfDrivers){
  // let newArray = [arrayOfDrivers[0], arrayOfDrivers[1]];
  // return newArray;
  return arrayOfDrivers.slice(0, 2)
}

function returnLastTwoDrivers(arrayOfDrivers){
  // let index = arrayOfDrivers.length;
  // let newArray = [arrayOfDrivers[index - 2], arrayOfDrivers[index - 1]];
  // return newArray;
     return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (a) => (b) => { return a * b }; //ES6 notation

// const fareDoubler = (a) => { return a * 2 };
//
// const fareTripler = (a) => { return a * 3 };

  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
  return func(drivers);
}
