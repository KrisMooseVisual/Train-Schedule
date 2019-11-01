$(document).ready(function(){



var firebaseConfig = {
    apiKey: "AIzaSyBYITarIGkIw6HFkU42QqWlySlsGR9J3Y8",
    authDomain: "the-moose-app.firebaseapp.com",
    databaseURL: "https://the-moose-app.firebaseio.com",
    projectId: "the-moose-app",
    storageBucket: "the-moose-app.appspot.com",
    messagingSenderId: "768484475686",
    appId: "1:768484475686:web:f095784483a6c4f570f7e7"
};
// Firebase initialization
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#submitBtn").on("click", function(event){
    event.preventDefault();
});

//train variables and values
var trainName = $("#acLocal", "#acExpress", "#wilmingtonDe", "#newarkDe", "#trentonNj", "#bfBridge", "#sicNj").val().trim();
var destination = $("#atlanticCity", "#atlanticCityNj", "#wilmington", "#newark", "#trenton", "#camden", "#SeaIsleCity").val().trim();


// Assumptions
var frequency = $("#freeQuincy").val().trim();

//4:00 PM
var firstTime = "16:00";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:MM").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));