(function(){
  'use strict';

  angular.module('app')
        .service('todoListService', [
        '$q',
      todoList
  ]);

  function todoList($q){
    var todos = [
      {text: 'Write Bills', done: false},
      {text: 'Rerquest Coaching', done: true},
      {text: 'Cancel Appointment @ Sport Scheck', done: false}
    ];

    return {
      loadAllItems : function() {
        return $q.when(todos);
      }
    };
  }
})();
