/*
* @Author: lenovo
* @Date:   2017-09-09 09:33:56
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-11 23:15:19
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