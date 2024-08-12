function toggleForm() {
  document.getElementById("login-form").classList.toggle("hidden");
  document.getElementById("register-form").classList.toggle("hidden");
}

function register() {
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  if (username && password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Registration successful!");
    toggleForm();
  } else {
    alert("Please fill out all fields.");
  }
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    document.getElementById("auth-container").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
  } else {
    alert("Invalid username or password.");
  }
}

function logout() {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("auth-container").classList.remove("hidden");
}
/*******chart-bar********/

// var barChartOptions = {
//   series: [
//     {
//       data: [19, 9, 29, 79],
//     },
//   ],
//   chart: {
//     type: "bar",
//     height: 350,
//     toolbar: {
//       show: false,
//     },
//   },

//   colors: ["blue", "red", "green", "yellow"],
//   plotOptions: {
//     bar: {
//       distributed: true,
//       borderRadius: 4,
//       borderRadiusApplication: "end",
//       horizontal: false, // Fixed typo
//       columnWidth: "40%",
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   legend: {
//     show: false,
//   },

//   xaxis: {
//     categories: ["gitplus", "Sammy", "Leslie", "Fatou"],
//   },
//   yaxis: {
//     title: {
//       text: "count",
//     },
//   },
// };

// var barChart = new ApexCharts(
//   document.querySelector("#bar-chart"),
//   barChartOptions
// );
// barChart.render();
document.addEventListener("DOMContentLoaded", function () {
  var barChartOptions = {
    series: [
      {
        data: [60, 40, 38, 45],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },

    colors: ["#246dec", "#cc3c43", "#367952", "#f5b74f"],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        borderRadiusApplication: "end",
        horizontal: false, // Fixed typo
        columnWidth: "40%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },

    xaxis: {
      categories: ["gitplus", "Sammy", "Leslie", "Fatou"],
    },
    yaxis: {
      title: {
        text: "count",
      },
    },
  };

  var barChart = new ApexCharts(
    document.querySelector("#bar-chart"),
    barChartOptions
  );
  barChart.render();
});
