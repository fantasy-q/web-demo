var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: numArray(max_iter + 1),
    datasets: [
      {
        label: '7',
        fill: false,
        borderColor: 'red',
        backgroundColor: 'red',
        data: extract(0),
      },
      {
        label: '5',
        fill: false,
        borderColor: 'blue',
        backgroundColor: 'green',
        data: extract(1),
      },
      {
        label: '11',
        fill: false,
        borderColor: 'green',
        backgroundColor: 'green',
        data: extract(2),
      },
    ]
  },

  // Configuration options go here
  options: {
    // maintainAspectRatio: false,
    aspectRatio: 7,
    elements: {
      point: {
        radius: 1.5,
        pointStyle: 'circle',
        hitRadius: 1,
      },
      line: {
        borderWidth: 1,
      }
    },
    title: {
      display: true,
      position: 'left',
      text: 'Palette Array',
      fontSize: 24,
    },
    // 学到一个 legend 新含义：图表的图例
    legend: {
      display: true,
      align: 'start',
      position: 'top',
      labels: {
        boxWidth: 80,
        fontSize: 24,
      }
    }
  }
});
