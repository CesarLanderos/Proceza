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
            template: '<ui-view autoscroll="true">'
        })

        .state('empacados.lista', {
            url: '/',
            templateUrl: 'partials/views/listaEmpacados.html',
            controller: 'EmpacadosListaController',
            controllerAs: 'vm'
        })
        .state('empacados.producto', {
            url: '/:nombre',
            templateUrl: 'partials/views/singleEmpacados.html',
            controller: 'EmpacadosSingleController',
            controllerAs: 'vm'
        })

        .state('granel', {
            url: '/granel',
            abstract: true,
            template: '<ui-view autoscroll="true">'
        })

        .state('granel.lista', {
            url: '/',
            templateUrl: 'partials/views/listaGranel.html',
            controller: 'GranelListaController',
            controllerAs: 'vm'
        })
        .state('granel.producto', {
            url: '/:nombre',
            templateUrl: 'partials/views/singleGranel.html',
            controller: 'GranelSingleController',
            controllerAs: 'vm'
        });

}
