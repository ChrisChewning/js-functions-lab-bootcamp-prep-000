
function happyHolidays() {
  return "Happy holidays!" 
}

function happyHolidaysTo(name) {
  return "Happy holidays, ${name}!"  
}

happyHolidaysTo("Chris")

function happyHolidayTo(holiday, name) {
  return ('Happy ${holiday}, ${name}!')
}

happyHolidayTo("Easter", "Chris")

function holidayCountdown(days, holiday) {
 return "It's ${days} days until ${holiday}!"   
}

holidayCountdown("17", "Easter")
