$( document ).ready(function() {

	$('.add_bus').click(function(){
		var bus_registration_number = $('.bus_registration_number').val();
		var depo_id = $('.depo_name_select').val();
		var scu_phone_number = $('.scu_phone_number').val();
		var data = {
			regno: bus_registration_number,
			phoneno: scu_phone_number,
			depoid: depo_id
		}
		$.ajax({
			url: '../utils/add_bus.php',
			data: data,
			type: 'POST',
			success: function(result) {
				if(result.includes("success")){
					alert("Successfully added");
					location.reload();
				}
				else{
					alert("Some error occured. Please try again");
				}
			}
		});
	});

});