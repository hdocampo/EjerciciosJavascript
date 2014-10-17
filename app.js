var MyAPI = (function(){

var loadJsonUrl = function(method, url, params){

	var req = new XMLHttpRequest();
	req.open(method, url, params);
	req.send();

	console.log (req.readyState, req.status, req.responseText);

	if(req.status == 200 && req.readyState == 4){
		var parseado = JSON.parse(req.responseText);
		console.log(parseado);
		
		return parseado;
		
	} else {
		return false;			
	}

}

return{

	_loadJsonUrl : function(method, url, params){

		loadJsonUrl(method, url, params);

	}

}

}())