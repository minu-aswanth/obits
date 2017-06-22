<?php
include 'dblinker.php';

function add_depo(){
try {
	$id = $_POST['depoid'];
	
	$link = linkToOBITS();
	$handle=$link->prepare("DELETE FROM `depo` WHERE `ID`=:id"); 
	$handle->bindParam(':id', $id);
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

