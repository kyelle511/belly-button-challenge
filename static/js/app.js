const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//Fetch the JSON data and console log to confirm fetched
let data = d3.json(url).then(function(data) {
    console.log(data);
});
//Resource for adding values to dropdown menu: https://stackoverflow.com/questions/43121679/how-to-append-option-into-select-combo-box-in-d3
//https://stackoverflow.com/questions/59761975/how-to-set-default-value-appearing-in-dropdown-list-with-d3
//https://www.tutorialsteacher.com/d3js/loading-data-from-file-in-d3js
//Thanks to Learning Assistant Luna Zhang for helping me get back on the right path with creating a for loop
//Create a drop down menu based on the names 
let selector = d3.select("#selDataset");

//Get the options from the sample names
d3.json(url).then((data) => {
    let sampleNames = data.names;

    //Loop through to get each sample name (id) and append to the dropdown options
    for (let i = 0; i < sampleNames.length; i++){
        selector
            .append("option")
            .text(sampleNames[i])
            .property("value", sampleNames[i]);
    };
});

//Initialize the page with default plots and charts
function init() {
    //Set up the demographic information Chart
    let panelMetadata = d3.select("#sample-metadata");
    
    //Get the data from the metadata for demographic chart
    d3.json(url).then((data) => {
        let sampleMetadata = data.metadata;

        //Confirm metadata
        console.log(sampleMetadata[0]);

        //Loop through to get each sample name (id) and append to the dropdown options
        for (let i = 0; i < sampleMetadata[0].length; i++){
        panelMetadata
            .append("<H6>")
            .text(sampleNames[i])
            
    };
        panelMetadata
            .text(JSON.stringify(sampleMetadata[0]));
    });

    //Get the sample data for bubble chart
    d3.json(url).then((data) => {
        let sampleData = data.samples;

        //console log to confirm 
        console.log(sampleData[0]);
    
    //Set up the bubble chart
    let bubble = [{
        x: sampleData[0].otu_ids,
        y: sampleData[0].sample_values,
        text: sampleData[0].otu_labels,
        mode: 'markers',
        marker: {
            color: sampleData[0].otu_ids,
            size: sampleData[0].sample_values
        }
    }];
    //Plot the bubble chart
    Plotly.newPlot("bubble", bubble);
});
 //Get the sample data for bar chart - Thank you to Learning Assistant Luke Snyder for helping me figure out how to set up the data for a successful sort
    d3.json(url).then((data) => {
        let sampleData = data.samples[0];

        //Create an array of the first dataset data
        let dataArray = sampleData.otu_ids.map((item, index) => {
            return {
                otu_id: item,
                sample_value: sampleData.sample_values[index],
                otu_label: sampleData.otu_labels[index]
            };
        });

        //Sort the value samples from greatest to least 
        dataArray.sort((a,b) => b.sample_values - a.sample_values);
    
        //Get the Top Ten
        slicedData = dataArray.slice(0,10);
        console.log(slicedData);

        //Reverse the data so that it shows up in the desired order
        reversedData = slicedData.reverse();

// Set up the bar chart
        let bar = [{
            x: reversedData.map(item => item.sample_value),
            y: reversedData.map(item => `OTU ${item.otu_id}`),
            text: reversedData.map(item => item.otu_label),
            type: "bar",
            orientation: "h"
        }];

        Plotly.newPlot("bar", bar);
    });   
}

//On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// // Function called by DOM changes, thank you to TA Randy Sendek for helping me talk through and figure out how to set up this section to work with a different drop down
function getData() {
    let dropdownMenu = d3.select("#selDataset");
    //Assign the value of the dropdown menu option to a letiable (class example)
    let dataset = dropdownMenu.property("value");
    //Initialize an empty array for the country's data (class example)
    let data = [];

    data = number(dataset)

    //Call function to udpate the chart
    updatePlotly(data);
}

//Update the restyled plot's values
// function updatePlotly(newdata) {
    Plotly.restyle("bubble", [newdata])
    Plotly.restyle("bar", [newdata])
}

init();