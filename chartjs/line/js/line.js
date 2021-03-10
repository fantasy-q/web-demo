var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset1',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
      },
      {
        label: 'Dataset2',
        backgroundColor: 'lightblue',
        borderColor: 'lightblue',
        data: [0, 5, 5, 20, 30, 30, 22]
      }
    ]
  },

  // Configuration options go here
  options: {}
});