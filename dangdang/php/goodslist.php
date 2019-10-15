<?php
    include "conn.php";
    if(isset($_POST['typeof'])){
        $a=$_POST['typeof'];
    switch($a){
        case 'shangping':
            $result=$conn->query("select * from shangping");
            break;
        case 'banner':
            $result=$conn->query("select * from banner");
            break;
        case 'detail':
            $result=$conn->query("select * from detail");
            break;
    }
    $arr=array();
    for($i=0;$i<$result->num_rows;$i++){
        $arr[$i]=$result->fetch_assoc();
    }
    echo json_encode($arr);
}
    if(isset($_GET['sid'])){
        $id=$_GET['sid'];
        $result=$conn->query("select * from shangping where sid=$id");
        // $arr=array();
        // for($i=0;$i<$result->num_rows;$i++){
        //     $arr[$i]=;
        // }
        echo json_encode($result->fetch_assoc());
    }
