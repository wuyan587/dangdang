<?php

include "conn.php";//连接数据库
if(isset($_POST['phone'])&&isset($_POST['password'])&&isset($_POST['type'])){
    $user=$_POST['phone'];
    $pass=($_POST['password']);
    $conn->query("insert registry values(null,'$pass','$user')");
}else if(isset($_POST['phone'])&&isset($_POST['password'])){
    $user=$_POST['phone'];
    $pass=($_POST['password']);
    $re=$conn->query("select * from registry where phone='$user' and password='$pass'");
    if($re->num_rows>=1){
        echo true;
    }else{
        echo false;
    }
}else if(isset($_POST['phone'])){
    $ph=$_POST['phone'];
    $re=$conn->query("select * from registry where phone='$ph' ");
    if($re->num_rows>=1){
        echo true;
    }else{
        echo false;
    }
} 