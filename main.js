// data for chart
const labels = {
    "jsonData": [{
            "day": "mon",
            "amount": 17.45
        },
        {
            "day": "tue",
            "amount": 34.91
        },
        {
            "day": "wed",
            "amount": 52.36
        },
        {
            "day": "thu",
            "amount": 31.07
        },
        {
            "day": "fri",
            "amount": 23.39
        },
        {
            "day": "sat",
            "amount": 43.28
        },
        {
            "day": "sun",
            "amount": 25.48
        }
    ]
}


// javscript
let myColors = [];
let days = labels.jsonData.map(function(e) {
    return e.day;
});
let rate = labels.jsonData.map(function(e) {
    return e.amount;
});
let max = Math.max(...rate);

//jquery 
$.each(rate, function(index, value) {
    if (value == max) {
        myColors[index] = "hsl(186, 34%, 60%)";
    } else {
        myColors[index] = "hsl(10, 79%, 65%)";
    }
});
// chart config
const data = {
    labels: days,
    datasets: [{
        backgroundColor: myColors,
        data: rate,
        borderRadius: 5,
        borderSkipped: false,
    }],

};

const config = {
    type: 'bar',
    data: data,
    options: {
        barThickness: 30,
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    display: true,
                    font: {
                        size: 14
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    display: false,
                    beginAtZero: true
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            }
        }
    },
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);