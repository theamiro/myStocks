# myStocks

Documentation on myStocks Customizations

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

The background of the line-chart can be set as a single color or a gradient. Set the gradient by using the two functions and pass in the id of the canvas as a param

```
createSuccessGradient(canvas-id)
createDangerGradient(canvas-id)
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
