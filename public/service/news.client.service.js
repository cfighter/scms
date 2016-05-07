angular.module('webapp')
	.service('NewsService',["$http",'$q',NewsService]);
function NewsService($http,$q){
	function handelRequest(method,url,data){
		var defered=$q.defer();
		var config={
			method:method,
			url:url
		};
		if(method==="POST"){
			config.data=data
		}else if(method==="GET"){
			config.params=data
		}

		$http(config).success(function(data){
			defered.resolve(data)
		}).error(function(err){
			defered.reject(err);
		});
		return defered.promise;
	}
 return{
 	list:function(params){
 		return handelRequest("GET",'/news',params);
 	},
 	save:function(data){
 		return handelRequest("POST",'/news',data)
 	},
 	detail:function(id){
 		return handelRequest("GET",'/news/' + id);
 	}
 }
}