!function(){"use strict";function a(){function a(a,b,c){function d(){var a='<button id="addItem">Add Intem</button><div></div>';b.html(a),b.on("click",function(a){"addItem"===a.srcElement.id&&(e(),a.preventDefault())})}function e(){a.add(),g.push({name:"Novo Cliente"}),f()}function f(){for(var a="<<ul>",c=0,d=g.length;c<d;c++)a="<li>"+g[c].name+"<li>";a+="</ul>",b.find("<div>").html(a)}var g=angular.copy(a.provider);d()}return{restrict:"EA",template:'<button ng-click="vm.addItem()"></button><ul><li ng-repeat="item in vm.items" ng-bind="item.name"></li></ul>',scope:{provider:"",add:"&"},controller:Controller,controllerAs:"vm",bindToControllet:!0,link:a}}angular.modle("MyApp").directive("senaiContRollerExample",a)}();