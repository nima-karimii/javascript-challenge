// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datepicker");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Checking the format of input date => In level-2 homework I used "new Date" function to fix the day format
    var dday = inputValue.substring(0,inputValue.indexOf("/"));
    var mmonth = inputValue.substring(inputValue.indexOf("/")+1,inputValue.lastIndexOf("/"));
    var yyear = inputValue.substring(inputValue.lastIndexOf("/")+1)
    if (dday[0]==='0') dday=dday.substring(1);
    if (mmonth[0]==='0') mmonth=mmonth.substring(1)
    inputValue=dday+'/'+mmonth+'/'+yyear
    // console.log(inputValue);
    // console.log(dday);
    // console.log(mmonth);

    
    // console.log(tableData);
    //Filtering the Data
    var filteredData = tableData.filter(report => report.datetime === inputValue);
    console.log(filteredData);
    tbody.html("");
    
    //Chacking any data found
    // If now a msg shows
    if (filteredData.length===0) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.text("No Data on that day! Did you select the right day??");
    }
    else {

    
    //If yes: Add them in to table

        filteredData.forEach(function(report) {
        var row = tbody.append("tr");
        Object.entries(report).forEach(function([key, value]) {
    
    // Append a cell to the row for each value
    // in the weather report object
        var cell = row.append("td");
        cell.text(value);
         });
        });
    }
    };  

