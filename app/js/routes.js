/**
 * Created by Cesar on 1/24/15.
 */
angular.module('prozesa')
    .config(router);

router.$inject = ['$stateProvider', '$urlRouterProvider'];

function router($stateProvider, $urlRouterProvider){

    'use strict';

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state( 'home', {
            url: '/',
            templateUrl: 'partials/views/home.html'
        })

        .state('empacados', {
            url: '/empacados',
            abstract: true,
            template: '<ui-view>'
        })

        .state('empacados.lista', {
            url: '/',
            templateUrl: 'partials/views/listaEmpacados.html',
            controller: 'EmpacadosListaController',
            controllerAs: 'vm'
        })
        .state('empacados.producto', {
            url: '/:nombre',
            templateUrl: 'partials/views/singleEmpacados.html'
        });

}
