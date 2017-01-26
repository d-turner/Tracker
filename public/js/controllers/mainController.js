app.controller('mainController', ['$scope', 'speedtest', '$http', function($scope, speedtest, $http) {
  
  $scope.useService = function(data) {
    var promise = speedtest.getSpeeds();
    promise.then(function(response) {
      console.log(response.data);
      $scope.fiveDay = response.data;
    }, function(error) {
      console.log('Load failed: ' + error);
    });

  }();

  $http.get('/api/speeds')
    .then(function successCallback(res) {
      $scope.speeds = res.data;
    }, function errorCallback(res) {
      $scope.speeds = res;
    });
}])