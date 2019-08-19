// Object for messages to be passed to html
const hiddenMessage = {
    0: "Graduated from Data Analytics Boot Camp in Rice Univ this August",
    1: "Versed in Python programming with libraries built on top of it such as Pandas, Matplotlib, etc.",
    2: "Proficient in ETL processes, specifically using Selenium/Splinter, Flask, and MySQL/mongoDB databases",
    3: "Conversant with data viz using Tableau, HTML/CSS, JavaScript, as well as D3.js, Plotly.js, and Leaflet tools",
    4: "Familiar with the buildup of machine learning models to address real world problems"
};

// About Me
const aboutMe = `Data Analyst with Certificate in Data Analytics Boot Camp from Rice University. 
Proven ability in performing data analysis and visualization using Python, JavaScript, machine learning, 
and more to generate reports that offers valuable business insights. Rapid adaptation towards different 
company cultures validated by the experiences as a former scientific researcher with strong communication 
and team-work skills showcased by more than 10 co-authored SCI publications.`;

// Project Image and Description
const prcDescrObj = {
    "pymaceuticals": {
        "img": "./assets/images/prj-img/pymaceuticals.png",
        "text": `Analyzed animal drug test and demostrated the results with Matplotlib Python library`}
};
// TO BE CONTINUED



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
            .text("Click on Me for Hidden Message!");            

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
d3.select("#fishing-end").on("click", () => {

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

    // Remove 'svg' element with the class of "temp-svg"
    d3.select(".temp-svg")
        .transition()
        .duration(2000)
        .remove();

    // Make myname "blink" thrice shortly after the hidden message disappears
    setTimeout(() => {

        d3.select("#myname").attr("style", "color:dodgerblue");
        setTimeout(() => {
            d3.select("#myname").attr("style", "color:white");
            setTimeout(() => {
                d3.select("#myname").attr("style", "color:dodgerblue");
                setTimeout(() => {
                    d3.select("#myname").attr("style", "color:white");
                    setTimeout(() => {
                        d3.select("#myname").attr("style", "color:dodgerblue");
                        setTimeout(() => {
                            d3.select("#myname").attr("style", "color:white");
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);            
        }, 200);

    }, 2200);

});

// Use jQuery to append "About Me" when hovering on my name 
$("#myname").hover(function() {

    $(this).css("color", "dodgerblue").append(`<div class='about-me'><span>${aboutMe}</span></div>`);
    }, function() {
    $(this).css("color", "white");
    $(".about-me").remove();

});

// Change the color of techs from black to gray when hovered on
$(".nav-link").hover(function() {

    $(this).css("color", "gray");
    }, function() {
    $(this).css("color", "black");

});

// Demo image and description of selected project
d3.selectAll(".prj-lists-text")  
    
    // Show demo image and description of selected project once being hovered on
    .on("mouseover", function() {

        let prjOffsetLeft = "",
            prjOffsetTop = ""
            cursorPath = "";
        
        if ($(window).width() >= 750) {

            prjOffsetLeft = `${$(".prj-lists-text").offset().left - 594.07 + 0.1833 * $(window).width()}px`;
            prjOffsetTop = `${$(".prj-lists-text").offset().top}px`;
            // Downloaded from https://pixabay.com/vectors/point-pointing-finger-hand-38123/; edited by Photoshop
            cursorPath = "./assets/images/cursors/cursor-left.png";            

        } else {

            if ($(window).width() > 559) {
                prjOffsetLeft = `${$(".prj-lists-text").offset().left - 150}px`;
            } else {
                prjOffsetLeft = `${$(".prj-lists-text").offset().left}px`;
            }            
            
            prjOffsetTop = `${$(".prj-lists-text").offset().top + 20}px`;
            // Downloaded from https://www.sccpre.cat/show/bTmhxT_hand-pointing-down-finger-pointing-down-vector/; edited by Photoshop
            cursorPath = "./assets/images/cursors/cursor-down.png";
        }
        
        // Setup cursor type
        d3.select(this)
            .style("cursor", `url(${cursorPath}), auto`);

        // Append "img" to html body
        d3.select("body").append("img")
            .attr("class", "prj-img")
            .attr("src", `${prcDescrObj[this.id]["img"]}`)
            .attr("alt", `${this.id}`)
            .style("width", `${72.205 - 0.0422 * $(window).width()}vw`)
            .style("left", prjOffsetLeft)
            .style("top", prjOffsetTop);
        // Append "div" (description text) to html body
        // Make sure "img" with the class of "prj-img" has been completely loaded before "div" appending
        setTimeout(() => {
            d3.select("body").append("div")
                .attr("class", "prj-descr")
                .attr("alt", `${this.id}`)
                .style("width", `${72.205 - 0.0422 * $(window).width()}vw`)
                .style("left", prjOffsetLeft)
                .style("top", `${$(".prj-img").offset().top + $(".prj-img").outerHeight()}px`)
                .text(`${prcDescrObj[this.id]["text"]}`);            
        }, 8);

    })

    // Remove demo image and description after mouse has been moved away from project
    .on("mouseout", function() {

        d3.select(".prj-img").remove();
        d3.select(".prj-descr").remove();

    });