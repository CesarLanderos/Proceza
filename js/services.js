angular.module('prozesa.services', [])
	.factory('jsonRecibido', function ($http) {
	    
	    var obtenido = {};
	    
	    $http({method: 'GET', url: 'productos.json'}).success(function (data) {
	        obtenido.productos = data;
	    });
	    
	    return obtenido;
	});