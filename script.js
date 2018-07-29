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

 var dataset = [1,2,3,4,5];

 var svgWidth = 500, svgHeight = 300, barPadding = 5;
 var barWidth = (svgWidth / dataset.length);

 var svg = d3.select('svg')
     .attr("width", svgWidth)
     .attr("height", svgHeight)

//this is the scaling function
var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d){
        return svgHeight - yScale(d)
    })
    .attr("height", function(d){
        return yScale(d);
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function(d, i){
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    });