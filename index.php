<?php

$username="root";
$password="";
$database = new PDO("mysql:host=local host;db name= bis4;charset=utf8;",$username,$password);

if($database){
    echo'تم الاتصال بقاعدة بيانات' ;
}
else{
    echo'لم يتم الاتصال
    ';
}
?>

