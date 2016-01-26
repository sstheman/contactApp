var myApp = angular.module('myApp', []); 
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {  
   console.log("Hello World from controller"); 
  var refresh = function() {
		$http.get('/contactlist').success(function(response) {
				console.log('got the data i requested');
				$scope.contactList = response;
				$scope.contact = "";
				
		});
		
	  
  };
  refresh();
  
		$scope.addContact = function() {
		
			console.log($scope.contact);	
			$http.post("/contactlist", $scope.contact).success(function(response) {
					console.log(response);
				refresh();
			});
		};
		
		$scope.remove = function(id) {
				console.log(id);
				$http.delete('/contactlist/' + id).success(function(response) {
						
						refresh();
				});				
				
		}

	
   }]);