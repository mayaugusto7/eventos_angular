/**
 * Created by macbookpro on 29/06/17.
 */
(function () {

    'use strict';

    app.controller('OneCtrl', OneCtrl);

    OneCtrl.$inject = ['$scope'];

    // Ouvinte EventListener
    function OneCtrl($scope) {

        $scope.$on('handleBroadcast', function (event, args) {
             $scope.message = 'ONE: ' + args.message;
         });

    }

})();