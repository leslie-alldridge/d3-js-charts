// //javascript 

// d3.select();
// d3.selectAll();

// //select heading tag 
// d3.select('h1').style('color','red')
// .attr('class', 'heading')
// .text('updated h1 tag');

// d3.select('body').append('p').text('First Paragraph');
// d3.select('body').append('p').text('Second Paragraph');
// d3.select('body').append('p').text('Third Paragraph');

//lesson two

// var dataset = [1,2,3,4,5];

// d3.select('body')
//     .selectAll('p')
//     .data(dataset)
//     .enter()
//     .append('p')//appends paragraph for each data element
//     //.text('D3 is awesome!')
//     .text(function(d){return d; }); //displays data

//lesson 3 - appending labels and color to bar chart

// var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

// var svgWidth = 500, svgHeight = 300, barPadding = 5;
// var barWidth = (svgWidth / dataset.length);

// var svg = d3.select('svg')
//     .attr("width", svgWidth)
//     .attr("height", svgHeight)
//     .attr("fill", "blue");
    
// var barChart = svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("y", function(d) {
//         return svgHeight - d
//     })
//     .attr("height", function(d) {
//         return d
//     })
//     .attr("width", barWidth - barPadding)
//     .attr("transform", function(d, i){
//         var translate = [barWidth * i, 0];
//         return "translate(" + translate + ")";
//     });
    

//     var text = svg.selectAll("text")
//         .data(dataset)
//         .enter()
//         .append("text")
//         .text(function(d){
//             return d;
//         })
//         .attr("y", function(d, i){
//             return svgHeight - d - 2;
//         })
//         .attr("x", function(d, i){
//             return barWidth * i;
//         })
//         .attr("fill", "#A64C38");

//lesson 4 scalability

//  var dataset = [1,2,3,4,5];

//  var svgWidth = 500, svgHeight = 300, barPadding = 5;
//  var barWidth = (svgWidth / dataset.length);

//  var svg = d3.select('svg')
//      .attr("width", svgWidth)
//      .attr("height", svgHeight)

// //this is the scaling function
// var yScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset)])
//     .range([0, svgHeight]);

// var barChart = svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("y", function(d){
//         return svgHeight - yScale(d)
//     })
//     .attr("height", function(d){
//         return yScale(d);
//     })
//     .attr("width", barWidth - barPadding)
//     .attr("transform", function(d, i){
//         var translate = [barWidth * i, 0];
//         return "translate(" + translate + ")";
//     });

    //lesson 5 axis 
// var data = [80, 100, 56, 120, 180, 30, 40, 120, 160];

// var svgWidth = 600, svgHeight = 300, barPadding = 5;

// var svg = d3.select('svg')
//     .attr("width", svgWidth)
//     .attr("height", svgHeight)

// //these are the scaling functions
// var yScale = d3.scaleLinear()
//     .domain([0, d3.max(data)])
//     .range([svgHeight, 0]);

// var xScale = d3.scaleLinear()
//     .domain([0, d3.max(data)])
//     .range([0, svgWidth]);

// var x_axis = d3.axisBottom()
//     .scale(xScale);
// var y_axis = d3.axisLeft()
//     .scale(yScale);

// svg.append("g")
//     .attr("transform", "translate(50,10)")
//     .call(y_axis);

// var xAxisTranslate = svgHeight - 20;

// svg.append("g")
//     .attr("transform", "translate(50, " + xAxisTranslate + ")")
//     .call(x_axis);

//appending different shapes

// var svgWidth = 600, svgHeight = 500;
// var svg = d3.select("svg")
//     .attr("width", svgWidth)
//     .attr("height", svgHeight)
//     .attr("class", "svg-container");

// var line = svg.append("line")
//     .attr("x1", 100)
//     .attr("x2", 500)
//     .attr("y1", 50)
//     .attr("y2", 50)
//     .attr("stroke", "red")
//     .attr("stroke-width", 5)

// var rect = svg.append("rect")
//     .attr("x", 100)
//     .attr("y", 100)
//     .attr("width", 200)
//     .attr("height", 100)
//     .attr("fill", "red")

// var circle = svg.append("circle")
//     .attr("cx", 200)
//     .attr("cy", 300)
//     .attr("r", 80)
//     .attr("fill", "red")

//creating pie charts 

var data = [
    {"platform": "Android", "percentage": 40.11},
    {"platform": "Windows", "percentage": 36.69},
    {"platform": "iOS", "percentage": 13.06}
];

var svgWidth = 500, svgHeight = 300, radius = Math.min(svgWidth, svgHeight) / 2;
var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight)

//create group element to hold pie chart
var g = svg.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie().value(function(d){
    return d.percentage;
});

var path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);

var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");

    //append text on mouseover and mouse out
arc.append("path")
    .attr("d", path)
    .on("mouseover", function(d, i) {
        console.log(d);
        svg.append("text")
            .attr("x", 0)
            .attr("y", 10)
          .attr("dy", ".5em")
          .style("text-anchor", "start")
          .style("font-size", 15)
          .attr("class","label")
          .style("fill", function(d,i){return "black";})
          .text(d.data.platform);
        
    })
    .on("mouseout", function(d) {
      svg.select(".label").remove();
    })
    .attr("fill", function(d){
        return color(d.data.percentage);
    });
var label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);
    