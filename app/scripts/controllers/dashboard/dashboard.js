(function() {
  'use strict';

  angular.module('sslv2App')
    .controller('DashboardCtrl', DashboardCtrl);

  DashboardCtrl.$inject = ['$state', '$cookies'];

  function DashboardCtrl($state, $cookies) {

    var vm = this;
    var profile = $cookies.getObject(sessionStorage.getItem('id'));
    vm.full_name  = sessionStorage.getItem('full_name');
    vm.email = profile.email;
    vm.logout = logout;

    function logout(){
      $cookies.remove(profile.id);
      sessionStorage.clear();
      $state.go('login');
    }
  }

})();