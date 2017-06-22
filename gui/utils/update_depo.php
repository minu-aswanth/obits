<?php
include 'dblinker.php';

function update_depo(){
try {
	$id = $_POST['depoid'];
	$name = $_POST['name'];
	$latitude = $_POST['latitude'];
	$longitude = $_POST['longitude'];
	$contactno = $_POST['contactno'];
	
	$link = linkToOBITS();
	$handle=$link->prepare("UPDATE `depo` SET `Name`=:name,`Latitude`=:latitude,`Longitude`=:longitude,`OperatorContactNo`=:contactno WHERE `ID`=:id"); 
	$handle->bindParam(':id', $id);
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
echo update_depo();
?>

