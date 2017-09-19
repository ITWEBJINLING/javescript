/*
* @Author: lenovo
* @Date:   2017-09-15 17:24:14
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-16 00:14:17
*/
let info=document.getElementById('info');
let t=window.setInterval(function(){
info.innerText-=1
if(info.innerText<1){
	clearInterval(t);
	location.assign('bom1.html');
}
},1000)

