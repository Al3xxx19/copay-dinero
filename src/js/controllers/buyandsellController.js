'use strict';

angular.module('copayApp.controllers').controller('buyandsellController', function($scope, $ionicHistory, buyAndSellService, lodash, $window) {

  $scope.$on("$ionicView.beforeEnter", function(event, data) {
    // $scope.services = buyAndSellService.get();

    // if (lodash.isEmpty($scope.services))
    //   $ionicHistory.goBack();

    $scope.services = [

      {
        url : 'https://www.southxchange.com/Market/Book/DIN/BTC',
        caption : 'Southxchange'
      },
	  {
		url : 'https://stocks.exchange/trade/DIN/BTC',
		caption : 'Stocks exchange'
	  },
      {
        url : 'https://graviex.net/markets/dinbtc',
        caption : 'Graviex'
      },
    ]
  });

  $scope.openMarket = function (url) {
    $window.open(url, '_self');
  };

});
