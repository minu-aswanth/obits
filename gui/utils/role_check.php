<?php
include 'dblinker.php';

function fetch_role(){
try {
        return $_SESSION["role"];
    }

catch(Exception $e){
        return "F";
    }
}
session_start();
echo fetch_role();
?>

