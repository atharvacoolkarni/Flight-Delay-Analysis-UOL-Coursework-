// Wait for the DOM to be fully loaded before creating plots
document.addEventListener('DOMContentLoaded', function() {
    // Plot 1: Time of Day Analysis
    createTimeOfDayPlot();
    
    // Plot 2: Seasonal Patterns
    createSeasonalPlot();
    
    // Plot 3: Aircraft Age Impact
    createAircraftAgePlot();
    
    // Plot 4: Cascade Effects
    createCascadePlot();
    
    // Plot 5: Model Performance
    createModelPerformancePlot();
});

// Plot 1: Time of Day vs Delay
function createTimeOfDayPlot() {
    // Sample data - replace with your actual analysis results
    const hours = Array.from({length: 24}, (_, i) => i);
    const avgDelays = [
        12, 10, 8, 5, 7, 9, 11, 15, 
        18, 14, 16, 19, 22, 25, 28, 30, 
        35, 40, 38, 32, 28, 25, 20, 15
    ];
    
    const data = [{
        x: hours,
        y: avgDelays,
        type: 'scatter',
        mode: 'lines+markers',
        marker: {
            color: '#0033a0',
            size: 8
        },
        line: {
            color: '#0033a0',
            width: 2
        },
        name: 'Average Delay (minutes)'
    }];
    
    const layout = {
        title: 'Average Flight Delay by Hour of Day',
        xaxis: {
            title: 'Hour of Day (24-hour format)',
            tickmode: 'linear',
            tick0: 0,
            dtick: 2
        },
        yaxis: {
            title: 'Average Delay (minutes)',
            rangemode: 'tozero'
        },
        hovermode: 'closest',
        margin: {t: 50, r: 50, b: 80, l: 80},
        plot_bgcolor: '#f8f9fa',
        paper_bgcolor: '#f8f9fa'
    };
    
    Plotly.newPlot('time-of-day-plot', data, layout, {responsive: true});
}

// Plot 2: Seasonal Patterns
function createSeasonalPlot() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const avgDelays = [28, 30, 22, 18, 15, 20, 25, 23, 12, 16, 20, 35];
    
    const data = [{
        x: months,
        y: avgDelays,
        type: 'bar',
        marker: {
            color: avgDelays.map(delay => {
                // Color scale from green (low delays) to red (high delays)
                if (delay < 15) return '#4caf50';
                else if (delay < 25) return '#ff9800';
                else return '#f44336';
            })
        }
    }];
    
    const layout = {
        title: 'Average Flight Delay by Month',
        xaxis: {
            title: 'Month'
        },
        yaxis: {
            title: 'Average Delay (minutes)',
            rangemode: 'tozero'
        },
        margin: {t: 50, r: 50, b: 80, l: 80},
        plot_bgcolor: '#f8f9fa',
        paper_bgcolor: '#f8f9fa'
    };
    
    Plotly.newPlot('seasonal-plot', data, layout, {responsive: true});
}

// Plot 3: Aircraft Age Impact
function createAircraftAgePlot() {
    // Sample scatter plot data
    let aircraftAge = [];
    let delayTimes = [];
    let sizes = [];
    
    // Generate some sample data
    for (let i = 0; i < 100; i++) {
        aircraftAge.push(Math.random() * 25); // Ages between 0-25 years
        delayTimes.push(Math.random() * 30 + 10); // Delays between 10-40 minutes
        sizes.push(Math.random() * 10 + 5); // Random sizes for points
    }
    
    const data = [{
        x: aircraftAge,
        y: delayTimes,
        mode: 'markers',
        type: 'scatter',
        marker: {
            size: sizes,
            color: '#1f77b4',
            opacity: 0.7,
            line: {
                color: '#fff',
                width: 1
            }
        },
        name: 'Aircraft Data Points'
    }];
    
    // Add trend line (flat to show no correlation)
    const x = [0, 25];
    const y = [20, 20]; // Flat line indicating no relationship
    
    data.push({
        x: x,
        y: y,
        mode: 'lines',
        type: 'scatter',
        line: {
            color: 'red',
            width: 2,
            dash: 'dash'
        },
        name: 'Trend (No Correlation)'
    });
    
    const layout = {
        title: 'Aircraft Age vs. Delay Time',
        xaxis: {
            title: 'Aircraft Age (years)',
            range: [0, 25]
        },
        yaxis: {
            title: 'Average Delay Time (minutes)',
            range: [0, 45]
        },
        margin: {t: 50, r: 50, b: 80, l: 80},
        plot_bgcolor: '#f8f9fa',
        paper_bgcolor: '#f8f9fa',
        legend: {
            x: 0.01,
            y: 0.99,
            bgcolor: 'rgba(255,255,255,0.5)'
        }
    };
    
    Plotly.newPlot('aircraft-age-plot', data, layout, {responsive: true});
}

