var date= new Date(); // crete a date object

var hours = date.getHours();

var mins = date.getMinutes();

if(mins < 10){ // check if the mins is less than than 10 or double digit
	mins= mins;
}

var display = hours + ":" + mins; // concat the vars defined above
console.log(display); // log the current time in hours:mins