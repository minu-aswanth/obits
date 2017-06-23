$(document).ready(function() {

	//getting all buses initially to display in the table
	$.ajax({
		url: 'utils/get_all_buses.php',
		type: 'POST',
		success: function(result) {
			var buses = $.parseJSON(result);
			// console.log(buses);
			for (var i = 0; i < buses.length; i++) {
				$('.bus_table tbody').append('<tr><td colspan="1"><input type="radio" name="groups"></td><td colspan="2">'+(i+1)+'</td><td colspan="4">'+buses[i].RegistrationNo+'</td><td style="display:none" colspan="4">'+buses[i].Depo_ID+'</td><td colspan="4">'+buses[i].Name+'</td><td colspan="4">'+buses[i].PhoneNumberOfSCU+'</td></tr>');
			}
		}
	});

	//getting all depos initially to display in table and for the select
	$.ajax({
		url: 'utils/get_all_depos.php',
		type: 'POST',
		success: function(result) {
			var depos = $.parseJSON(result);
			console.log(depos);
			for (var i = 0; i < depos.length; i++) {
				$('.depo_name_select').append('<option value='+ depos[i].ID +'>'+ depos[i].Name +'</option>')
				$('.depo_name_select_update').append('<option value='+ depos[i].ID +'>'+ depos[i].Name +'</option>')
				$('.depo_table tbody').append('<tr><td colspan="1"><input type="radio" name="groups"></td><td colspan="2">'+(i+1)+'</td><td colspan="4">'+depos[i].Name+'</td><td style="display:none" colspan="4">'+depos[i].ID+'</td><td colspan="4">'+depos[i].Latitude+'</td><td colspan="4">'+depos[i].Longitude+'</td><td colspan="4">'+depos[i].OperatorContactNo+'</td></tr>')
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
					alert("Successfully added bus");
					location.reload();
				}
				else{
					alert("Some error occured. Please try again");
				}
			}
		});
	});

	//to get details and display in the update bus modal
	update_bus_modal = function(){
		var bus_registration_number = $('input[name=groups]:checked').closest('tr').find('td')[2].innerHTML;
		var depo_id = $('input[name=groups]:checked').closest('tr').find('td')[3].innerHTML;
		var scu_phone_number = $('input[name=groups]:checked').closest('tr').find('td')[5].innerHTML;
		console.log(depo_id);
		$('.bus_registration_number_update').val(bus_registration_number);
		$('.depo_name_select_update').val(depo_id);
		$('.scu_phone_number_update').val(scu_phone_number);
		$("#update_bus_modal").modal();
	}

	//button to update buses
	$('.update_bus').click(function(){
		var bus_registration_number = $('.bus_registration_number_update').val();
		var depo_id = $('.depo_name_select_update').val();
		var scu_phone_number = $('.scu_phone_number_update').val();
		var data = {
			regno: bus_registration_number,
			phoneno: scu_phone_number,
			depoid: depo_id
		}
		$.ajax({
			url: 'utils/update_bus.php',
			data: data,
			type: 'POST',
			success: function(result) {
				if(result.includes("success")){
					alert("Bus updated successfully");
					location.reload();
				}
				else{
					alert("Some error occured. Please try again");
				}
			}
		});
	})

	//gets triggered when delete bus button is clicked
	delete_bus_modal = function(){
		var bus_registration_number = $('input[name=groups]:checked').closest('tr').find('td')[2].innerHTML;
		$.ajax({
			url: 'utils/delete_bus.php',
			data :{regno:bus_registration_number},
			type: 'POST',
			success: function(result) {
				if(result.includes("success")){
					alert("Bus deleted successfully");
					location.reload();
				}
				else{
					alert("Some error occured. Please try again");
				}
			}
		});
	}

	//adding a new bus
	$('.add_depo').click(function(){
		var depo_name = $('.depo_name').val();
		var depo_lat = $('.depo_lat').val();
		var depo_long = $('.depo_long').val();
		var operator_phone_numbers = $('.operator_phone_numbers').val();
		var data = {
			name: depo_name,
			latitude: depo_lat,
			longitude: depo_long,
			contactno: operator_phone_numbers
		}
		$.ajax({
			url: 'utils/add_depo.php',
			data: data,
			type: 'POST',
			success: function(result) {
				if(result.includes("success")){
					alert("Successfully added depo");
					location.reload();
				}
				else{
					alert("Some error occured. Please try again");
				}
			}
		});
	});

	//to get details and display in the update depo modal
	update_depo_modal = function(){
		var depo_name = $('input[name=groups]:checked').closest('tr').find('td')[2].innerHTML;
		var depo_id = $('input[name=groups]:checked').closest('tr').find('td')[3].innerHTML;
		var depo_lat = $('input[name=groups]:checked').closest('tr').find('td')[4].innerHTML;
		var depo_long = $('input[name=groups]:checked').closest('tr').find('td')[5].innerHTML;
		var operator_phone_numbers = $('input[name=groups]:checked').closest('tr').find('td')[6].innerHTML;
		console.log(depo_id);
		$('.depo_id_update').val(depo_id);
		$('.depo_name_update').val(depo_name);
		$('.depo_lat_update').val(depo_lat);
		$('.depo_long_update').val(depo_long);
		$('.operator_phone_numbers_update').val(operator_phone_numbers);
		$("#update_depo_modal").modal();
	}

	//button to update buses
	$('.update_depo').click(function(){
		var depo_name = $('.depo_name_update').val();
		var depo_id = $('.depo_id_update').val();
		var depo_lat = $('.depo_lat_update').val();
		var depo_long = $('.depo_long_update').val();
		var operator_phone_numbers = $('.operator_phone_numbers_update').val();
		var data = {
			depoid: depo_id,
			name: depo_name,
			latitude: depo_lat,
			longitude: depo_long,
			contactno: operator_phone_numbers
		}
		$.ajax({
			url: 'utils/update_depo.php',
			data: data,
			type: 'POST',
			success: function(result) {
				if(result.includes("success")){
					alert("Depo updated successfully");
					location.reload();
				}
				else{
					alert("Some error occured. Please try again");
				}
			}
		});
	})

	//gets triggered when delete depo button is clicked
	delete_depo_modal = function(){
		var depo_id = $('input[name=groups]:checked').closest('tr').find('td')[3].innerHTML;
		$.ajax({
			url: 'utils/delete_depo.php',
			data :{depoid:depo_id},
			type: 'POST',
			success: function(result) {
				if(result.includes("success")){
					alert("Depo deleted successfully");
					location.reload();
				}
				else{
					alert("Some error occured. Please try again");
				}
			}
		});
	}

});