fetch('../chart-data.json')
    .then(response => response.json())
    .then(chartData => {
        var ctx = document.getElementById('chart-left').getContext('2d');
        var timeChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartData.labels,
                datasets: [{
                    label: '시간대 별 청중 반응 차트',
                    data: chartData.data,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                maintainAspectRatio: false,
                aspectRatio: 1,
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: '인원'
                        },
                        ticks: {
                            stepSize: 10,
                            beginAtZero: true,
                            max: 30
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: '시간 (분)'
                        }
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error loading chart data:', error));