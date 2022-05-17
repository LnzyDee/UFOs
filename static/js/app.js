// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//create new function
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    //next, loop through each object in the data
    data.forEach((dataRow) => {
        // append a arow to the table body
        let row = tbody.append("tr");

        // loop through each field in the datarow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
         let cell = row.append("td");
         cell.text(val);   
        });
    });
};

function handleClick() {
    // Grabe the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entreed and filter the
    // data using that date.
    if (date) {
        // apply 'filter' to the table data to only keep the
        // rows wehre the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);