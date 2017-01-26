app.factory('speedtest', ['$http', function ($http) {
  var urlBase = '/api/';
  var factory = {};

  factory.getSpeeds = function () {
    return $http({
      method: 'GET',
      url: '/api/speeds'
    }).then(function successCallback(res) {
      console.log('Response: ' + res.data);
      return res.data;
    }, function errorCallback(err) {
      console.log('Error: ' + err);
      return err;
    })
  }

  return factory;
  
}]);

// return {
  //   getSpeeds: function() {
  //     $http({
  //       method: 'GET',
  //       url: '/api/speeds'
  //     }).then(function successCallback(res) {
  //       console.log('Response: ' + res.data);
  //       return res.data;
  //     }, function errorCallback(err) {
  //       console.log('Error: ' + err);
  //       return err;
  //     })
  //   }
  // }


  // WORKING
  // return {
  //   getSpeeds : function () {
  //     return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
  //     .then(function(response) {
  //       return response.data;
  //     }, function(err) {
  //       return err;
  //     });
  //   }
  // }