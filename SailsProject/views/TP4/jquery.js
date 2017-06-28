$(document).ready(function(){
	$("#req_get").click(function() {
		$.get('index.php?name=re&firstname=te', function(data) {
			console.log(data);
		});

		$.getJSON(
			'index.php',
			{			
				"name" : "re",
				"firstname" : "te"
			},
			function(data) {
				console.log(data);
			}
		);
	});
});