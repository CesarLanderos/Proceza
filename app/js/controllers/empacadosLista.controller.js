angular.module('prozesa')
    .controller('EmpacadosListaController', empacadosListaController);

empacadosListaController.$inject = ['DataService'];

function empacadosListaController(DataService) {

    'use strict';

    var vm = this;

    DataService.get(success, fail);

    function success(result) {

        vm.lista = result.imgEmp;

    }

    function fail() {
    }

}
