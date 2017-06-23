<?php
include 'dblinker.php';

function get_bus_location(){
try {
	$bus_reg_no = $_POST['regno'];
	$link = linkToOBITS();
	$handle=$link->prepare("SELECT * FROM `location_log` WHERE `BusRegNo`=:bus_reg_no ORDER BY TimeStamp DESC Limit 1");
	$handle->bindParam(':bus_reg_no', $bus_reg_no); 
	$handle->execute();
	$result = $handle->fetchall(PDO::FETCH_ASSOC);
	return json_encode($result);
    }

catch(Exception $e){
        return "F";
    }
}
session_start();
echo get_bus_location();
?>

