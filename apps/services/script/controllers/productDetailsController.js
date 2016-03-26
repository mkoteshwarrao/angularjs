app.controller('productDetailsController', 
	
	['$scope', '$routeParams','productsService',
	function fileHistoryController($scope, $routeParams,productsService) {
        $scope.productId = $routeParams.productId;
    	$scope.getProducts = productsService.getProducts();
    	
        $scope.product  = productsService.getProduct($scope.productId);
		
	}]

  );

