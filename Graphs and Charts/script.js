
let icon = document.querySelector('.icons');
const ctx = document.getElementById('myDoughnutChart').getContext('2d');
let ctx2 = document.getElementById('bar-chart').getContext('2d');


let colorPicker = document.getElementById('colorPicker');
let colorCurrent = document.getElementById('textColor');
let colorPicker1 = document.getElementById('colorPicker1');
let colorPicker2 = document.getElementById('colorPicker2');
let colorPicker3 = document.getElementById('colorPicker3');
let swiperSlides = document.querySelectorAll('.swiper-slide');
let allCharts = document.querySelectorAll('.chart');
let allElements = document.querySelectorAll('*');
let chartclr1 = '#31c442';
let chartclr2 = '#075fbc';
let chartclr3 = '#EEC153';
let chartsBg = document.getElementById('chartBg');
let special = document.querySelector('.special');


chartsBg.addEventListener('change', (e) => {
    allCharts.forEach(chart => {
        chart.style.backgroundColor = e.target.value;
    })
})
colorPicker.addEventListener('change', (e) => {
    swiperSlides.forEach(slide => {
        slide.style.backgroundColor = e.target.value;
    });
});
colorCurrent.addEventListener('change', (e) => {
    allElements.forEach(elem => {
        elem.style.color = e.target.value;
    });


});
colorPicker1.addEventListener('change', (e) => {
    chartclr1 = e.target.value;
    icon.click();
    icon.click();

});
colorPicker2.addEventListener('change', (e) => {
    chartclr2 = e.target.value;
    icon.click();
    icon.click();

});
colorPicker3.addEventListener('change', (e) => {
    chartclr3 = e.target.value;
    icon.click();
    icon.click();

});

special.addEventListener('click', () => {

    allElements.forEach(elem => {
        elem.style.color = 'black';
    });
    swiperSlides.forEach(slide => {
        slide.style.backgroundColor = "whitesmoke";
    });
    allCharts.forEach(chart => {
        chart.style.backgroundColor = "whitesmoke";
    })
    chartclr1= '#31c442';
    chartclr2 = '#075fbc';8
    chartclr3 = 'greenyellow';
    // chartclr3 = 'greenyellow';
    icon.click();
    icon.click();
})
let myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Contractor'],
        datasets: [{
            data: [17],
            backgroundColor: [chartclr1],
            borderColor: [chartclr1],
            borderWidth: 1,
            // text: 25,
            hoverBackgroundColor: ['rgba(125, 202, 14, 0.750)']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                //    text: '25',
                color: '#fff',
                font: {
                    size: 16,
                    weight: 'bold'
                },
                position: 'chartArea'
            },
            datalabels: {
                display: false
            }
        }
    }
});


