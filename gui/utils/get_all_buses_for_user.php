<?php
include 'dblinker.php';

function get_all_buses(){
try {
	$depo_id = $_SESSION['depo_id'];
	$link = linkToOBITS();
	$handle=$link->prepare("SELECT bus.*, depo.Name FROM bus INNER JOIN depo ON bus.depo_id = depo.ID AND bus.depo_id = :depo_id");
	$handle->bindParam(':depo_id', $depo_id); 
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

