app.controller('productDetailsController', 
	
	['$scope','$http', '$routeParams',function fileHistoryController($scope, $http, $routeParams) {
    
    	$scope.productId = $routeParams.productId;

     	$http.get('data/products.json')
       		.then(function(res){
       			//debugger;
          		$scope.products = res.data.products;  

          		angular.forEach($scope.products, function(items){
                   //debugger;
	                angular.forEach(items.variants, function(item){
	                	//debugger;
		                   if(item.product_id == $scope.productId){
		                   	 $scope.details = item;
		                   	 $scope.item = items;
		                   	 //debugger;
		                   }
		         	});  
		        });              
        });

        

	}]

  );

