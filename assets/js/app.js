function customTooltipHandler(context) {
	// Tooltip Element
	var tooltipEl = document.getElementById("chartjs-tooltip")

	// Create element on first render
	if (!tooltipEl) {
		tooltipEl = document.createElement("span")
		tooltipEl.classList.add("badge", "bg-dark", "text-center")
		tooltipEl.id = "chartjs-tooltip"
		tooltipEl.innerHTML = "<span class='d-flex flex-row align-items-center py-1 px-2'></span>"
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
	tooltipEl.style.top = position.top + window.pageYOffset - 100 + tooltipModel.caretY + "px"
	tooltipEl.style.font = bodyFont.string
	tooltipEl.style.pointerEvents = "none"
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
;(function () {
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
})()
