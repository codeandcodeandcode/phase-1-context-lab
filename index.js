/* Your Code Here */
// Added createEmployeeRecord function
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}

// Added createEmployeeRecords function 
function createEmployeeRecords(arr) {
    let lgArr = [];
    arr.forEach(a => {
        let t = createEmployeeRecord(a)
        lgArr.push(t)
    });
    return lgArr;
}

// Added createTimeInEvent function 
function createTimeInEvent(obj, dt) {
    let d = dt.split(" ");
    let to = {
        type: "TimeIn",
        hour: d[1],
        date: d[0],
    }
    obj.timeInEvents.push(to)
    return obj;
}

//Added createTimeOutEvent function
function createTimeOutEvent(obj, dt) {
    let d = dt.split(" ");
    let to = {
        type: "TimeOut",
        hour: d[1],
        date: d[0],
    }
    obj.timeOutEvents.push(to)
    return obj;
}

//Added hoursWorkedOnDate func
function hoursWorkedOnDate(obj, dt) {
    let a  = obj.timeInEvents.find(a=>a.date === dt);
    let b  = obj.timeOutEvents.find(a=>a.date === dt);
    return (b.hour - a.hour) / 100;
}

//Added wagesEarnedOnDate function
function wagesEarnedOnDate(obj, dt) {
    let c = Math.floor(hoursWorkedOnDate(obj, dt) * obj.payPerHour);
    return c;










/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

Added wagesEarnedOnDate function
function wagesEarnedOnDate(obj, dt) {
    let c = Math.floor(hoursWorkedOnDate(obj, dt) * obj.payPerHour);
    return c;
}

