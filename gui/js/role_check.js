var timer;
$(document).ready(function(){ 
	fetchdata_role = function(){
		$.ajax({
        	url: 'utils/role_check.php',
        	type: 'GET',
        	success: function(result) {
				if(result == 'F'){
					alert('Connection Error')
				}		
				else{
					// result = result.substr(0,result.length-1)
					// if(result=="user"){
					// 	$('.admin').remove()
					// }
					console.log(result);
				}
			}
        });
	}
	fetchdata_role();
});

