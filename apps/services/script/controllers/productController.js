app.controller('productController', [ '$scope','$modal','$http','productsService',
	
	function productController( $scope,$modal,$http,productsService) {
	  
    $scope.products ={};
    $scope.myModal = $scope.myModal | {};
    
    $scope.getProducts = productsService.getProducts();
	
	  $scope.getProducts.then(
         
        function(items) {
          $scope.products = items.data.products;
           
        },
        
        function(reason) {
           
        }
    );

    

     $scope.showDetails = function(value){


                $scope.getProduct = productsService.getProduct(value);
                    $scope.getProduct.then(
                        
                        function(item) {
                          debugger;
                          $scope.item = item;
                          $scope.myModal = $modal(
                              {
                                    scope: $scope,
                                    templateUrl: 'pages/pdetails.html',
                                    show: true, 
                                    backdrop: 'static'
                              }
                          );

                          $scope.myModal.$promise.then($scope.myModal.show);

                        },
                        
                        function(reason) {
                          
                        }
                );
     };

      $scope.hideModal = function(){
             $scope.myModal.$promise.then($scope.myModal.hide);
      }


  }]);
