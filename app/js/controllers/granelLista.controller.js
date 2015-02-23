angular.module('prozesa')
    .controller('GranelListaController', granelListaController);

granelListaController.$inject = ['DataService'];

function granelListaController(DataService) {

    'use strict';

    var vm = this;

    vm.getListNames = getListNames;
    vm.options      = [];

    vm.options = [
        'frijol',
        'cereales',
        'hojuelas',
        'arroz',
        'botana',
        'secos',
        'fruta-seca',
        'maíz',
        'especias-y-condimentos',
        'sal',
        'harina',
        'pastas',
        'chiles',
        'alimento-para-mascotas',
        'dulces',
        'semillas'
    ];

    DataService.get(success, fail);

    function success(result) {

        vm.lista = result.granel;

    }

    function fail() {
    }

    function getListNames(name) {
        return name.replace(/-/g, ' ');
    }

}
