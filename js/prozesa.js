var miApp = angular.module('miApp', [])
    .directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
    });

miApp.factory('jsonRecibido', function ($http) {
    
    var obtenido = {};
    
    $http({method: 'GET', url: 'productos.json'}).success(function (data) {
        obtenido.productos = data;
    });
    
    return obtenido;
});

miApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "bienvenido.html",
            controller: "bienvenido"
        })
        .when("/granel", {
            templateUrl: "prodGranel.html",
            controller: "granel"
        })
        .when("/empacados", {
            templateUrl: "prodEmp.html",
            controller: "empacados"
        })
        .when("/granel/:producto", {
            templateUrl: "granel.html",
            controller: "granel"
        })
        .when("/empacados/:producto", {
            templateUrl: "emp.html",
            controller: "empacados"
        })
        .otherwise({
            redirectTo: "/"
        });
});

miApp.controller("bienvenido", function ($scope) {
  
});

miApp.controller("granel", function ($scope, $routeParams, jsonRecibido) {
    $scope.datos = jsonRecibido;
    $scope.direccion = {
        nombre: $routeParams.producto
    };
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent){
        var viewPortHeight = $(window).height();
            $("#proGranel").height(viewPortHeight - 116);
    });
});

miApp.controller("empacados", function ($scope, $routeParams, jsonRecibido) {
    $scope.datos = jsonRecibido;
    $scope.direccion = {
        nombre: $routeParams.producto
    };
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent){
        var viewPortHeight = $(window).height();
            console.log(viewPortHeight - 335);
            $("#imgContainer").height('auto');
            $("#imgContainer").height(viewPortHeight - 335);
    });
});

miApp.controller("contenedor", function ($rootScope, $location) {
    
    $rootScope.$on("$routeChangeStart", function (event, current, previous, rejection) {

        if ($location.path() === "/granel" || $location.path() === ("/granel/" + current.params.producto)) {
            $("#labGranel").css("display", "block");
            $("#labEmp").css("display", "none");
        }
        if ($location.path() === "/empacados" || $location.path() === ("/empacados/" + current.params.producto)) {
            $("#labEmp").css("display", "block");
            $("#labGranel").css("display", "none");
        }
        if ($location.path() === "/") {
            $("#prodImg").css("display", "none");
        }
            
        if ($("#footer").css("bottom") === "-147px" && ($location.path() === "/granel" || $location.path() === "/empacados" || $location.path() === ("/granel/" + current.params.producto) || $location.path() === ("/empacados/" + current.params.producto))) {
            $("#footer").fadeOut(function () {
                $(this).css({ "bottom" : "auto", "top" : " 10px"});
                $("#prodImg").fadeIn();
            });
        }
        if ($("#footer").css("top") === "50px" && $location.path() === "/") {
            $("#footer").fadeOut(function (defer) {
                $(this).css({ "bottom" : " -147px", "top" : "auto"});
            });
        }
    });
    $rootScope.$on("$routeChangeSuccess", function (event, current, previous, rejection) {
        $("#footer").fadeIn();
        
        if ($location.path() === "/empacados") {
            
        }
    });
       
});