var date = new Date("July 21, 1983 01:14:00");
var minutes = ('0' + date.getMinutes()).substr(-2);

var time = date.getHours() + ':' + minutes;
console.log(time);