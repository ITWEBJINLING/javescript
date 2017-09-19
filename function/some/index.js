/*
* @Author: lenovo
* @Date:   2017-09-09 09:33:56
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-11 23:09:15
*/
// 
// 映射
// every:只要有一个不满足条件就返回false,
// some：只要有一个满足条件就返回true;
function some(arr,fn){
	for(var i=0;i<arr.length;i++)
	{
        if(fn(arr[i])){
        	return true;
        }
	}
	return false;
}