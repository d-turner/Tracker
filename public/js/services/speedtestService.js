app.factory('speedtestService', ['$http', function ($http) {
  var urlBase = '/api/speeds';
  var speedService = {};

  speedService.getSpeeds = function () {
    return $http({
      method: 'GET',
      url: urlBase,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return speedService;
  
}]);