app.controller('productDetailsController', 
	
	['$scope', '$routeParams','productsService',
	function productDetailsController($scope, $routeParams,productsService) {
        
        $scope.productId = $routeParams.productId;

    	$scope.getProduct = productsService.getProducts();
	
	    $scope.getProduct.then(
		         
		        function(items) {
		         
		          angular.forEach(items.data.products, function(item){  

 		                   if(item.id == $scope.productId){

 		                   	 $scope.item = item;
 		                   	
 		                   }
 		            
		           });
		        },
		        
		        function(reason) {
		          $scope.somethingWrong = reason;
		          $scope.error = true;
		        }
		      );
    	
        //$scope.item  = productsService.getProduct($scope.productId);
		
	}]

  );

