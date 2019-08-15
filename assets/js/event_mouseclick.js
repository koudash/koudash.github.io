// Object for messages to be passed to html
const hiddenMessage = {
    0: "Graduated from Data Analytics Boot Camp in Rice Univ this August",
    1: "Versed in Python programing with libraries built on top of it such as Pandas, Matplotlib, etc.",
    2: "Proficient in ETL processes, specifically using Selenium/Splinter, Flask, and MySQL/mongoDB databases",
    3: "Conversant with data viz using Tableau, HTML/CSS, JavaScript, as well as D3.js, Plotly.js, and Leaflet tools",
    4: "Familiar with the buildup of machine learning models to address real world problems"
};

// Set the viz of boat after animation starts
d3.select("#fishing-end")

    .on("animationstart", function() {

        d3.select("#fishing-start")
            .attr("class", "invisible");

        d3.select(this)
            .attr("class", "visible");

        let svg = d3.select("body")
            .append("svg")
            .attr("class", "temp-svg"); 
            
        svg.append('text')
            .attr("class", "temp-text")
            .attr("x", $("#fishing-end").offset().left)
            .attr("y", $("#fishing-end").offset().top)
            .attr("font-size", "20px")
            .attr("fill", "hotpink")
            .text("Click Me for Hidden Message!");            

        // remove 'svg' element with the class of "temp-svg"
        d3.select(".temp-svg")
            .transition()
            .duration(1500)
            .remove();        
    })

    .on("animationed", function() {

        d3.select("#fishing-start")
            .attr("class", "invisible");

        d3.select(this)
            .attr("class", "visible");
        
    });

// Show hidden messages upon mouse clicking on the boat
d3.select("#fishing-end").on("click", function() {

    let svg = d3.select("body")
        .append("svg")
        .attr("class", "temp-svg");  

    // Randomly generate a number between 0 and 4 (inclusive), functioning as the key to call for message in "hiddenMessage" 
    let myKey = Math.floor(Math.random() * 5);

    svg.append('text')
        .attr("class", "hidden-message")
        .attr("x", 30)
        .attr("y", $("h1").offset().top * 0.3)
        .attr("font-size", "20px")
        .attr("fill", "navy")
        .text(hiddenMessage[myKey]);

    // remove 'svg' element with the class of "temp-svg"
    d3.select(".temp-svg")
        .transition()
        .duration(2000)
        .remove();

});