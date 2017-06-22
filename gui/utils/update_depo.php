<?php
include 'dblinker.php';

function login(){
try {
	$id = $_POST['depoid'];
	$latitude = $_POST['latitude'];
	$longitude = $_POST['longitude'];
	$contactno = $_POST['contactno'];
	
	$link = linkToOBITS();
	$handle=$link->prepare("UPDATE `depo` SET `ID`=[value-1],`Latitude`=[value-2],`Longitude`=[value-3],`OperatorContactNo`=[value-4],`LastUpdate`=[value-5] WHERE 1"); 
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