let sunImage = new Image();
let moonImage = new Image();
sunImage.src = 'images/sun.png';
moonImage.src = 'images/moon.png';
const mode = icon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDarkTheme = document.body.classList.contains('dark-theme');
    console.log('Icon Clicked')
    icon.src = isDarkTheme ? sunImage.src : moonImage.src;
    myDoughnutChart.data.datasets[0].backgroundColor = isDarkTheme ? '#228CE5' : chartclr1;
    myDoughnutChart.data.datasets[0].borderColor = isDarkTheme ? '#228CE5' : chartclr1;
    myDoughnutChart.data.datasets[0].hoverBackgroundColor = isDarkTheme ? '#228CE5' : chartclr1;
    myDoughnutChart.update();

    myLineChart.data.datasets[0].borderColor = isDarkTheme ? '#228CE5' : chartclr1;
    myLineChart.data.datasets[1].borderColor =  isDarkTheme ? '#E84C62' : chartclr2;
    myLineChart.update();
    if (myChart) {
        myChart.data.datasets.forEach((dataset, index) => {
            let colors = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, chartclr3];
            dataset.backgroundColor = colors[index % colors.length];
            dataset.borderColor = colors[index % colors.length];
        });
        myChart.update();
    }
    if (barChart) {
        barChart.data.datasets[0].backgroundColor = isDarkTheme ? '#228CE5' : chartclr1;
        barChart.data.datasets[0].borderColor = isDarkTheme ? '#228CE5' : chartclr1;
        barChart.data.datasets[0].hoverBackgroundColor = isDarkTheme ? '#228CE5' : chartclr1;
        barChart.update();
    }

    if (myChart1) {
        myChart1.data.datasets.forEach((dataset, index) => {
            colors = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, chartclr3];
            dataset.backgroundColor = colors[index % colors.length];
            dataset.borderColor = colors[index % colors.length];
        });
        myChart1.update();
    }
    if (chart6) {
        chart6.data.datasets[0].backgroundColor = isDarkTheme ? '#228CE5' : chartclr1;
        chart6.data.datasets[0].borderColor = isDarkTheme ? '#228CE5' : chartclr1;
        chart6.data.datasets[0].hoverBackgroundColor = isDarkTheme ? '#228CE5' : chartclr1;
        chart6.update();
    }
    if (chart7) {
        chart7.data.datasets[0].backgroundColor = isDarkTheme ? '#228CE5' : chartclr1;
        chart7.data.datasets[0].borderColor = isDarkTheme ? '#228CE5' : chartclr1;
        chart7.data.datasets[0].hoverBackgroundColor = isDarkTheme ? '#228CE5' : chartclr1;
        chart7.update();
    }
    if (chart08) {

        chart08.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62'] : [chartclr1, chartclr2];
        chart08.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62'] : [chartclr1];
        chart08.update();
    }
    if (chart09) {
        chart09.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2];
        chart09.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62'] : [chartclr1, chartclr2];
        chart09.update();
    }
    if (chart10) {
        chart10.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153', '#E47E63'] : [chartclr1, chartclr2, '#EADD79', chartclr1];
        chart10.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153', '#E47E63'] : [chartclr1, chartclr2, '#EADD79', chartclr1];
        chart10.update();
    }
    if (chart11) {
        chart11.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart11.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart11.update();
    }
    if (chart12) {
        chart12.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart12.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart12.update();
    }
    if (chart13) {
        chart13.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart13.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart13.update();
    }
    if (chart14) {
        chart14.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart14.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart14.update();
    }
    if (chart15) {
        chart15.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart15.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart15.update();
    }
    if (chart16) {
        chart16.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart16.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart16.update();
    }
    if (chart17) {
        chart17.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart17.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart17.update();
    }
    if (chart18) {
        chart18.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart18.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart18.update();
    }
    if (chart19) {
        chart19.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart19.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart19.update();
    }
    if (chart20) {
        chart20.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart20.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart20.update();
    }
    if (chart21) {
        chart21.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart21.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart21.update();
    }
    if (chart22) {
        chart22.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart22.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart22.update();
    }
    if (chart23) {
        chart23.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart23.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart23.update();
    }
    if (chart24) {
        chart24.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart24.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart24.update();
    }
    if (chart25) {
        chart25.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart25.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart25.update();
    }
    if (chart26) {
        chart26.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart26.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart26.update();
    }
    if (chart27) {
        chart27.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart27.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart27.update();
    }
    if (chart28) {
        chart28.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart28.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart28.update();
    }
    if (chart29) {
        chart29.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart29.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart29.update();
    }
    if (chart30) {
        chart30.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart30.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart30.update();
    }
    if (chart31) {
        chart31.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart31.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart31.update();
    }
    if (chart32) {
        chart32.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart32.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart32.update();
    }
    if (chart33) {
        chart33.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart33.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart33.update();
    }
    if (chart34) {
        chart34.data.datasets[0].backgroundColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart34.data.datasets[0].borderColor = isDarkTheme ? ['#228CE5', '#E84C62', '#EEC153'] : [chartclr1, chartclr2, '#EADD79'];
        chart34.update();
    }

});


