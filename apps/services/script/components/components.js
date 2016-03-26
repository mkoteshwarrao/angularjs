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
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ item.title }} clicked!!</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
               '<h2 style="color:{{ details.option1}};">Colour : {{details.option1}}</h2>'+
               '<h2>Price : {{ details.price}}</h2>'+
               '<img ng-src="{{item.image.src}}" width="100 px" height="100 px" />'+
               '<div>{{ item.body_html}}</div>'+
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
          scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });

 
