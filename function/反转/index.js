/*
* @Author: lenovo
* @Date:   2017-09-09 09:33:56
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-11 23:10:33
*/
// 反转
function reverse(arr){
 var newarr=[];
 for(var i=arr.length;i>=0;i--) 
 {
 	push(newarr,arr[i]);
 }
 return newarr;
}
function push(arr,...rest){
    for(var i=0;i<rest.length;i++)
    {
    	arr[arr.length]=rest[i];
    }
}
// 
