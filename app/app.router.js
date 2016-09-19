;(function (app) {
    "use strict";

    app.config($routerConfig);

    $routerConfig.$inject = ['$stateProvider'];

    function $routerConfig($stateProvider) {
        var helloState = {
            name     : 'home',
            url      : '/home',
            template: '<home></home>'
        };

        var aboutState = {
            name    : 'about',
            url     : '/about',
            template: '<about></about>'
        };

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
    }

})(angular.module('app'));