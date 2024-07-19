fetch('../right-chart-data.json')
    .then(response => response.json())
    .then(chartData => {
        var ctx = document.getElementById('chart-right').getContext('2d');
        var myHorizontalChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: '시간대 별 청중 반응 차트',
                    data: chartData.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1,
                    barThickness: 3
                }]
            },
            options: {
                legend: {
                    display: false
                },
                indexAxis: 'y',
                maintainAspectRatio: false,
                aspectRatio: 1,
                scales: {
                    x: {
                        display: false,
                        grid: {
                            display: false
                        },
                        beginAtZero: true,
                        max: 100,
                    },
                    y : {
                        grid: {
                            display: false
                        },
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error loading chart data:', error));