<?php
include 'dblinker.php';

function login(){
try {
	$reg_no = $_POST['regno'];
	$phone_no = $_POST['phoneno'];
	$depo_id = $_POST['depoid'];
	
	$link = linkToOBITS();
	$handle=$link->prepare("UPDATE `bus` SET `PhoneNumberOfSCU`=:phone_no,`Depo_ID`=:depo_id WHERE `RegistrationNo`=:reg_no"); 
	$handle->bindParam(':reg_no', $reg_no);
	$handle->bindParam(':phone_no', $phone_no);
	$handle->bindParam(':depo_id', $depo_id);
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

