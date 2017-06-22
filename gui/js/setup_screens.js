$( document ).ready(function() {

	//getting all buses initially to display in the table
	$.ajax({
		url: 'utils/get_all_buses.php',
		type: 'POST',
		success: function(result) {
			var buses = $.parseJSON(result);
			// console.log(buses);
			for (var i = 0; i < buses.length; i++) {
				$('.bus_table tbody').append('<tr><td colspan="1"><input type="radio" name="groups"></td><td colspan="2">'+(i+1)+'</td><td colspan="4">'+buses[i].RegistrationNo+'</td><td colspan="4">'+buses[i].Name+'</td><td colspan="4">'+buses[i].PhoneNumberOfSCU+'</td></tr>')
			}
		}
	});

	$.ajax({
		url: 'utils/get_all_depos.php',
		type: 'POST',
		success: function(result) {
			var depos = $.parseJSON(result);
			console.log(depos);
			for (var i = 0; i < depos.length; i++) {
				$('.depo_name_select').append('<option value='+ depos[i].ID +'>'+ depos[i].Name +'</option>')
			}
		}
	});

	//adding a new bus
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
			url: 'utils/add_bus.php',
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