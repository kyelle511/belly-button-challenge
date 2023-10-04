# belly-button-challenge
Module 14 Challenge - Interactive Visuatlizations & JavaScript <br>

Contributor: Katy Yelle

Context<br>
An interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare. 

### Repository Structure
    -Main Folder
        -.gitignore
        -index.html
        -README.md
        -samples.json

    -Sub Folders
        -images
            -barchart.png
            -bubblechart.png
            -entiredashboard.png
            -metadata.png
            -washinggauge.png
        -static
            -js
                -.gitkeep
                -app.js
        
### Overview
-app.js
This JavaScript file creates a series of graphs using the Belly Button Biodiversity dataset in a dashboard display.
![Entire Dropdown Display](/images/entireddashboard.png "Dashboard Display") 

The first section of the code loops through the dataset in order to add each Test Subject id number into the drop down menu.  Special thanks to Learning Assistant Luna Zhang for helping me get on the write path with creating a for loop. I also found the following resources to be useful for this task: 
- https://stackoverflow.com/questions/43121679/how-to-append-option-into-select-combo-box-in-d3
- https://stackoverflow.com/questions/59761975/how-to-set-default-value-appearing-in-dropdown-list-with-d3
- https://www.tutorialsteacher.com/d3js/loading-data-from-file-in-d3js

The next section sets up the function that displays the initial plots and charts on the dashboard, and has several subsection.  
The first subsection displays the test subject's demographic information. I found https://stackoverflow.com/questions/37673454/javascript-iterate-key-value-from-json to help me figure out how to get the key, value pairs to display in this section. 

![Dropdown Menu and Demographic Chart](/images/metadata.png "Demographic Chart")

The next section uses the same data created for the demographic chart to create a guage chart based on Belly Button Washing Frequency.  This section is still a work in progress, with hopes to modify based on several features. 
![Bellybutton Washing Gauge](/images/washinggauge.png "Belly Button Washing Gauge")

The next section pulls a different piece of the data set to create a bubble chart using the subject's data. Larger bubbles in the chart represent a higher number of OTUs (operational taxonomic units) or microbial species present. When hovering over a bubble the specific OTUs from that sample are displayed. 
![Bubble Chart](/images/bubblechart.png "Bubble Chart")

The final section sorts the sample data, and then displays the top ten OTUs found in that individual as a horizontal bar chart. The specific OTU labels display as hovertext for each bar.
![Bar Chart](/images/barchart.png "Bar Chart")

### Future Work
This project is not in its final state. I plan to continue to work and modify it specifically with the following goals in mind:
- Create the different charts and elements using a function and then calling those functions in for the initial display function.
- Add functionality so that when a different 'Test Subject ID No' is selected from the drop down the displays update for the new datasets.
- Modify the color scheme for the bubble chart.
- Adjust the features for the 'Belly Button Washing Frequency' gauge. 