//----------------------------Slide 01 Chart 02------------------------
const ctx1 = document.getElementById('myChart').getContext('2d');

const data = {
    labels: Array.from({ length: 53 }, (_, i) => i + 1),
    datasets: [
        {
            label: '2023 Violations',
            data: [3, 0, 0, 4, 7, 1, 0, 3, 0, 2, 0, 0],
            borderColor: chartclr1,
            fill: false
        },
        {
            label: '2024 Violations',
            data: [4, 1, 1, 0, 0, 3, 3, 10, 2, 0, 16, 4, 2, 2, 2, 2, 4, 3, 5, 1, 10, 1, 3, 3, 1, 6, 12, 3, 1, 4, 2, 2, 2, 9, 5, 2, 4, 3, 0, 0, 1, 1, 1, 1, 1, 3, 0, 1, 0, 1, 0],
            borderColor: chartclr2,
            fill: false
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Week Number'
                },
                yAxes: [{
                    ticks: {
                        fontColor: 'red'
                    }
                }]
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Number of Violations'
                },
                ticks: {
                    stepSize: 2
                }
            },
            onClick: function (e) {
                let element = this.getElementAtEvent(e);
                if (element.length > 0) {
                    // An element was clicked
                    let index = element[0]._index;
                    let label = this.data.labels[index];
                    // Show the popup
                    PopUp.style.display = 'block';
                    // Set the popup content to the label
                    PopUp.textContent = label;
                } else {
                    // No element was clicked, hide the popup
                    PopUp.style.display = 'none';
                }
            }
        }
    },
};
let myLineChart = new Chart(ctx1, config);


//--------------------------------- Slide01 Chart03----------------------

// Javascript (chart-setup.js)
// var ctx2 = document.getElementById('bar-chart').getContext('2d');
let myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['ISTSO', 'SIID', 'ISTD', 'SSSO', 'ISEC/PO'], // Division names
        datasets: [{
            label: '2021 YTD',
            data: [140, 90, 60, 90, 110], // Replace with actual data
            backgroundColor: chartclr1, // Color for 2021 YTD
            borderColor: chartclr1,
            borderWidth: 2
        },
        {
            label: '2022 YTD',
            data: [90, 70, 40, 80, 95], // Replace with actual data
            backgroundColor: chartclr2,// Color for 2022 YTD
            borderColor: chartclr2,
            borderWidth: 1
        },
        {
            label: 'THIS WEEK',
            data: [40, 32, 37, 40, 45], // Replace with actual data
            backgroundColor: chartclr3, // Color for THIS WEEK
            borderColor:  chartclr3,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Violations by Division'
            }
        }
    }
});

// **********************************  SLIDE 02 *****************************************

// ----------------------------------SLide02 Chart01----------------------------