// Plot 4: Cascade Effects Network
function createCascadePlot() {
    // This is a simplified network visualization
    // In a real application, you'd use more complex D3.js code
    
    // Sample data for major airports
    const nodes = [
        {id: 'ATL', name: 'Atlanta', x: 0.2, y: 0.5, size: 20},
        {id: 'ORD', name: 'Chicago', x: 0.3, y: 0.3, size: 18},
        {id: 'LAX', name: 'Los Angeles', x: 0.1, y: 0.7, size: 16},
        {id: 'DFW', name: 'Dallas', x: 0.5, y: 0.4, size: 15},
        {id: 'DEN', name: 'Denver', x: 0.4, y: 0.6, size: 14},
        {id: 'JFK', name: 'New York', x: 0.7, y: 0.3, size: 13},
        {id: 'SFO', name: 'San Francisco', x: 0.2, y: 0.8, size: 12},
        {id: 'LAS', name: 'Las Vegas', x: 0.3, y: 0.9, size: 11},
        {id: 'PHX', name: 'Phoenix', x: 0.6, y: 0.7, size: 10},
        {id: 'MIA', name: 'Miami', x: 0.8, y: 0.5, size: 9}
    ];
    
    // Create a simple node graph with Plotly
    const trace = {
        x: nodes.map(node => node.x),
        y: nodes.map(node => node.y),
        text: nodes.map(node => `${node.id} - ${node.name}`),
        mode: 'markers+text',
        marker: {
            size: nodes.map(node => node.size * 2),
            color: nodes.map((node, i) => i < 2 ? '#f44336' : '#2196f3'), // First two are red (delays)
            line: {
                color: 'black',
                width: 1
            }
        },
        textposition: 'bottom',
        name: 'Airports'
    };
    
    // Create lines between airports to show delay propagation
    const lines = {
        x: [0.2, 0.3, 0.2, 0.5, 0.3, 0.7, 0.3, 0.3],
        y: [0.5, 0.3, 0.5, 0.4, 0.3, 0.3, 0.3, 0.9],
        mode: 'lines',
        line: {
            color: 'red',
            width: 1
        },
        opacity: 0.7,
        name: 'Delay Cascades'
    };
    
    const layout = {
        title: 'Airport Delay Cascade Network',
        showlegend: false,
        xaxis: {
            showgrid: false,
            zeroline: false,
            showticklabels: false
        },
        yaxis: {
            showgrid: false,
            zeroline: false,
            showticklabels: false
        },
        margin: {t: 50, r: 50, b: 50, l: 50},
        plot_bgcolor: '#f8f9fa',
        paper_bgcolor: '#f8f9fa',
        annotations: [
            {
                x: 0.05,
                y: 0.95,
                xref: 'paper',
                yref: 'paper',
                text: 'Red nodes: Airports with initial delays<br>Blue nodes: Affected airports',
                showarrow: false,
                bgcolor: 'rgba(255,255,255,0.8)',
                bordercolor: '#ddd',
                borderwidth: 1,
                borderpad: 5
            }
        ]
    };
    
    Plotly.newPlot('cascade-plot', [trace, lines], layout, {responsive: true});
}

// Plot 5: Model Performance (ROC Curve)
function createModelPerformancePlot() {
    // Sample ROC curve data
    const fpr = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
    const tpr = [0, 0.4, 0.55, 0.65, 0.75, 0.8, 0.85, 0.9, 0.95, 0.98, 1.0];
    
    const modelTrace = {
        x: fpr,
        y: tpr,
        mode: 'lines',
        name: 'Model (AUC = 0.78)',
        line: {
            color: 'blue',
            width: 2
        }
    };
    
    const randomTrace = {
        x: [0, 1],
        y: [0, 1],
        mode: 'lines',
        name: 'Random',
        line: {
            color: 'red',
            width: 2,
            dash: 'dash'
        }
    };
    
    const layout = {
        title: 'ROC Curve - Flight Delay Prediction Model',
        xaxis: {
            title: 'False Positive Rate',
            range: [0, 1]
        },
        yaxis: {
            title: 'True Positive Rate',
            range: [0, 1]
        },
        margin: {t: 50, r: 50, b: 80, l: 80},
        plot_bgcolor: '#f8f9fa',
        paper_bgcolor: '#f8f9fa',
        legend: {
            x: 0.7,
            y: 0.1
        }
    };
    
    Plotly.newPlot('model-performance-plot', [modelTrace, randomTrace], layout, {responsive: true});
}
