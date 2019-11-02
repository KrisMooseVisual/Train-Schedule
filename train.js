

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

//database reference variable
var database = firebase.database();

//variables connected to the HTML id
var nameOfTrain;
var destination;
var timeOfTrain;
var frequencyOfTrain;

$("#submitBtn").on("click", function (event) {
    event.preventDefault();

    nameOfTrain = $("#inputName").val();
    console.log(nameOfTrain);
    destination = $("#inputPlace").val();
    console.log(destination);
    timeOfTrain = $("#inputTrainTime").val();
    console.log(timeOfTrain);
    frequencyOfTrain = $("#inputConsistancy").val();
    console.log(frequencyOfTrain);

    database.ref().push({
        nameOfTrain: nameOfTrain,
        destination: destination,
        timeOfTrain: timeOfTrain,
        frequencyOfTrain: frequencyOfTrain,
    });

});

//add child function
database.ref().on("child_added", function (snapshot) {
    //forgot to add snapshot.val
    var sv = snapshot.val();
    console.log(sv.nameOfTrain);
    console.log(sv.destination);
    console.log(sv.timeOfTrain);
    console.log(sv.frequencyOfTrain);


    //<tr> row variable for train information
    var row = $("<tr>");
    //settings for TD rows
    var trainTD = $("<td>");
    var placeTD = $("<td>");
    var timeTD = $("<td>");
    var arrivalTD = $("<td>");
    var minutesTD = $("<td>");

    //sv variable to show text
    trainTD.text(sv.nameOfTrain);
    newRow.append(trainTD);

    placeTD.text(sv.destination);
    newRow.append(placeTD);

    timeTD.text(sv.frequencyOfTrainTD);
    newRow.append(timeTD);

    //
    var firstTime = sv.timeOfTrain;
    var time = sv.frequencyOfTrain;

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    // Next Train with variable of next incoming train
    arrivalTD.text(moment(nextTrain).format('hh:mm'));
    minsTD.text(tMinutesTillTrain);
    newRow.append(minsTD);

    //train wait time TD variable
    minsTD.text(tMinutesTillTrain);
    // append to the new row
    newRow.append(minsTD);

    //append new row variable to tbody
    $('tbody').append(newRow);

});

