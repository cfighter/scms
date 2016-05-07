angular.module('webapp')
.controller('NewsController',['$scope','NewsService',NewsController]);

function NewsController($scope,NewsService){
	$scope.list=[];
	$scope.current={};

	$scope.openDetail=function(id){

		$scope.loadDetail(id);
		console.log($scope.current);
		$('#modal-detail').modal('show');
		

	};
	$scope.loadDetail=function(id){
		NewsService.detail(id).then(
			function(data){
				$scope.current=data;
			},
			function(err){
				
			}			
		);
	};
	$scope.loadNews=function(){
		NewsService.list().then(
			function(data){
				$scope.list=data;
			},
			function(err){
				
			}
		);

	};
	$scope.loadNews();
}