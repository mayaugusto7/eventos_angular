/**
 * Created by macbookpro on 29/06/17.
 */
(function () {

    'use strict';

    app.controller('TwoCtrl', TwoCtrl);

    TwoCtrl.$inject = ['$scope'];

    // Ouvinte EventListener
    function TwoCtrl($scope) {

         $scope.$on('handleBroadcast', function (event, args) {
             $scope.message = 'TWO: ' + args.message;
         });

    }

})();