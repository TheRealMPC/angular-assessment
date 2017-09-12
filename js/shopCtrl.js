angular.module('app').controller('shopCtrl', function($scope, shopService) {

  shopService.getProducts().then(res => {
    $scope.products = res.data
    return res.data
  })
});
