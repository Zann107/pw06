
function timevent(){

var datenow = new Date();
var datevent = new Date("May 25 15:30:00 2018");
var timer = (datevent - datenow) / 1000;
var jours = Math.floor(timer / (60 * 60 * 24));
var heures = Math.floor((timer - (jours * 60 * 60 * 24)) / (60 * 60));
var minutes = Math.floor((timer - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
var secondes = Math.floor(timer - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
timer = Math.abs(timer);


var day= document.getElementById("day");

day.innerHTML = jours;

var hour = document.getElementById("hour");

hour.innerHTML = heures;

var min = document.getElementById("min");

min.innerHTML = minutes;

var second = document.getElementById("second");

second.innerHTML = secondes;

var actualisation = setTimeout("timevent();", 1000);

}
timevent();
console.log(document);