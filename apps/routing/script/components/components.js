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
   
   return{
         restrict:'E',
         templateUrl:'pages/productdetails.html'
   };

});