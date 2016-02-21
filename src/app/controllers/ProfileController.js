(function(){

  angular
    .module('app')
    .controller('ProfileController', [
      ProfileController
    ]);

  function ProfileController() {
    var vm = this;

    vm.user = {
      title: 'rfeynman',
      email: 'r.feynman@gmail.com',
      firstName: 'Richard',
      lastName: 'Feynman' ,
      company: 'Freelancer' ,
      address: 'Kesslerplatz 12',
      city: 'Nürnberg' ,
      state: 'Bavaria' ,
      biography: 'Agile sport student with experience in direct sales.',
      postalCode : '90489',
        submissionDate: '03/12/2015'
    };
  }

})();
