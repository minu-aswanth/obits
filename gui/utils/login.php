<?php
include 'dblinker.php';

function login(){
try {
	$username = $_POST['username'];
	$password = md5($_POST['password']);
	$link = linkToOBITS();
	$handle=$link->prepare("SELECT AccessLevel FROM `user` WHERE `Username` = :username AND `Password`=:password"); 
	$handle->bindParam(':username', $username);
	$handle->bindParam(':password', $password);
	$handle->execute();
	$result=$handle->fetch(PDO::FETCH_ASSOC);
	$handle2=$link->prepare("SELECT Role FROM `acl` WHERE `AccessLevel`=:accesslevel"); 
	$handle2->bindParam(':accesslevel', $result['AccessLevel']);
	$handle2->execute();
	$result=$handle2->fetch(PDO::FETCH_ASSOC);
	$_SESSION["role"] = $result['Role'];
	return $result['Role'];
    }

catch(Exception $e){
        return "F";
    }
}
session_start();
echo login();
?>

