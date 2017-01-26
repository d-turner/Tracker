app.controller('speedtestController', ['$scope', 'speedtestService', '$http', 
function($scope, speedtestService, $http) {
  
  speedtestService.getSpeeds()
  .then(function(response) {
    console.log('Success api access');
    console.log(response.data);
    console.log(response.status);
    $scope.speeds = response;
  }, function(response) {
    console.log('Fail api access');
    console.log(response.data);
    console.log(response.status);
  });
}])