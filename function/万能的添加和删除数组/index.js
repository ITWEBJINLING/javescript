/*
* @Author: lenovo
* @Date:   2017-09-09 09:33:56
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-11 23:13:55
*/
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