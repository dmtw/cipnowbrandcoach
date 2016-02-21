(function () {
    'use strict';

    angular.module('app')
        .service('datesService', [
            '$q',
            datesService
        ]);

    function datesService($q) {
        var tableData = [
            {
                store: 'Sport Sperk',
                location: 'Munich',
                date: '26.01.2016',
                assign: true,
                status: 'Confirmed',
                class: 'md-accent'
            },
            {
                store: 'Adidas Originals',
                location: 'Berlin',
                date: '12.02.2016',
                assign: false,
                status: 'Open',
                class: 'md-accent'
            },
            {
                store: 'Sport Geyer',
                location: 'Schweinfurt',
                date: '06.03.2016',
                assign: false,
                status: 'Open',
                class: 'md-accent'
            },
            {
                store: 'Sport Kopp',
                location: 'Straubing',
                date: '15.03.2016',
                assign: true,
                status: 'Confirmed',
                class: 'md-accent'
            },
            {
                store: 'Sport Sperk',
                location: 'Munich',
                date: '26.01.2016',
                assign: true,
                status: 'Done',
                class: 'md-accent'
            },
        ];

        return {
            loadAllItems: function () {
                return $q.when(tableData);
            }
        };
    }
})();
