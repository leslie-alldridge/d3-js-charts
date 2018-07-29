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

//lesson 3

var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight)
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - d
    })
    .attr("height", function(d) {
        return d
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function(d, i){
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    });