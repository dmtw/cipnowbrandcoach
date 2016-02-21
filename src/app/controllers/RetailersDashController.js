(function(){

  angular
    .module('app')
    .controller('RetailersDashController', [
      '$timeout', '$q', 'retailersService',
      RetailersDashController
    ]);

  function RetailersDashController($timeout, $q, retailersService) {
    var vm = this;

    vm.retailers = retailersService.loadAll();
    vm.selectedCountry = null;
    vm.searchText = null;
    vm.querySearch = querySearch;
    vm.disableCaching = true;

    function querySearch (query) {
      var results = query ? vm.retailers.filter( createFilterFor(query) ) : [],
        deferred;
      deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    }

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };
    }
  }
})();
