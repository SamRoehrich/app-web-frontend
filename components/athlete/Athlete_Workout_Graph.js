import { select, axisBottom, axisRight, scaleLinear, scaleBand } from 'd3'
import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
`

//transforming logbook data 
const groupBy = (objectArray, property) => {
    return objectArray.reduce(function (total, obj) {
        let key = obj[property];
        if (!total[key]) {
            total[key] = [];
        }
        total[key].push(obj);
        return total;
    }, {});
}

//takes logBook from Athlete Component
const WorkoutGraph = ({ logBook }) => {

    const width = 500

    const svgRef = useRef()
    
    const workouts = logBook.map(item => Object.values(item)[1])

    const groupedWorkouts = groupBy(workouts, "catagory")

    const barData = Object.values(groupedWorkouts).map(item => item.length)
    
    
    console.log(barData)



    useEffect(() => {
        const svg = select(svgRef.current)

        svg.append('g')
            .attr('class', 'x-axis')

        svg.append('g')
            .attr('class', 'y-axis')
        
        const xScale = scaleBand()
            .domain(Object.keys(groupedWorkouts))
            .range([0, 500])

        console.log(xScale.bandwidth())
        
        const yScale = scaleLinear()
            .domain([0, 10])
            .range([300, 0])
    
        const xAxis = axisBottom(xScale)
            .ticks(Object.keys(groupedWorkouts).length)
            .tickFormat(index => index)

        svg
            .select('.x-axis')
            .style("transform", "translateY(360px")
            .call(xAxis)
        
        const yAxis = axisRight(yScale)
        
        const colorScale = scaleLinear()
            .domain([75, 100, 150])
            .range(["green", "orange", "red"])
            .clamp(true);
        
        svg
            .select('.y-axis')
            .style("transform", "translateX(500px)")
            .call(yAxis)
        
        svg
            .selectAll(".bar")
            .data(barData)
            .join("rect")
            .attr("class", "bar")
            .style("transform", "scale(1, -1)")
            .attr("x", (value, index) => index * xScale.bandwidth())
            .attr("y", -357)
            .attr("width", xScale.bandwidth() - 10)
            .attr("fill", colorScale)
            .attr("height", value => value - yScale(value))
        }, [groupedWorkouts, barData])
        
        return (
            <Container> 
                <svg  ref={svgRef} />

            </Container>
    )
}

export default WorkoutGraph

// <>
//     <svg style={{ overflow: 'visible', color: 'white', outerWidth: '100%' }}ref={svgRef}>
//         <g className="x-axis" />
//         <g className="y-axis" />
//     </svg>
//     <br/>
//     <button onClick={() => setData(data.map(d => d + 5))}>
//         update data
//     </button>
// </>

