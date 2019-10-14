<?php
    include "conn.php";
    if(isset($_POST['typeof'])){
        $a=$_POST['typeof'];
    switch($a){
        case 'shangping':
            $result=$conn->query("select * from shangping");
            break;
        case 'qita':
            $result=$conn->query("select * from zolpic");
            break;
    }}
    $arr=array();
    for($i=0;$i<$result->num_rows;$i++){
        $arr[$i]=$result->fetch_assoc();
    }
    echo json_encode($arr);