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
        "descr": `Data from anti-tumor drug study in mouse were analyzed. Analytical results were demostrated 
            with Matplotlib Python library.`},
    "qPCR": {
        "img": "./assets/images/prj-img/qpcr.gif",
        "descr": `The qPCR results data in ".csv" format were read in, analyzed using 2^(-Delta Delta CT) method, 
        and plotted by Matplotlib. Optional info. can be specified to generate personalized bar graph.`},                    
    "soccer-betting": {
        "img": "./assets/images/prj-img/soccer-betting.gif",
        "descr": `Historical odds movements data of season 2018/19 for six soccer leagues from a total of 4 betting 
            companies were scraped and analyzed. Four types of machine learning models were built up accordingly 
            with the optimized ones selected to predict soccer match results.`},
    "weatherPy": {
        "img": "./assets/images/prj-img/weatherPy.png",
        "descr": `Weather of random 500+ cities across the world were requested through OpenWeatherMap API. Relationships
            between latitude and 1. temperature; 2. relative humidity; 3. cloudiness; and 4. wind speed were analyzed.
            A viz. dashboard website was created accordingly.`},
    "data-journalism": {
        "img": "./assets/images/prj-img/data-journalism.gif",
        "descr": `Dynamic graphic were made using health risk data from 2014 ACS 1-year estimate. Tooltips were 
            incorporated as well using d3-tip.js.`},
    "aliens": {
        "img": "./assets/images/prj-img/aliens.gif",
        "descr": `A dashboard website was built, allowing customers to create/delete filters to query for the
            eye-witness records of extra-terrestrial (ET).`},   
    "biodiversity": {
        "img": "./assets/images/prj-img/biodiversity.png",
        "descr": `The interactive dashboard for the abundances of different microbial species in human belly 
            buttons was deployed using Plotly.js.`}, 
    "citi-bike": {
        "img": "./assets/images/prj-img/citi-bike.gif",
        "descr": `Data for the New York Citi Bike Program between 2017/06 and 2019/05 were analyzed and visualized 
            using Tableau Public.`},
    "hawaii": {
        "img": "./assets/images/prj-img/hawaii.png",
        "descr": `Sqlite database was queried for exploratory analysis of Hawaii climate. Flask API server was developed
            upon the aforementioned database.`},   
    "nat-disas": {
        "img": "./assets/images/prj-img/nat-disas.gif",
        "descr": `Natural disasters specifically in the forms of earthquakes, volcanoes, and tsunamis from 1900 till now
            were examined and illustrated on the map with trends analyzed along time.`},    
    "animals": {
        "img": "./assets/images/prj-img/animals.gif",
        "descr": `Facts about 69 endangered animals, articles with their names in New York Times, as well as the historical 
            temperature of their habitat countries were scraped to be stored in MongoDB. HTML dashboard page was set up for 
            data inquiry through communicating with Flask.`},       
    "amzn-rev": {
        "img": "./assets/images/prj-img/amzn-rev.png",
        "descr": `Reviews on toys and sports sold on Amazon.com were loaded from Amazon s3 to ZEPL notebooks for ETL process. 
            DataFrames were uploaded to Amazon Relational Database Service (RDS) instance and analyzed by both PySpark and 
            MySQL.`}
};

