(function(){
    'use strict';

    angular.modle('MyApp')
    .directive('senaiContRollerExample', senaiControllerExample);

    function senaiControllerExample(){
        return{
            restrict: 'EA',
            template: '<button ng-click="vm.addItem()"></button>'
            + '<ul><li ng-repeat="item in vm.items" ng-bind="item.name"></li></ul>'
            scope:{
                provider:'',
                add: '&'
            },
        
            controller: Controller, 
            controllerAs: 'vm', 
            bindToControllet: true,
            link: link
        };

        function controller(){
            var vm = this;
            vm.addItem = addItem;

            init();
            function init(){
                vm.items = angular.copy(vm.provider);
            }
            function addItem(){

            }
        }

        function link(scope, iElement, iAttrs){
            var items = angular.copy(scope.provider);

            init();

            function init(){
                var html = '<button id="addItem">Add Intem</button><div></div>';
                iElement.html(html);

                iElement.on('click', function(event){
                    if(event.srcElement.id === 'addItem'){
                        addItem();
                        event.preventDefault();
                    }
                });
            }
            function addItem(){
                scope.add();

                items.push({
                    name: 'Novo Cliente'
                });
                render();
            }
            function render(){
                var listaHtml = '<<ul>';
                for(var i = 0, len = items.length; i <len; i++){
                    listaHtml = '<li>' + items[i].name + '<li>';
                }
                listaHtml += '</ul>';

                iElement.find('<div>').html(listaHtml);
            }
        }
    }
})();