var ctx3 = document.getElementById('chart04').getContext('2d');
var barChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Dept A', 'Sales', 'HR', 'Production', /* add all other departments */],
        datasets: [{
            label: 'VIOLATION',
            data: [32, 3, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 7, 1, 3 /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        }, {
            label: 'WARNING',
            data: [5, 2, 2, 3, 1, 1, 1, 4, 3, 2, 2, 2, 1, 1, 5, 1 /* ... */],
            backgroundColor: chartclr2,
            borderColor: chartclr2,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

// ------------------------------Slide02 Chart02--------------------------
let ctx4 = document.getElementById('chart05').getContext('2d');
let myChart1 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Violation', 'Warning'],
        datasets: [{
            label: 'Saleh',
            data: [5, 3], // Replace these data points with the actual data
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        {
            label: 'Sohaib',
            data: [3, 2], // Replace these data points with the actual data
            backgroundColor: chartclr2,
            borderColor: chartclr2,
            borderWidth: 1
        },
        {
            label: 'Saif',
            data: [4, 1], // Replace these data points with the actual data
            backgroundColor: chartclr3,
            borderColor: chartclr3,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1 // Adjust this value as per your scale
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Security officers issued violations by type'
            },
            legend: {
                position: 'bottom', // Position the legend
            }
        }
    }
});

// -----------------------------Slide 02 Chart03-------------------------

const ctx5 = document.getElementById('chart06').getContext('2d');
const chart6 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Central Region', 'Churban Area', 'Northern Asia', 'Southern Asia', 'Western Region'],
        datasets: [{
            label: '# of Violations',
            data: [50, 62, 30, 15, 20], // Replace these with your actual data
            backgroundColor: [
                chartclr1,
                chartclr2,
               chartclr3,
                chartclr1,
                chartclr2,
                // chartclr3,
            ],
            borderColor: [
                chartclr1,
                chartclr2,
                chartclr3,
                chartclr1,
                chartclr2,
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// -----------------------------Slide 02 Chart04-------------------------
const ctx6 = document.getElementById('chart07').getContext('2d');
const chart7 = new Chart(ctx6, {
    type: 'doughnut',
    data: {
        labels: ['Contractor'],
        datasets: [{
            data: [17],
            backgroundColor: [chartclr1],
            borderColor: [chartclr1],
            borderWidth: 1,
            text: 25,
            hoverBackgroundColor: [chartclr1]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                // text: '25',
                color: '#000',
                font: {
                    size: 16,
                    weight: 'bold'
                },
                position: 'chartArea'
            },
            datalabels: {
                display: false
            }
        }
    }
});


//------------------------------ SLide 03 -------------------------

//  -------------------------slide 03 chart 01-------------------

let ctx7 = document.getElementById('chart08').getContext('2d');
let chart08 = new Chart(ctx7, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [45, 55], // Data for each section
            backgroundColor: [chartclr1, chartclr2],
            borderWidth: 1
        }],
        labels: [
            'Contractor',    // Labels for each section
            'Employee'
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        }
    }
});

// -------------------------slide 03 chart 02-------------------
let ctx8 = document.getElementById('chart09').getContext('2d');

let chart09 = new Chart(ctx8, {
    type: 'pie',
    data: {
        labels: [
            '< 3 month',
            '3 to 6 month',
            '> 6 months',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                chartclr1,
                chartclr2,
                chartclr3,


            ],
            hoverOffset: 4,
            responsive: true
        }]
    },
})

// ------------------------Slide 04 Chart 01-------------------
let ctx9 = document.getElementById('chart10').getContext('2d');

let chart10 = new Chart(ctx9, {
    type: 'pie',
    data: {
        labels: [
            'Dharan Gate',
            'Damman Gate',
            'Midra Gate',
            'Khobar Gate',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [350, 110, 60, 110],
            backgroundColor: [
                chartclr1,
                chartclr2,
                chartclr3,
                'rgba(165, 42, 42, 0.300)'
            ],

            hoverOffset: 5,
            responsive: true,
            maintainAspectRatio: false
        }],

    },
})
let conf = {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
}


// ------------------------Slide 04 Chart 02-------------------

let ctx10 = document.getElementById('chart11').getContext('2d');

let chart11 = new Chart(ctx10, {
    type: 'pie',
    data: {
        labels: [
            '< 3 month',
            '3 to 6 month',
            '> 6 months',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                chartclr1,
                chartclr2,
                chartclr3,


            ],
            hoverOffset: 4,
            responsive: true,
            maintainAspectRatio: false
        }]
    },
})


// Slide 06 ----------------------------------

// Slide 06 Chart01---------------------------


