var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
 $scope.users = [];

  $scope.getUsers = function() {
    
    mainService.getUsers().then(function(dataFromService) {
      console.log(dataFromService);
    });
  }

  $scope.getUsers();

});
