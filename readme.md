# myStocks

First, this was such a cool project, I loved it!

myStocks is built on Bootstrap 5 https://getbootstrap.com/docs/5.0/getting-started/introduction/
Use the official documentation for Bootstrap 5.

To make myStocks look the way it does, cutomizations had to be made. Here are the significant ones and all the libraries used.

##Libraries
Bootstrap 5 — For CSS Styles and Simple JS
Popper.js — Dependency for some Bootstrap functions like dropdowns
jQuery 3.3.1 — For cool and simple JS
Chart.js — For building charts

### Tables

Classes `.table-flush` removes padding from the `<td>` to create a table that reaches edge to edge

### Graphs

####Canvas

Used to render the graphs and all their elements. It is built off Chart.js https://www.chartjs.org/
To ease usage, I created a jQuery Plugin that renders a line chart per the specs of the design. The plugin takes data in Chart JS format. See https://www.chartjs.org/docs/latest/general/data-structures.html

TODO: Add chart option customization

```
data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
        {
            data: [168, 165, 164, 166, 165, 163, 162],
            fill: true,
            backgroundColor: createDangerGradient("all-share"),
            borderColor: danger,
        },
    ],
}
$("#canvas-id").createLineChart(data)
```

The background of the line-chart can be set as a single color ` "rgba(255,0,0,1)"` or a gradient. Set the gradient by using either of the two functions and pass in the id of the canvas as a parameter.

```
createSuccessGradient(canvas-id) - green in color
createDangerGradient(canvas-id) - red in color
createInfoGradient(canvas-id) - blue in color
```

For charts with more than one dataset, it is recommended to set `fill` to false and to remove the background color.

```
datasets: [
        {
            data: [168, 165, 164, 166, 165, 163, 162],
            fill: false,
            borderColor: success,
        },
    ],
```

To customize the color of the graphs, see the Javascript color options below.

#### Table Graphs

The mini graphs that show up on the tables are actually svg representations of the trend. Picked the direction as it is the generally accepted design pattern, considering performance. I sure hope the api can return svgs.

###Javascript Colors
Some Javascript colors inline with bootstrap

```
const primary = "rgba(0, 90, 255, 1)"
const secondary = "rgb(185, 185, 185)"
const lightGrey = "rgba(185,185,185,0.5)"
const dark = "rgba(25, 25, 25, 1)"
const success = "rgb(10, 190, 130)"
const danger = "rgb(231, 24, 24)"
```
