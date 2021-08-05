var app = {
	init: function () {
		app.functionOne()
	},
	functionOne: function () {},
	scrollTop: function () {
		window.scrollTo({top: 0, behavior: "smooth"})
	},
}
;(function () {
	app.init()
})()

var ctx = document.getElementById("myChart").getContext("2d")
var myChart = new Chart(ctx, {
	type: "line",
	data: {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				data: [0, 14, 10, 24, 22, 45, 50],
				fill: true,
				backgroundColor: "rgba(75, 192, 192, 0.2)",
				borderColor: "rgb(75, 192, 192)",
				tension: 0,
			},
		],
	},
	options: {
		maintainAspectRatio: true,
		scales: {
			x: {
				grid: {
					display: false,
				},
			},
			y: {
				beginAtZero: false,
				grid: {
					display: true,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
				labels: {
					color: "rgb(255, 99, 132)",
				},
			},
		},
	},
})
