(function(){

  angular
    .module('app')
    .controller('RetailersController', [
      'retailersService',
          RetailersController
    ]);

  function RetailersController(retailersService) {
    var vm = this;

    vm.retailersData = retailersService
        .loadAllFull();

    retailersService
      .loadAllFull()
      /*.then(function(retailersData) {
        vm.retailersData = [].concat(retailersData);
      });*/
  }

})();
