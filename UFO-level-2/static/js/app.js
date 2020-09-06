// from data.js
var tableData = data;

// YOUR CODE HERE!

// Geting the unique value of each coulumn
var unique_state = [... new Set(tableData.map(data => data.state))];
console.log(unique_state);

var unique_city = [... new Set(tableData.map(data => data.city))];
console.log(unique_city);

var unique_country = [... new Set(tableData.map(data => data.country))];
console.log(unique_country);

var unique_shape = [... new Set(tableData.map(data => data.shape))];
console.log(unique_shape);

function updating_dropbox(data,Select_ID){
    var select_body= d3.select("#"+Select_ID);
    console.log(select_body);
    console.log(data);

 for ( var i=0 ; i<data.length ;i++ ) 
     {
        var row = select_body.append("option");
        row.text(data[i]);
         }
    };

updating_dropbox(unique_country,"inputCountry");
updating_dropbox(unique_city,"inputCity");
updating_dropbox(unique_state,"inputState");
updating_dropbox(unique_shape,"inputShape");


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
    var inputElement = d3.select("#From_datepicker");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var dday = inputValue.substring(0,inputValue.indexOf("/"));
    var mmonth = inputValue.substring(inputValue.indexOf("/")+1,inputValue.lastIndexOf("/"));
    var yyear = inputValue.substring(inputValue.lastIndexOf("/")+1)
    if (dday[0]==='0') dday=dday.substring(1);
    if (mmonth[0]==='0') mmonth=mmonth.substring(1)
    inputValue=dday+'/'+mmonth+'/'+yyear
    console.log(inputValue);
    console.log(dday);
    console.log(mmonth);

    
    // console.log(tableData);
  
    var filteredData = tableData.filter(report => report.datetime === inputValue);
    console.log(filteredData);
    tbody.html("");
    
    if (filteredData.length===0) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.text("No Data on that day! Did you select the right day??");
    }
    else {

    filteredData.forEach(function(report) {
        var row = tbody.append("tr");
        Object.entries(report).forEach(function([key, value]) {
        // console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
        var cell = row.append("td");
        cell.text(value);
         });
        });
    }
    };  