var ctx11 = document.getElementById('chart12').getContext('2d');
var chart12 = new Chart(ctx11, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', /* add all other departments */],
        datasets: [{
            label: '',
            data: [500, 1200, 950, 600,  /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

// Slide 06 Chart02---------------------------
var ctx12 = document.getElementById('chart13').getContext('2d');
let chart13 = new Chart(ctx12, {
    type: 'bar',
    data: {
        labels: ['Group2', 'Group5', 'Child org 1', 'Div 2', 'Div 1', /* add all other departments */],
        datasets: [{
            label: '',
            data: [100, 175, 180, 200, 250, /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }

        }
    }
})

// Slide06 Chart 03----------------------------------
let ctx13 = document.getElementById('chart14').getContext('2d');

let chart14 = new Chart(ctx13, {
    type: 'doughnut',
    data: {
        labels: [
            'Multiple',
            'Emergence',
            'Regular',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                chartclr1,
                chartclr2,
                chartclr3,


            ],
            hoverOffset: 4,
            responsive: true,
            maintainAspectRatio: false
        }]
    },
})

// SLide 06 chart 04-----------------------------------

var ctx14 = document.getElementById('chart15').getContext('2d');
var chart15 = new Chart(ctx14, {
    type: 'bar',
    data: {
        labels: ['Saleh', 'Sohaib', 'Yasir', 'Faisal', /* add all other departments */],
        datasets: [{
            label: '',
            data: [20, 15, 10, 5,  /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})


// ---------------------Slide 07 chart01----------------------

var ctx15 = document.getElementById('chart16').getContext('2d');
var chart16 = new Chart(ctx15, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', /* add all other departments */],
        datasets: [{
            label: '',
            data: [500, 1200, 950, 600,  /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

// --------------------------------Slide07 chart02----------------------------------
var ctx16 = document.getElementById('chart17').getContext('2d');
let chart17 = new Chart(ctx16, {
    type: 'bar',
    data: {
        labels: ['Group2', 'Group5', 'Child org 1', 'Div 2', 'Div 1', /* add all other departments */],
        datasets: [{
            label: '',
            data: [250, 200, 180, 175, 100, /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }

        }
    }
})

// Slide07 chart03--------------------------------------

let ctx17 = document.getElementById('chart18').getContext('2d');

let chart18 = new Chart(ctx17, {
    type: 'doughnut',
    data: {
        labels: [
            'Dahran Gate',
            'Damman Gate',
            'Midra Gate',
            'Khobar Gate',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                chartclr1,
                chartclr2,
                chartclr3,


            ],
            hoverOffset: 4,
            responsive: true,
            maintainAspectRatio: false
        }]
    },
})

// slide07 chart04---------------------------------
var ctx18 = document.getElementById('chart19').getContext('2d');
var chart19 = new Chart(ctx18, {
    type: 'bar',
    data: {
        labels: ['Saleh', 'Sohaib', 'Yasir', 'Faisal', /* add all other departments */],
        datasets: [{
            label: '',
            data: [20, 15, 10, 5,  /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

// --------------------------Slide 08------------------------------------------------

// slide 08 chart01----------------------------------
var ctx19 = document.getElementById('chart20').getContext('2d');
var chart20 = new Chart(ctx19, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', /* add all other departments */],
        datasets: [{
            label: '',
            data: [500, 1200, 950, 600,  /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

// slide08 chart02-----------------------------------
var ctx20 = document.getElementById('chart21').getContext('2d');
let chart21 = new Chart(ctx20, {
    type: 'bar',
    data: {
        labels: ['Group2', 'Group5', 'Child org 1', 'Div 2', 'Div 1', /* add all other departments */],
        datasets: [{
            label: '',
            data: [100, 175, 180, 200, 250, /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }

        }
    }
})

// ---------------------slide08 chart04------------------------------
var ctx21 = document.getElementById('chart22').getContext('2d');
var chart22 = new Chart(ctx21, {
    type: 'bar',
    data: {
        labels: ['Saleh', 'Sohaib', 'Yasir', 'Faisal', /* add all other departments */],
        datasets: [{
            label: '',
            data: [20, 15, 10, 5,  /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

// -----------------------------Slide 09 chart01-----------------------
var ctx22 = document.getElementById('chart23').getContext('2d');
var chart23 = new Chart(ctx22, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', /* add all other departments */],
        datasets: [{
            label: '',
            data: [500, 1200, 950, 600,  /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

//--------------------------- slide 09 chart02-------------------------

var ctx22 = document.getElementById('chart24').getContext('2d');
var chart24 = new Chart(ctx22, {
    type: 'bar',
    data: {
        labels: ['Saif', 'KIOSK', 'Visitor office', /* add all other departments */],
        datasets: [{
            label: '',
            data: [600, 200, 50,/* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})
// ---------------------------------Slide09 chart 03----------------
let ctx23 = document.getElementById('chart25').getContext('2d');
let chart25 = new Chart(ctx23, {
    type: 'bar',
    data: {
        labels: ['Damman Gate', 'Khobar Gate', 'Dharan Gate', 'Midra Gate',], // Division names
        datasets: [{
            label: 'Business',
            data: [100, 95, 55, 70], // Replace with actual data
            backgroundColor: chartclr1, // Color for 2021 YTD
            borderColor: chartclr1,
            borderWidth: 2
        },
        {
            label: 'Personal',
            data: [120, 83, 56, 85], // Replace with actual data
            backgroundColor: chartclr2, // Color for 2022 YTD
            borderColor: chartclr2,
            borderWidth: 1
        },
        {
            label: 'Taxi',
            data: [110, 99, 66, 65], // Replace with actual data
            backgroundColor: chartclr3, // Color for THIS WEEK
            borderColor: chartclr3,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Violations by Division'
            }
        }
    }
});

// --------------------Slide09 chart04---------------------

var ctx24 = document.getElementById('chart26').getContext('2d');
let chart26 = new Chart(ctx24, {
    type: 'bar',
    data: {
        labels: ['Group2', 'Group5', 'Child org 1', 'Div 2', 'Div 1', /* add all other departments */],
        datasets: [{
            label: '',
            data: [100, 175, 180, 200, 250, /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }

        }
    }
})

// ------------Slide 10------------------------
// slide 10 chart01-------------------
var ctx25 = document.getElementById('chart27').getContext('2d');
var chart27 = new Chart(ctx25, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', /* add all other departments */],
        datasets: [{
            label: '',
            data: [500, 1200, 950, 600,  /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

// slide 10 chart02------------------------
var ctx26 = document.getElementById('chart28').getContext('2d');
var chart28 = new Chart(ctx26, {
    type: 'bar',
    data: {
        labels: ['Web', 'Security', 'Mobile', /* add all other departments */],
        datasets: [{
            label: '',
            data: [75, 300, 250,/* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

// ----------Slide 10 chart03--------------------------
var ctx27 = document.getElementById('chart29').getContext('2d');
var chart29 = new Chart(ctx27, {
    type: 'bar',
    data: {
        labels: ['Restricted', 'Non Restricted', /* add all other departments */],
        datasets: [{
            label: '',
            data: [4, 3  /* ... */],
            backgroundColor: chartclr1,
            borderColor: chartclr1,
            borderWidth: 1
        },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

// -----------------Slide 10 chart04--------------------------
let ctx28 = document.getElementById('chart30').getContext('2d');

let chart30 = new Chart(ctx28, {
    type: 'pie',
    data: {
        labels: [
            'Dahran Gate',
            'Damman Gate',
            'Midra Gate',
            'Khobar Gate',

        ],
        datasets: [{
            //   label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                chartclr1,
                chartclr2,
                chartclr3,
            ],
            hoverOffset: 4,
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                label: {
                    position: 'bottom',
                },
            }
        }]

    },
})
// slide 10 chart 5-----------------------------

let ctx29 = document.getElementById('chart31').getContext('2d');

let chart31 = new Chart(ctx29, {
    type: 'doughnut',
    data: {
        labels: [
            'India',
            'Saudi Arabia',
            'Pakistan',
            'Bengali',
            'American',

        ],
        datasets: [{
            //   label: 'My First Dataset',
            data: [300, 50, 100, 50],
            backgroundColor: [
                chartclr1,
                chartclr2,
                chartclr3,
                'rgba(182, 175, 166, 0.845)',
            ],
            hoverOffset: 4,
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                label: {
                    position: 'bottom',
                },
            }
        }]

    },
})

//-------------------- Slide 11 char01---------------------------
let ctx30 = document.getElementById('chart32').getContext('2d');

let chart32 = new Chart(ctx30, {
    type: 'pie',
    data: {
        labels: [
            'Dahran Gate',
            'Damman Gate',
            'Midra Gate',
            'Khobar Gate',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 130, 130, 70],
            backgroundColor: [
                chartclr1,
                chartclr2,
                chartclr3,
                'rgba(165, 42, 42, 0.300)'

            ],
            hoverOffset: 4,
            responsive: true,
            maintainAspectRatio: false
        }]
    },
})

// --------------------Slide11 chart2------------------------------

const ctx31 = document.getElementById('chart33').getContext('2d');

const data1 = {
    labels: Array.from({ length: 53 }, (_, i) => i + 1),
    datasets: [
        {
            label: 'Damman Gate',
            data1: [12, 0, 0, 4, 7, 1, 0, 3, 0, 2, 0, 0],
            borderColor: chartclr1,
            fill: false
        },
        {
            label: 'Khobar Gate',
            data1: [4, 1, 1, 0, 0, 3, 3, 10, 2, 0, 16, 4, 2, 2, 2, 2, 4, 3, 5, 1, 10, 1, 3, 3, 1, 6, 12, 3, 1, 4, 2, 2, 2, 9, 5, 2, 4, 3, 0, 0, 1, 1, 1, 1, 1, 3, 0, 1, 0, 1, 0],
            borderColor: chartclr2,
            fill: false
        },
        {
            label: 'Dhahran Gate',
            data1: [4, 1, 1, 0, 0, 3, 3, 10, 2, 0, 16, 1, 1, 1, 3, 0, 1, 0, 1, 0],
            borderColor: chartclr3,
            fill: false
        },
        {
            label: 'Midra Gate',
            data1: [4, 1, 1, 0, 0, 3, 3, 10, 2, 0, 16, 4, 2, 2, 2, 2, 1, 3, 3, 1, 6, 12, 3, 1, 4, 2, 2, 2, 9, 5, 2, 4, 3, 0, 0, 1, 1, 1, 1, 1, 3, 0, 1, 0, 1, 0],
            borderColor: chartclr2,
            fill: false
        }
    ]
};

const config1 = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Week Number'
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Number of Violations'
                },
                ticks: {
                    stepSize: 2
                }
            }
        }
    }
};
let chart33 = new Chart(ctx31, config1);

// --------------------Slide11 chart3------------------------------


let ctx32 = document.getElementById('chart34').getContext('2d');
let chart34 = new Chart(ctx32, {
    type: 'bar',
    data: {
        labels: ['Digital Sticker', 'Visitor', 'Easy Pass',], // Division names
        datasets: [{
            label: 'Dhamman Gate',
            data: [700, 400, 500], // Replace with actual data
            backgroundColor: chartclr1, // Color for 2021 YTD
            borderColor: chartclr1,
            borderWidth: 2
        },
        {
            label: 'Khobar Gate',
            // data: [400], // Replace with actual data
            backgroundColor: chartclr2, // Color for 2022 YTD
            borderColor: chartclr2,
            borderWidth: 1
        },
        {
            label: 'Dharan Gate',
            // data: [500], // Replace with actual data
            backgroundColor: chartclr3, // Color for THIS WEEK
            borderColor: chartclr3,
            borderWidth: 1
        },
        {
            label: 'Midra Gate',
            // data: [110, 99, 66, 65], // Replace with actual data
            backgroundColor: 'rgba(216, 198, 172, 0.845)', // Color for THIS WEEK
            borderColor: 'rgba(216, 198, 172, 0.845)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Violations by Division'
            }
        }
    }
});
