
//  Initialize Firebase
 var config = {
   apiKey: "AIzaSyBhSc2YaR9b_NH6nbk2sUE8DoZwR7z4LuU",
   authDomain: "employee-timesheet-1ff34.firebaseapp.com",
   databaseURL: "https://employee-timesheet-1ff34.firebaseio.com",
   projectId: "employee-timesheet-1ff34",
   storageBucket: "employee-timesheet-1ff34.appspot.com",
   messagingSenderId: "526326351491"
 };
 firebase.initializeApp(config);

 var database = firebase.database();
console.log(database);

$(document).ready(function(){ 

$("#add-user").on("click", function(event){

    event.preventDefault();

    var newUser = {
        newName : $("#nameOfEmployee").val().trim(),
        newRole : $("#employeeRole").val().trim(),
        newDate: $("#startDate").val().trim(),
        newRate : $("#monthlyRate").val().trim(),

    }

    database.ref().push({
        newUser
    });

    $("#nameOfEmployee").val("");
    $("#employeeRole").val("");
    $("#startDate").val("");
    $("#monthlyRate").val("");

   var dateWork = newUser.newDate;
   var format = "MM/DD/YYYY";
   var monthsWorked = moment(dateWork,format).diff(moment(),"month")*-1;
   var billed = monthsWorked*newUser.newRate;
   var newRow = $("<tr>");
   newRow.append("<td>"+ newUser.newName + "</td>").append("<td>"+ newUser.newRole + "</td>").append("<td>"+ newUser.newDate + "</td>").append("<td>"+ monthsWorked + "</td>").append("<td>"+ newUser.newRate + "</td>").append("<td>"+ billed + "</td>");
   $("#employee-table").append(newRow);
   

}) 
})