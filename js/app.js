angular.module('miApp', [
    'prozesa.controllers','prozesa.directives','prozesa.services',
        'ui.bootstrap', 'ui.router'])

    .config([
        '$stateProvider', '$urlRouterProvider',
        function ( $stateProvider, $urlRouterProvider ) {

        'use strict';

        $stateProvider
            .state( 'inicio', {
                url: '/',
                templateUrl: 'bienvenido.html',
                controller: 'main'
            })
            .state( 'inicio.granel', {
                url: 'granel',
                templateUrl: 'prodGranel.html',
                controller: 'granel'
            })
            .state( 'inicio.granel_producto', {
                url: 'granel/:producto',
                templateUrl: 'granel.html',
                controller: 'granel'
            })
            .state( 'inicio.empacados', {
                url: 'empacados',
                templateUrl: 'prodEmp.html',
                controller: 'empacados'
            })
            .state( 'inicio.empacados.producto', {
                url: '/empacados/:producto',
                templateUrl: 'emp.html',
                controller: 'empacados'
            });

            $urlRouterProvider.otherwise('/');

    }]);
