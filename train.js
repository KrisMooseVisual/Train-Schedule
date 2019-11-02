$(document).ready(function () {



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
        destination = $("#inputPlace").val();
        timeOfTrain = $("#inputTrainTime").val();
        frequencyOfTrain = $("#inputConsistancy").val();
        //console logging click functions
        console.log(nameOfTrain);
        console.log(destination);
        console.log(timeOfTrain);
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
        //<tr> row variable for train information
        var row = $("<tr>");

        //sv variable to show text
        nameTD.text(sv.trainTD);
        newRow.prepend(nameTD);

        nameTD.text(sv.placeTD);
        newRow.prepend(nameTD);

        nameTD.text(sv.arrivalTD);
        newRow.prepend(nameTD);

        //settings for TD rows
        var trainTD = $("<td>");
        var placeTD = $("<td>");
        var timeTD = $("<td>");
        var arrivalTD = $("<td>");
        var minutesTD = $("<td>");

        // First Time (pushed back 1 year to make sure it comes before current time)
        var firstTimeConverted = moment(firstTime, "HH:MM").subtract(1, "years");
        console.log(firstTimeConverted);
    });






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