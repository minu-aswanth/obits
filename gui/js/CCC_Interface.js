$(document).ready(function() {

	//getting all buses initially to display in the table
	$.ajax({
		url: 'utils/get_all_buses.php',
		type: 'POST',
		success: function(result) {
			var buses = $.parseJSON(result);
			// console.log(buses);
			for (var i = 0; i < buses.length; i++) {
				$('.bus_table tbody').append('<tr><td>'+(i+1)+'</td><td>'+buses[i].RegistrationNo+'</td><td style="display:none">'+buses[i].Depo_ID+'</td><td>'+buses[i].Name+'</td><td>'+buses[i].PhoneNumberOfSCU+'</td></tr>');
			}
		}
	});

	//getting all depos initially to display in table and for the select
	$.ajax({
		url: 'utils/get_all_depos.php',
		type: 'POST',
		success: function(result) {
			var depos = $.parseJSON(result);
			// console.log(depos);
			for (var i = 0; i < depos.length; i++) {
				$('.depo_table tbody').append('<tr><td>'+(i+1)+'</td><td>'+depos[i].Name+'</td><td style="display:none">'+depos[i].ID+'</td><td>'+depos[i].OperatorContactNo+'</td></tr>')
			}
		}
	});

})