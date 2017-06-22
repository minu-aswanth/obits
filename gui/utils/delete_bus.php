<?php
include 'dblinker.php';

function delete_bus(){
try {
	$reg_no = $_POST['regno'];
	
	$link = linkToOBITS();
	$handle=$link->prepare("DELETE FROM `bus` WHERE `RegistrationNo` = :reg_no"); 
	$handle->bindParam(':reg_no', $reg_no);
	$handle->execute();
	return "success";
    }

catch(Exception $e){
        return "F";
    }
}
session_start();
echo delete_bus();
?>

