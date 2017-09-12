angular.module('app').controller('productDetailsCtrl', function( $scope, shopService, $stateParams ){

  $scope.Id = $stateParams.id;

    $scope.getProductsId = function(){
      shopService.getProductsId($scope.Id).then(res => {
        $scope.products = res.data;
      });
    }

    $scope.getProductsId();
});
