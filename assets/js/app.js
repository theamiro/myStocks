//javascript colors inline with bootstrap
const primary = "rgba(0, 90, 255, 1)"
const secondary = "rgb(185, 185, 185)"
const lightGrey = "rgba(185,185,185,0.5)"
const dark = "rgba(25, 25, 25, 1)"
const success = "rgb(10, 190, 130)"
const danger = "rgb(231, 24, 24)"

// CHART JS DEFAULTS — APPLY ACROSS THE ENTIRE SITE
//Gridlines
Chart.defaults.borderColor = lightGrey
//Color
Chart.defaults.color = dark
Chart.defaults.font.size = 14
Chart.defaults.font.family = "'Roboto', 'sans-serif'"
// Layout
Chart.defaults.layout.padding = 0
// Interaction
Chart.defaults.interaction.intersect = false
Chart.defaults.interaction.mode = "index"
// Legend
Chart.defaults.plugins.legend.display = false
//Tooltip
Chart.defaults.plugins.tooltip.enabled = false
Chart.defaults.plugins.tooltip.external = customTooltipHandler
// Aspect Ratio
Chart.defaults.maintainAspectRatio = true
// Points
Chart.defaults.elements.point.pointRadius = 0
Chart.defaults.elements.point.pointBackgroundColor = dark
Chart.defaults.elements.point.pointBorderColor = dark
Chart.defaults.elements.point.pointBorderWidth = 0
Chart.defaults.elements.point.pointHitRadius = 6
Chart.defaults.elements.point.pointHoverRadius = 6
// Options
Chart.defaults.scale.ticks.beginAtZero = false

//Plugins
Chart.register({
	id: "verticalLine",
	afterDraw: (chart) => {
		if (chart.tooltip?._active?.length) {
			let x = chart.tooltip._active[0].element.x
			let yAxis = chart.scales.y
			let ctx = chart.ctx
			ctx.save()
			ctx.beginPath()
			ctx.setLineDash([3, 6])
			ctx.moveTo(x, yAxis.top)
			ctx.lineTo(x, yAxis.bottom)
			ctx.lineWidth = 2
			ctx.strokeStyle = "rgba(0, 0, 0, .8)"
			ctx.stroke()
			ctx.restore()
		}
	},
})

// function to create a gradient, params 2d context from canvas — returns a gradient
function createSuccessGradient(canvasID) {
	let context = document.getElementById(canvasID).getContext("2d")
	let gradient = context.createLinearGradient(0, 0, 0, 500)
	gradient.addColorStop(0, "rgba(10, 190, 130, 0.5)")
	gradient.addColorStop(1, "rgba(10, 190, 130, 0)")
	return gradient
}
// function to create a gradient, params 2d context from canvas — returns a gradient
function createDangerGradient(canvasID) {
	let context = document.getElementById(canvasID).getContext("2d")
	let gradient = context.createLinearGradient(0, 0, 0, 500)
	gradient.addColorStop(0, "rgba(231, 24, 24, 0.5)")
	gradient.addColorStop(1, "rgba(231, 24, 24, 0.0)")
	return gradient
}

function customTooltipHandler(context) {
	// Tooltip Element
	var tooltipEl = document.getElementById("chartjs-tooltip")

	// Create element on first render
	if (!tooltipEl) {
		tooltipEl = document.createElement("span")
		tooltipEl.classList.add("badge", "bg-dark", "text-center")
		tooltipEl.id = "chartjs-tooltip"
		tooltipEl.innerHTML = "<span class='d-flex flex-row align-items-center py-1 px-2 gap-2'></span>"
		document.body.appendChild(tooltipEl)
	}

	// Hide if no tooltip
	var tooltipModel = context.tooltip
	if (tooltipModel.opacity === 0) {
		tooltipEl.style.opacity = 0
		return
	}

	function getBody(bodyItem) {
		return bodyItem.lines
	}

	// Set Text
	if (tooltipModel.body) {
		var titleLines = tooltipModel.title || []
		var bodyLines = tooltipModel.body.map(getBody)

		var innerHtml = "<p class='mb-0 fw-bold me-2'>"
		titleLines.forEach(function (title) {
			innerHtml += title
		})
		innerHtml += "</p> <p class='mb-0'>"
		bodyLines.forEach(function (body, i) {
			innerHtml += body
		})
		innerHtml += "</p>"

		var spanRoot = tooltipEl.querySelector("span")
		spanRoot.innerHTML = innerHtml
	}

	var position = context.chart.canvas.getBoundingClientRect()
	var bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont)

	// Display, position, and set styles for font
	tooltipEl.style.opacity = 1
	tooltipEl.style.position = "absolute"
	tooltipEl.style.transform = "translateX(-50%)"
	tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + "px"
	tooltipEl.style.top = position.top + window.pageYOffset + "px"
	tooltipEl.style.font = bodyFont.string
	tooltipEl.style.pointerEvents = "none"
}

$.fn.createLineChart = function (data) {
	return new Chart(this[0].getContext("2d"), {
		type: "line",
		data: data,
		options: {
			scales: {
				x: {
					grid: {
						drawOnChart: false,
						display: false,
					},
				},
				y: {
					alignToPixels: true,
					beginAtZero: false,
					grid: {
						display: true,
						drawBorder: false,
						drawTicks: false,
						lineWidth: 1.5,
					},
					ticks: {
						mirror: true,
						labelOffset: 10,
						z: 9,
					},
					suggestedMin: 156,
					suggestedMax: 170,
				},
			},
		},
	})
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
$(function () {
	"use strict"

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll(".needs-validation")

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener(
			"submit",
			function (event) {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add("was-validated")
			},
			false
		)
	})
})

$(function () {
	$(window).on("scroll", function () {
		if ($(".sticky-top").length) {
			var navbarHeight = $(".header").outerHeight(true)
			var heightStickyTop = $(".sticky-top").outerHeight(true)

			var offsetTop = $(window).scrollTop()
			if (offsetTop > 90) {
				$(".sticky-section").addClass("sticky-top drop-shadow border-top border-secondary-300")
				$(".sticky-section").css({
					top: navbarHeight + heightStickyTop + "px",
				})
			} else if (offsetTop < 90) {
				$(".sticky-section").removeClass("sticky-top drop-shadow border-top border-secondary-300")
			}
		}
	})
})
