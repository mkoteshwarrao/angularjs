app.service('productsService', ['$http', '$q', function($http, $q){
     
      var deferObject,
      myMethods = {
 
        getProducts: function() {
          var promise       =  $http.get('data/products.json'),
                deferObject =  deferObject || $q.defer();
 
                promise.then(
                  
                  function(res){
                    deferObject.resolve(res);
                  },
                   
                  function(failure){
                   
                    deferObject.reject(failure);
                  });
 
           return deferObject.promise;
          }
       };
    
       return myMethods;
 
    }]);




