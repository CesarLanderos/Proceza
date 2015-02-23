angular.module('prozesa')
    .controller('EmpacadosSingleController', empacadosSingleController);

empacadosSingleController.$inject = ['DataService', '$stateParams'];

function empacadosSingleController(DataService, $stateParams) {

    'use strict';

    var vm = this;

    vm.producto = $stateParams.nombre;

    DataService.get(success, fail);

    function success(result) {

        vm.descripcion = result.empacados[vm.producto + ''];

    }

    function fail() {
    }

}
