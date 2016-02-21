(function(){

  angular
    .module('app')
    .controller('AppointmentsController', [
      'datesService',
          AppointmentsController
    ]);

  function AppointmentsController(datesService) {
    var vm = this;

    vm.tableData = [];

      datesService
      .loadAllItems()
      .then(function(datesService) {
        vm.appointmentsData = [].concat(datesService);
      });
  }

})();
