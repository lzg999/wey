<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/4/11
 * Time: 16:02
 */
mysql_connect('127.0.0.1','root','root');//�������ݿ�ip,�û���������
mysql_query('set names utf8');//�������
mysql_select_db('wey');//�������ݿ������
$sql='SELECT * FROM car_vv5';//дsql
$res=mysql_query($sql);//ִ��sql���
$rows = array();//��������
while($row=mysql_fetch_assoc($res)){//����ÿһ�����ݸ�ֵ$row����
    $rows[]=$row;//��ÿһ�����ݷ�������
}
$data=json_encode($rows);//����ת���ɶ���
echo $data;