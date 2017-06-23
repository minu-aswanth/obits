$(document).ready(function() {

	var mymap = L.map('mainMap').setView([17.3850, 78.4867], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibWludS1hc3dhbnRoIiwiYSI6ImNqMmZ5eHI2NjA3NTcycW84cWJ0aTVhNTMifQ.gr7zDVUOL4aNC5XFZD4CiA'
    }).addTo(mymap);
    var busIcon = L.icon({
    	iconUrl: 'images/busicon.png',
    	iconSize: [25, 25], // size of the icon
    });
    var markers = L.markerClusterGroup();
    
    setInterval(function(){
  		updateBusLocation();
	}, 5000);

    function updateBusLocation(){
    	markers.clearLayers();
		for(var i=0; i<busesInDepo.length; i++){
			$.ajax({
				url: 'utils/get_bus_location.php',
				data: {regno: busesInDepo[i]},
				type: 'POST',
				success: function(res) {
					res = $.parseJSON(res);
					console.log(res);
					var marker = L.marker([res.Latitude, res.Longitude], {icon: busIcon});
					markers.addLayer(marker);
				}
			});
		}
    	mymap.addLayer(markers);
    }

	//getting all buses initially to display in the table
	var busesInDepo = [];
	$.ajax({
		url: 'utils/get_all_buses_for_user.php',
		type: 'POST',
		success: function(result) {
			var buses = $.parseJSON(result);
			// console.log(buses);
			for (var i = 0; i < buses.length; i++) {
				$('.bus_table tbody').append('<tr><td>'+(i+1)+'</td><td>'+buses[i].RegistrationNo+'</td><td style="display:none">'+buses[i].Depo_ID+'</td><td>'+buses[i].PhoneNumberOfSCU+'</td><td><input type="checkbox" class="busFilterCheckbox" value='+ buses[i].RegistrationNo +'></td></tr>');
				busesInDepo.push(buses[i].RegistrationNo);
			}
			busesInDepoDuplicate = busesInDepo;
			// console.log(busesInDepo);
			//adding markers in map
			updateBusLocation();

			//filter function
			$(".busFilterCheckbox").click(function(){
				if(busesInDepo == busesInDepoDuplicate)
					busesInDepo = [];
		        var index = busesInDepo.indexOf($(this).val());
		        if(index == -1)
		        	busesInDepo.push($(this).val());
		        else{
		        	busesInDepo.splice(index, 1);
		        }
		        if(busesInDepo.length == 0)
		        	busesInDepo = busesInDepoDuplicate;
		        // console.log(busesInDepo);
		        updateBusLocation();
		    });					
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