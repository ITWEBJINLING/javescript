/*
* @Author: lenovo
* @Date:   2017-09-15 17:23:00
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-16 00:34:25
*/
let user=document.getElementById('yonghu');
let mima=document.getElementById('yonghu1');
let button=document.getElementById('button');
button.onclick=function(){
	let u=user.value;
	let p=mima.value;
	if(u=='zhangsan' && 'p==12345'){
		alert('登陆成功！');
	}
	else{
	location.assign('shibai.html');}
}