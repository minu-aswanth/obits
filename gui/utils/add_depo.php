<?php
include 'dblinker.php';

function login(){
try {
	$latitude = $_POST['latitude'];
	$longitude = $_POST['longitude'];
	$contactno = $_POST['contactno'];
	
	$link = linkToOBITS();
	$handle=$link->prepare("INSERT INTO `depo`(`Latitude`, `Longitude`, `OperatorContactNo`) VALUES (:latitude, :longitude, :contactno)"); 
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
echo login();
?>

