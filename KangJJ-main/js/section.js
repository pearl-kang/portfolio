new Chart(document.getElementById("radar-chart"), {
  type: 'radar',
  data: {
      labels: ["Banane", "Pomme", "Poire", "Cerise", "Raisin"],
      datasets: [
          {
              label: "Fruits mûrs",
              fill: true,
              backgroundColor: "rgba(188, 0, 95,0.2)",
              borderColor: "rgba(188, 0, 95,1)",
              //change la couleur des contours des points et du fond des points
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba(188, 0, 95,1)",
              data: [500, 300, 200, 600, 750]
      }, {
              label: "fruits pourris",
              fill: true,
              backgroundColor: "rgba(0,0,0,0.2)",
              borderColor: "rgba(0,0,0,1)",
              pointBorderColor: "#000",
              pointBackgroundColor: "rgba(0,0,0,1)",
              data: [200, 300, 400, 50, 170]
      }
    ]
  },
  options: {
      title: {
          display: true,
          text: 'Répartition des fruits mûrs et pourris',
          fontSize: 24

      }
  }
});
