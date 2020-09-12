// from data.js
var tableData = data;

// YOUR CODE HERE!
var default_dropbox="ALL"


// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

// Select the input element and get the raw HTML node
var from_day_Element = d3.select("#From_datepicker");
  
// Get the value property of the input From Date
var Fromdate_inputValue = from_day_Element.property("value");
Fromdate_inputValue=new Date(Fromdate_inputValue)
console.log(Fromdate_inputValue)

// Select the input element and get the raw HTML node
var to_day_Element = d3.select("#To_datepicker");

// Get the value property of the input To  Date
var Todate_inputValue = to_day_Element.property("value");
Todate_inputValue=new Date(Todate_inputValue);
console.log(Todate_inputValue);

// Get the value property of the dropbox Country
var Country_Element=d3.select("#inputCountry");
var Selected_Country=Country_Element.property("value");
console.log(Selected_Country);

// Get the value property of the dropbox State
var State_Element=d3.select("#inputState");
var Selected_State=State_Element.property("value");
console.log(Selected_State);

// Get the value property of the dropbox City
var City_Element=d3.select("#inputCity");
var Selected_City=City_Element.property("value");
console.log(Selected_City);

// Get the value property of the dropbox Shape
var Shape_Element=d3.select("#inputShape");
var Selected_Shape=Shape_Element.property("value");
console.log(Selected_Shape);

    // Prevent the page from refreshing
    d3.event.preventDefault();
      

  // Filtering the Data
    var filteredData = tableData.filter(report => new Date(report.datetime).getTime()>=(new Date(Fromdate_inputValue).getTime()));
    filteredData = filteredData.filter(report => new Date(report.datetime).getTime()<=(new Date(Todate_inputValue).getTime()));
    if (Selected_City!=default_dropbox)  filteredData = filteredData.filter(report => report.city===Selected_City);
    if (Selected_State!=default_dropbox)  filteredData = filteredData.filter(report => report.state===Selected_State);
    if (Selected_Country!=default_dropbox)  filteredData = filteredData.filter(report => report.country===Selected_Country);
    if (Selected_Shape!=default_dropbox)  filteredData = filteredData.filter(report => report.shape===Selected_Shape);

    console.log(filteredData);
    tbody.html("");
    
// Checking is there any data Available

    //If no:
    if (filteredData.length===0) {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.text("No Data! Did you select the right day??");
    
        cell.text("No Data found! Please check your filters and try again!");

        var Img_url="https://static.dribbble.com/users/1489103/screenshots/6326497/no-data-found.png";
        
        var elem = document.createElement("img");
        elem.setAttribute("src", "https://static.dribbble.com/users/1489103/screenshots/6326497/no-data-found.png");
        
        //var DIV=cell.append('div');
        
        console.log(elem);
        cell.append(elem);
        

    
    
    }
    //if Yes
    else {

    filteredData.forEach(function(report) 
    {
        var row = tbody.append("tr");
        Object.entries(report).forEach(function([key, value]) {
    
    // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
         });
        });
    }
    };  

