<?php
include 'dblinker.php';

function add_depo(){
try {
	$name = $_POST['name'];
	$latitude = $_POST['latitude'];
	$longitude = $_POST['longitude'];
	$contactno = $_POST['contactno'];
	
	$link = linkToOBITS();
	$handle=$link->prepare("INSERT INTO `depo`(`name`, `Latitude`, `Longitude`, `OperatorContactNo`) VALUES (:name, :latitude, :longitude, :contactno)"); 
	$handle->bindParam(':name', $name);
	$handle->bindParam(':latitude', $latitude);
	$handle->bindParam(':longitude', $longitude);
	$handle->bindParam(':contactno', $contactno);
	$handle->execute();
	return "success";
    }

catch(Exception $e){
        return "F";
    }
}
session_start();
echo add_depo();
?>

