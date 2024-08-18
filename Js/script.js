"use strict"

const myFirstChart = document.getElementById('myChart').getContext('2d');    


const gradient = myFirstChart.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, '#4CBC9A');
gradient.addColorStop(1, 'rgba(76, 175, 80, 0)'); 

const myChart = new Chart(myFirstChart, {
    type: 'line',

    data: {
        labels: ['Du', 'Se', 'Chor', 'Pay', 'Ju', 'Sha', 'Ya'],
        datasets: [
            {
                label: '2024-2025',
                data: [50, 60, 74, 66, 45, 34, 90],
                borderColor: '#FFC107',
                backgroundColor: 'rgba(255, 193, 7, 0.0)',
                fill: true,
                borderWidth: 3,
                pointRadius: 6, 
                pointBackgroundColor: '#FFC107',
                pointBorderColor: '#fff',
                pointBorderWidth: 4,
                hoverBorderWidth: 3,
                hoverBorderColor: '#fff'
               
            },
            {
                label: '2026-2027',
                data: [30, 50, 35, 45, 94, 50, 93],
                borderColor: '#4CAF50',
                backgroundColor: gradient,
                fill: true,
                borderWidth: 3,
                pointRadius: 6, 
                pointBackgroundColor: '#4CAF50',
                pointBorderColor: '#fff',
                pointBorderWidth: 4,
                hoverBorderWidth: 3,
                hoverBorderColor: '#fff'
            }
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend:{
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.raw} (-25%)`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
