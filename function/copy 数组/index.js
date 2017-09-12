/*
* @Author: lenovo
* @Date:   2017-09-09 09:33:56
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-11 23:05:16
*/
// document.write('拷贝数组一')
// function copy(arr){
// 	var newarr1=[];
// 		for(var i=0;i<arr.length;i++)
// 		{
// 			if(typeof arr[i]=='object')
// 			{
// 				newarr1[i]=copy(arr[i])
// 			}
// 			else{
// 				newarr1[i]=arr[i]
// 			}
// 		}
// 	document.write(newarr1);

// 		return newarr1;
// }
document.write('拷贝数组:')

function copy(arr){
	var newarr=[];
	for(i=0;i<arr.length;i++){
		if(typeof arr[i]=='object'){
			newarr[i]=copy(arr[i])
		}
		else
			newarr[newarr.length]=arr[i];
	}
	document.write(newarr);
	return newarr;
}