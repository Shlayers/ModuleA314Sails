xhr.onreadystatechange = function() {
	if (xhr.readyState == 4 && xhr.status == 200)
		maCallback(xhr.responseText); 
	};

function maCallback(data){
		var doc = eval( '(' + data + ')');
		var nomMenu = doc.menu.value;
		doc.commandes[0].titre ;
		doc.commandes[0].action;
};

