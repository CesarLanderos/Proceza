angular.module('prozesa.controllers', [])
	.controller('main', function($scope) {

	'use strict';

        $scope.navHeadSelected = 0;

	})
	.controller('granel', function($scope, $stateParams, jsonRecibido) {

		'use strict';

		$scope.datos = jsonRecibido;
		$scope.direccion = {
			nombre: $stateParams.producto
		};
		$scope.$on('ngRepeatFinished', function() {
			var viewPortHeight = $(window).height();
			$('#proGranel').height(viewPortHeight - 116);
		});
	})
	.controller('empacados', function($scope, $stateParams, jsonRecibido) {

		'use strict';

	    $scope.datos = jsonRecibido;
	    $scope.direccion = {
	        nombre: $stateParams.producto
	    };
	})
	.controller('contenedor', function ($rootScope, $location) {

		'use strict';

	    $rootScope.$on('$routeChangeStart',
			function (event, current) {

	        if ($location.path() === '/granel' ||
				$location.path() === ( '/granel/' + current.params.producto )) {

	            $('#labGranel').css('display', 'block');
	            $('#labEmp').css('display', 'none');

	        }
	        if ($location.path() === '/empacados' ||
				$location.path() === ('/empacados/' + current.params.producto)){

	            $('#labEmp').css('display', 'block');
	            $('#labGranel').css('display', 'none');

	        }
	        if ($location.path() === '/') {
	            $('#prodImg').css('display', 'none');
	        }

	        if ( $('#footer').css('bottom') === '-147px' &&
				(
					$location.path() === '/granel' ||
					$location.path() === '/empacados' ||
					$location.path() === ('/granel/' + current.params.producto) ||
					$location.path() === ('/empacados/' + current.params.producto)
				)) {

	            $('#footer').fadeOut(function () {
	                $(this).css({ 'bottom' : 'auto', 'top' : ' 10px'});
	                $('#prodImg').fadeIn();
	            });

	        }
	        if ($('#footer').css('top') === '50px' &&
				$location.path() === '/') {

	            $('#footer').fadeOut(function () {
	                $(this).css({ 'bottom': ' -147px', 'top': 'auto'});
	            });

	        }
	    });
	    $rootScope.$on('$routeChangeSuccess',
			function () {

	        $('#footer').fadeIn();

	    });

	});
