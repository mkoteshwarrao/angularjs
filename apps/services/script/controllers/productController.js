app.controller('productController', ['$compile', '$scope','$http','productsService',
	
	function productController($compile,$scope,$http,productsService) {
	  $scope.showModal = false;
    $scope.products ={};
    
    
    $scope.getProducts = productsService.getProducts();
	
	 $scope.getProducts.then(
        // OnSuccess function
        function(items) {
          $scope.products = items.data.products;
          $scope.success = true;
        },
        // OnFailure function
        function(reason) {
          $scope.somethingWrong = reason;
          $scope.error = true;
        }
      );

     $scope.showDetails = function(value){

   			    angular.forEach($scope.products, function(item){   
 		                   if(item.id == value){
 		                   	 $scope.item = item;
 		                   	 $scope.showModal = !$scope.showModal; 
 		                   }
 		            
		        });
     };


  }]);
