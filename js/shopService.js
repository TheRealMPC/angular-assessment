angular.module('app').service('shopService', function($http ){

  this.getProducts = function(){
      return $http.get('https://practiceapi.devmountain.com/products')
  }
  this.getProductsId = function(id){
      return $http.get('https://practiceapi.devmountain.com/products/' + id)
  }
});
