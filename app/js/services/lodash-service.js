(function(){
    'use strict';

    angular.module('MyApp')
    .factory('_', LodashFactory);

    /* @Inject */
    function LodashFactory($window){
      if (!$window._){
          console.log('Lodash não disponível');
      }

      return $window._;
    }

})();