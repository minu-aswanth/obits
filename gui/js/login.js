// var timer;
$(document).ready(function(){ 
	fetchdata = function(){
		var username=$('#username').val();
		var password=$('#password').val();
		$.ajax({
        	url: 'utils/login.php',
			data :{username:username,password:password},
        	type: 'POST',
        	success: function(category) {
				if(category.length == 1){
					alert('Connection Error')
				}		
				else if(category.length == 2){
					alert('Invalid Login Credentials')
				}			
				else{
					$("#next").attr("href", "CCC_Interface.html")
					document.getElementById("next").click()
				}
			}
        });
	}
	$("#login").click(function() {
		fetchdata();
	});
	document.onkeydown=function(){
 	   	if(window.event.keyCode=='13'){
			$("#login").click();
		}
	}
});