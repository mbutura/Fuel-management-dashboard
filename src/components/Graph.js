import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

function Graph({ assetOfInterest }){
  const svgRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!assetOfInterest) return;
    const container = d3.select(svgRef.current.parentNode);
    const containerWidth = container.node().offsetWidth;
    const containerHeight = container.node().offsetHeight;
    setDimensions({ width: containerWidth, height: containerHeight });
  }, [assetOfInterest]);

  useEffect(() => {
    if (!assetOfInterest) return;
    const svg = d3.select(svgRef.current);

    // Process the data
    const processedData = assetOfInterest.measurement.history.map(d => {
      return {
        date: d3.timeParse("%Y-%m-%d")(d.measurementDate),
        volume: d.FuelVolume
      };
    });


    // Set up scales
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(processedData, d => d.date))
      .range([0, dimensions.width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(processedData, d => d.volume)])
      .range([dimensions.height, 0]);

    // Create the area generator
    const areaGenerator = d3
      .area()
      .x(d => xScale(d.date))
      .y0(yScale(0))
      .y1(d => yScale(d.volume));

    
      d3.selectAll("svg > *").remove();

    // Draw the area chart
    svg
      .append("path")
      .attr("fill", "#69b3a2")
      .attr("fill-opacity", .3)
      .attr("stroke", "black")
      .attr("stroke-width", 1)
      .attr("d", areaGenerator(processedData));

    // Add X-axis
    svg
    .append("g")
    .call(d3.axisBottom(xScale));

    // Add Y-axis
    svg
    .append("g")
    .call(d3.axisLeft(yScale));
  }, [assetOfInterest, dimensions]);

  return (
    <>
      <div className="card">
        <div className="card-body">
          <svg ref={svgRef} />
        </div>
      </div>
    </>
  );
}

export default Graph;
