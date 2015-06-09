angular.module('notificaciones', ['angular-growl'])
	.config(['growlProvider', function (growlProvider) {
    	growlProvider.globalTimeToLive(6000);
    	growlProvider.onlyUniqueMessages(false);
    	growlProvider.globalReversedOrder(true);
 	}]);