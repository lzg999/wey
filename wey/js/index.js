/**
 * Created by 罗志刚 on 2018/4/7.
 */
window.onload=function(){
    document.getElementById("btn_1").onmouseover=function(){
        var img_s = document.getElementById("im1");
        move(img_s);
    };
    document.getElementById("btn_1").onclick=function(){
        location.href="vv5.html";
    };
    document.getElementById("btn_2").onmouseover=function(){
        var img_s = document.getElementById("im2");
        move(img_s);
    };
    document.getElementById("btn_1").onmouseout=function(){
        var img_s = document.getElementById("im1");
        moves(img_s);
    };
    document.getElementById("btn_2").onmouseout=function(){
        var img_s = document.getElementById("im2");
        moves(img_s);
    };
    function move(img){
        img.style.transition="all 0.5s";
        img.style.transform="translateY(30px)"
    }
    function moves(img){
        img.style.transition="all 0.5s";
        img.style.transform="translateY(0px)"
    }
/*省市联动*/
	var two = document.getElementById('two');
    city = [];  /*申明*/

/*定义二级数据*/
    city[0] = ['杭州市',"宁波市","温州市","嘉兴市"];
    city[1] = ['广州市',"东莞市","珠海市","汕头市"];
    city[2] = ['厦门市',"福州市","三明市","泉州市"];
    city[3] = ['成都市',"南充市","绵阳市","德阳市"];
};
function func(m){
    two.length = 1;
    //遍历生产option选项
    for (var i = 0; i < city[m].length; i++) {

        /*创建一个option 把数据存储在option*/
        var op = new Option(city[m][i],i);

        /*把带有数据的option 添加到第二个select*/
        two.add(op);
    }
}



