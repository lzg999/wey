<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/4/11
 * Time: 16:02
 */
mysql_connect('127.0.0.1','root','root');//连接数据库ip,用户名，密码
mysql_query('set names utf8');//编码规则
mysql_select_db('wey');//连接数据库的名字
$sql='SELECT * FROM car_vv5';//写sql
$res=mysql_query($sql);//执行sql语句
$rows = array();//定义数组
while($row=mysql_fetch_assoc($res)){//遍历每一条数据赋值$row接收
    $rows[]=$row;//将每一条数据放入数组
}
$data=json_encode($rows);//将其转换成对象
echo $data;