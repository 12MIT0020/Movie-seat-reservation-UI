angular.module('appRoot', ['bookTicketModule'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/bookTicket', {
            controller: 'bookTicketModuleController',
            controllerAs: 'vm',
            templateUrl: 'templates/bookTicketTemplate.html'
        })
        .otherwise({
            redirectTo: '/bookTicket'
        });
}]);
