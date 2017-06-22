<?php
include 'dblinker.php';

function get_all_depos(){
try {
	$link = linkToOBITS();
	$handle=$link->prepare("SELECT * FROM depo"); 
	$handle->execute();
	$result = $handle->fetchall(PDO::FETCH_ASSOC);
	return json_encode($result);
    }

catch(Exception $e){
        return "F";
    }
}
session_start();
echo get_all_depos();
?>

