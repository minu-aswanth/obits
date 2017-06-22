<?php
include 'dblinker.php';

function get_all_buses(){
try {
	$link = linkToOBITS();
	$handle=$link->prepare("SELECT bus.*, depo.Name FROM bus INNER JOIN depo ON bus.depo_id = depo.ID;"); 
	$handle->execute();
	$result = $handle->fetchall(PDO::FETCH_ASSOC);
	return json_encode($result);
    }

catch(Exception $e){
        return "F";
    }
}
session_start();
echo get_all_buses();
?>

