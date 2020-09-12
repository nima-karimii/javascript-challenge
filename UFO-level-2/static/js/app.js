// from data.js
var tableData = data;

// YOUR CODE HERE!

var default_dropbox="ALL"

// Geting the unique value of each coulumn
var unique_state = [... new Set(tableData.map(data => data.state))];
console.log(unique_state);

var unique_city = [... new Set(tableData.map(data => data.city))];
console.log(unique_city);

var unique_country = [... new Set(tableData.map(data => data.country))];
console.log(unique_country);

var unique_shape = [... new Set(tableData.map(data => data.shape))];
console.log(unique_shape);

// Dropboxes Function
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

//Updating the dropboxes    
updating_dropbox(unique_country,"inputCountry");
updating_dropbox(unique_city,"inputCity");
updating_dropbox(unique_state,"inputState");
updating_dropbox(unique_shape,"inputShape");

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
  
// Get the value property of the input element of "From date"
var Fromdate_inputValue = from_day_Element.property("value");
Fromdate_inputValue=new Date(Fromdate_inputValue)
console.log(Fromdate_inputValue)

// Select the input element and get the raw HTML node
var to_day_Element = d3.select("#To_datepicker");

// Get the value property of the input element of "To date"
var Todate_inputValue = to_day_Element.property("value");
Todate_inputValue=new Date(Todate_inputValue);
console.log(Todate_inputValue);

// Get the value property of the input element of "City"
var City_Element=d3.select("#inputCity");
var Selected_City=City_Element.property("value");
console.log(Selected_City);

// Get the value property of the input element of "State"
var State_Element=d3.select("#inputState");
var Selected_State=State_Element.property("value");
console.log(Selected_State);

// Get the value property of the input element of "Country"
var Country_Element=d3.select("#inputCountry");
var Selected_Country=Country_Element.property("value");
console.log(Selected_Country);

// Get the value property of the input element of "Shape"
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

    // console.log(filteredData);
    tbody.html("");
    
    // Checking any Data found
    // If No
    if (filteredData.length===0) {
        var row = tbody.append("tr");
        var cell = row.append("tr");
        cell.text("No Data found! Please check your filters and try again!");


        
    }
    else {
    // If Yes : put them on the table
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

