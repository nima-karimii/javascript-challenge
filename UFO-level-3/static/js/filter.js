// from data.js
var ALL_tableData = data;

// YOUR CODE HERE!

var default_dropbox="ALL";

function updateing_dropboxfilter(tableData,kind)
{

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
function updating_dropbox(data,Select_ID,kind){
    var select_body= d3.select("#"+Select_ID);
    console.log(select_body);
    console.log(data);
    if (kind===1) select_body.html(""); 
    if (kind===0)
    {   select_body.html(""); 
        var row_all = select_body.append("option");
    row_all.text("ALL");}

 for ( var i=0 ; i<data.length ;i++ ) 
     {
        var row = select_body.append("option");
        row.text(data[i]);
         }
    console.log(select_body);

    };

//Updating the dropboxes    
updating_dropbox(unique_country,"inputCountry",kind);
updating_dropbox(unique_city,"inputCity",kind);
updating_dropbox(unique_state,"inputState",kind);
updating_dropbox(unique_shape,"inputShape",kind);

}

updateing_dropboxfilter(ALL_tableData,0);



function updating(which)
{
    x = document.getElementById(which).value;

    var from_day_Element = d3.select("#From_datepicker");
  
    // Get the value property of the input element
    var Fromdate_inputValue = from_day_Element.property("value");
    Fromdate_inputValue=new Date(Fromdate_inputValue)
    console.log(Fromdate_inputValue)
    
    // Select the input element and get the raw HTML node
    var to_day_Element = d3.select("#To_datepicker");
    
    // Get the value property of the input element
    var Todate_inputValue = to_day_Element.property("value");
    Todate_inputValue=new Date(Todate_inputValue);
    console.log(Todate_inputValue);
    var City_Element=d3.select("#inputCity");
    var Selected_City=City_Element.property("value");
    console.log(Selected_City);
    
    var State_Element=d3.select("#inputState");
    var Selected_State=State_Element.property("value");
    console.log(Selected_State);
    
    var Country_Element=d3.select("#inputCountry");
    var Selected_Country=Country_Element.property("value");
    console.log(Selected_Country);
    
    var Shape_Element=d3.select("#inputShape");
    var Selected_Shape=Shape_Element.property("value");
    console.log(Selected_Shape);
    
    updating_index=[];
    if (Selected_City!=default_dropbox) updating_index.push("inputCity");
    if (Selected_State!=default_dropbox) updating_index.push("inputState");
    if (Selected_Country!=default_dropbox) updating_index.push("inputCountry");
    if (Selected_Shape!=default_dropbox) updating_index.push("inputShape");

      // Filtering the Data
        var filteredData = tableData.filter(report => new Date(report.datetime).getTime()>=(new Date(Fromdate_inputValue).getTime()));
        filteredData = filteredData.filter(report => new Date(report.datetime).getTime()<=(new Date(Todate_inputValue).getTime()));
        if (Selected_City!=default_dropbox)  filteredData = filteredData.filter(report => report.city===Selected_City);
        if (Selected_State!=default_dropbox)  filteredData = filteredData.filter(report => report.state===Selected_State);
        if (Selected_Country!=default_dropbox)  filteredData = filteredData.filter(report => report.country===Selected_Country);
        if (Selected_Shape!=default_dropbox)  filteredData = filteredData.filter(report => report.shape===Selected_Shape);
    console.log(x);
    updateing_dropboxfilter(filteredData,which)
    
  
}



