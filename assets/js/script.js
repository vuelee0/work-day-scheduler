//  add event listener ti targeet button for save textarea content value

const todaysDate = moment().format("dddd, MMMM Do YYYY"); {
    document.getElementById("currentDay").innerHTML = todaysDate;
};

    
// use moment to get current time, converting it to military time, 
//  check method: is before, is after
// retrieve time block and check it against current time
// save it: localStorage setitem to save things, getItem to retrieve things