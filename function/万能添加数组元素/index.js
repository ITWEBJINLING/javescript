/*
* @Author: lenovo
* @Date:   2017-09-09 09:33:56
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-11 23:21:25
*/
// 删除数组元素
function splice(arr,pos,num){
	var newarr=[];
    for(var i=0;i<arr.length;i++){
    	if(!(pos<=i && i<pos+num)){
    		// continue;
    		newarr[newarr.length]=arr[i];
    	}
    }
    return newarr;
}
//添加数组元素 
function apliceadd(arr,pos,...rest){
	var newarr=[];
	for(var i=0;i<pos;i++){
		newarr[newarr.length]=arr[i];
	}
	for(var i=0;i<rest.length;i++){
		newarr[newarr.length]=rest[i];
	}
	for(var i=pos;i<arr.length;i++){
		newarr[newarr.length]=arr[i];
	}
	return newarr;
}
// ...不在参数的位置时是一个拆分的效果，在参数的位置时是打包数组的作用
function splice2(arr,pos,num,...rest){
	var newarr=splice(arr,pos,num);
	if(rest.length>0){
      var newarr=apliceadd(newarr,pos,...rest);
	}
	return newarr;
}
function checkscope(){
	var scope="local";
	function f(){return scope};
	return f;
}