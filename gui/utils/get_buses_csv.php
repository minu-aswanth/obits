<?php
include 'dblinker.php';

function get_buses_csv(){
try {
	$filename = "buses_list.csv";
	$fp = fopen('php://output', 'w');

	// $link = linkToOBITS();
	// $handle=$link->prepare("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA='obits' AND TABLE_NAME='bus'"); 
	// $handle->execute();

	// while ($row = $handle->fetch(PDO::FETCH_ASSOC)) {
	// 	$header[] = $row[0];
	// }	
	header('Content-type: application/csv');
	header('Content-Disposition: attachment; filename='.$filename);
	fputcsv($fp, $header);

	$num_column = count($header);		
	$link = linkToOBITS();
	$handle2=$link->prepare("SELECT bus.RegistrationNo, depo.Name ,bus.PhoneNumberOfSCU, bus.LastUpdate FROM bus INNER JOIN depo ON bus.depo_id = depo.ID;"); 
	$handle2->execute();
	fputcsv($fp, ["Registration Number","Depo Name","Phone Number of SCU","Last Updated"]);
	while($row = $handle2->fetch(PDO::FETCH_ASSOC)) {
		fputcsv($fp, $row);
	}
	exit;
    }

catch(Exception $e){
        return "F";
    }
}
session_start();
echo get_buses_csv();
?>