// <----- ||||| ANIMATION FOR FISHING BOAT MOVEMENT ||||| -----> //
// Set the viz of boat after animation starts
d3.select("#fishing-end")

    .on("animationstart", function() {

        d3.select("#fishing-start")
            .attr("class", "invisible");

        d3.select(this)
            .attr("class", "visible");

        let svg = d3.select('body')
            .append('svg')
            .attr("class", "temp-svg"); 
            
        svg.append('text')
            .attr("class", "temp-text")
            .attr("x", $("#fishing-end").offset().left)
            .attr("y", $("#fishing-end").offset().top)
            .attr("font-size", "20px")
            .attr("fill", "hotpink")
            .text("Click on Me for Hidden Message!");            

        // remove 'svg' element with the class of "temp-svg" after 1.5s
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

// <----- ||||| EVENT LISTENER FOR CLICKING ON FISHING BOAT ||||| -----> //
// Show hidden messages upon mouse clicking on the boat
d3.select("#fishing-end").on("click", () => {

    let svg = d3.select('body')
        .append('svg')
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
    
    // Animation for myname to attract attention for hovering after the hidden message disappears
    setTimeout(() => {
        d3.select("#myname-L").attr("style", "color:dodgerblue");
        d3.select(".fa-user-secret").attr("style", "color:dodgerblue");
        setTimeout(() => {
            d3.select("#myname-L").attr("style", "color:white");
            setTimeout(() => {
                d3.select("#myname-E").attr("style", "color:dodgerblue");
                setTimeout(() => {
                    d3.select("#myname-E").attr("style", "color:white");
                    setTimeout(() => {
                        d3.select("#myname-I").attr("style", "color:dodgerblue");
                        setTimeout(() => {
                            d3.select("#myname-I").attr("style", "color:white");
                            setTimeout(() => {
                                d3.select("#myname-K").attr("style", "color:dodgerblue");
                                setTimeout(() => {
                                    d3.select("#myname-K").attr("style", "color:white");
                                    setTimeout(() => {
                                        d3.select("#myname-A").attr("style", "color:dodgerblue");
                                        setTimeout(() => {
                                            d3.select("#myname-A").attr("style", "color:white");
                                            setTimeout(() => {
                                                d3.select("#myname-N").attr("style", "color:dodgerblue");
                                                setTimeout(() => {
                                                    d3.select("#myname-N").attr("style", "color:white");
                                                    setTimeout(() => {
                                                        d3.select("#myname-G").attr("style", "color:dodgerblue");
                                                        setTimeout(() => {
                                                            d3.select("#myname-G").attr("style", "color:white");
                                                            d3.select(".fa-user-secret").attr("style", "color:silver");
                                                        }, 40);
                                                    }, 40);
                                                }, 40);
                                            }, 40);                                
                                        }, 40);
                                    }, 40);
                                }, 40);
                            }, 40);                
                        }, 80);
                    }, 40);
                }, 40);
            }, 40);            
        }, 40);
    }, 2200);

});

// <----- ||||| EVENT LISTENER FOR HOVERING ON MY NAME ||||| -----> //
// Use jQuery to append "About Me" when hovering on my name 
$(".navbar-brand").hover(function() {

    $(this).css("color", "dodgerblue").append(`<div class='about-me'><span>${aboutMe}</span></div>`);
    }, function() {
    $(this).css("color", "white");
    $(".about-me").remove();

});

// <----- ||||| EVENT LISTENER FOR HOVERING ON DROPDOWN TEXT ||||| -----> //
// Change the color of "dropdown-toggle" from black to gray when hovered on
$(".nav-link").hover(function() {

    $(this).css("color", "gray");
    }, function() {
    $(this).css("color", "black");

});

// <----- ||||| EVENT LISTENER FOR HOVERING ON PROJECT NAME ||||| -----> //
// Demo image and description of selected project
d3.selectAll(".prj-lists-text")  
    
    // Show demo image and description of selected project once being hovered on
    .on("mouseover", function() {

        let prjOffsetLeft = "",
            prjOffsetTop = ""
            cursorPath = "";
        
        if ($(window).width() >= 750) {

            prjOffsetLeft = `${$(this).offset().left - 594.07 + 0.1833 * $(window).width()}px`;
            prjOffsetTop = `${$(this).offset().top}px`;
            // Downloaded from https://pixabay.com/vectors/point-pointing-finger-hand-38123/; edited by Photoshop
            cursorPath = "./assets/images/cursors/cursor-left.png";            

        } else {

            if ($(window).width() > 559) {
                prjOffsetLeft = `${$(this).offset().left - 150}px`;
            } else {
                prjOffsetLeft = `${$(this).offset().left}px`;
            }            
            
            prjOffsetTop = `${$(this).offset().top + 20}px`;
            // Downloaded from https://www.sccpre.cat/show/bTmhxT_hand-pointing-down-finger-pointing-down-vector/; edited by Photoshop
            cursorPath = "./assets/images/cursors/cursor-down.png";
        }
        
        // Setup cursor type
        d3.select(this)
            .style("cursor", `url(${cursorPath}), auto`);

        // Append 'div' to "body" for info about hovered project
        let prjDiv = d3.select('body')
            .append('div')
            .attr("class", "prj-div p-0")
            .style("width", `${72.205 - 0.0422 * $(window).width()}vw`)
            .style("left", prjOffsetLeft)
            .style("top", prjOffsetTop);

        // Append "img" to 'div' with class of "prj-div"
        prjDiv
            .append('img')
            .attr("id", "prj-img")
            .attr("class", "prj-img p-1")
            .attr("src", `${prcDescrObj[this.id]["img"]}`)
            .attr("alt", `${this.id}`)
            .style("width", "100%");

        // Append "div" (description text) to 'div' with class of "prj-div"
        prjDiv
            .append('div')
            .attr("class", "prj-descr p-1")
            .attr("alt", `${this.id}`)
            .text(`${prcDescrObj[this.id]["descr"]}`);
        
    })

    // Remove demo image and description after mouse has been moved away from project
    .on("mouseout", function() {
        d3.select(".prj-div").remove();
    });