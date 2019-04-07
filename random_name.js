var arr1=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var arr2=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var arr3=["0","1","2","3","4","5","6","7","8","9"]

name=[]
// a1=[]
// a2=[]
// a3=[]
var num=Math.floor(Math.random()*26)
for(var i=0;i<26*10;i++){
	tmp=[]
	array=[]
	tmp.push(arr1[Math.floor(Math.random()*26)]);
	tmp.push(arr2[Math.floor(Math.random()*26)]);
	tmp.push(arr3[Math.floor(Math.random()*10)]);
	for(var j=0;j<tmp.length;j++){
		array.push(tmp[Math.floor(Math.random()*3)])
	}
	cont=[]
	cont.push(array[0])
	cont.push(array[1])
	if(name.indexOf(cont.join(""))==-1){
		name.push(cont.join(""))
	}else{
		continue;
	}
	// console.log(array.join(""))
}
console.log(name)
