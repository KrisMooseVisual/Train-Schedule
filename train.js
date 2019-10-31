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

// Assumptions
var tFrequency = 3;

// Time is 3:30 AM
var firstTime = "03:30";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
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