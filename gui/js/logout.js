var timer;
$(document).ready(function(){ 
	logout = function(){
		$.ajax({
        	url: 'utils/logout.php',
        	type: 'GET',
        	success: function(result) {
				window.location = "index.html"
			}
        });
	}
	$("#logout").click(function() {
		logout();
	});
});

