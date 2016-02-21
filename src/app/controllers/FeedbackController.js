(function () {
    angular
        .module('app')
        .controller('FeedbackController', [
            FeedbackController
        ]);

    function FeedbackController(_theme) {
        var vm = this;
        console.log(_theme);
        //console.log($mdColorPalette.valueOf());
        //var color = $mdColorPalette['blue'][100].value;
        //var rgb = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
        // TODO: move data to the service
        vm.eventChartData = [{key: 'Positive', y: 768660}, { key: 'Negative', y: 367404}, {key: 'Neutral', y: 41924 }];
        vm.storeChartData = [{key: 'Positive', y: 126560}, {key: 'Negative', y: 224365 }];

        vm.eventChartOptions = {
            chart: {
                type: 'pieChart',
                height: 130,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(0, 150, 136)', '#E75753', 'rgb(235, 235, 235)'],
               // color: rgb,
                showLabels: false,
                showLegend: false,
                title: '83%',
                margin: { top: -10, left: -20, right: -20 }
            }
        };
        vm.storeChartOptions = {
            chart: {
                type: 'pieChart',
                height: 130,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(0, 150, 136)', '#E75753', 'rgb(235, 235, 235)'],
                // color: rgb,
                showLabels: false,
                showLegend: false,
                title: '17%',
                margin: { top: -10, left: -20, right: -20 }
            }
        };
    }
})();
