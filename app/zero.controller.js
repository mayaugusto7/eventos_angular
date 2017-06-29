/**
 * Created by macbookpro on 29/06/17.
 */
(function () {

    'use strict';

    app.controller('ZeroCtrl', ZeroCtrl);

    ZeroCtrl.$inject = ['$scope'];

    // Emissor EventDispatcher
    function ZeroCtrl($scope) {

        $scope.handleClick = function (msg) {
            $scope.$emit('handleEmit', {message: msg});
        }
    }

})();