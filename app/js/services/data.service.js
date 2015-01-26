angular.module('prozesa')
    .factory('DataService', dataService);

dataService.$inject = ['$resource'];

function dataService($resource) {

    'use strict';

    return $resource('data/productos.json');

}
