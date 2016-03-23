app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
      }).
      when('/products', {
        templateUrl: 'pages/productlist.html',
        controller: 'productController'
      }).
      when('/products/:productId', {
        templateUrl: 'pages/productdetails.html',
        controller: 'productDetailsController'
      }).
      when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);