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
