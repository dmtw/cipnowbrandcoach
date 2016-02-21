(function(){

  angular
    .module('app')
    .controller('DatesController', [
      'datesService',
          DatesController
    ]);

  function DatesController(datesService) {
    var vm = this;

    vm.tableData = [];

    datesService
      .loadAllItems()
      .then(function(tableData) {
        vm.tableData = [].concat(tableData);
      });
  }

})();
