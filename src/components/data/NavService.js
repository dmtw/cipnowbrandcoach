(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Profile',
        icon: 'face',
        sref: '.profile'
      },
        {
            name: 'Open Dates',
            icon: 'event',
            sref: '.dates'
        },
        /*{
            name: 'HR',
            icon: 'supervisor_account',
            sref: '.humanresources'
        },*/
        {
            name: 'Retailer',
            icon: 'store',
            sref: '.retailers'
        },
        {
            name: 'Appointments',
            icon: 'schedule',
            sref: '.appointments'
        }/*,
      {
        name: 'Table',
        icon: 'view_module',
        sref: '.table'
      }*/
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
