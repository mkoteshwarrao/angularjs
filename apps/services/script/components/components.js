app.directive('cHeader', function() {
   
   return{
         restrict:'E',
         templateUrl:'pages/header.html'
   };

});

app.directive('cFooter', function() {
   
   return{
         restrict:'E',
         templateUrl:'pages/footer.html'
   };

});

app.directive('pDetails', function() {
    return {
      template: '<div>'+
        '<h2>{{item.title}}</h2>'+
        '<h2>Colour : {{item.color}}</h2>'+
        '<h2>Price : {{item.price}}</h2>'+
        '<img ng-src="{{item.image}}" width="100 px" height="100 px" />'+
        '<div>{{item.info}}</div>'+
        '<a ng-href="#/products/">back</a>'+
      '</div>',
      restrict: 'E'
     };
  });

 
