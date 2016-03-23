app.controller('productController', ['$compile', '$scope','$http','$window',
	
	function productController($compile,$scope,$http,$window) {
   
    $scope.message = "file Controller";

    $http.get('data/products.json')
       .then(function(res){
       	//debugger;
          $scope.products = res.data.products;                
        });

      $scope.openWindow = function(d) {
      	debugger;
        $window.open('#/products/'+d.product_id, 
        	'C-Sharpcorner', 'width=500,height=400');
     };



  }]);
