"use strict";
//console.log("Wecome To The New Age");
//console.log(Math.ceil(Math.random()*25));
var randArr=[];
for (var i=0;i<10;i++){
	randArr.push(Math.ceil(Math.random()*101));
}
console.log(randArr);
var chars= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "+", "!","@","#","$","%"];
console.log(chars);
var pass=" ";
var excel=Math.floor(Math.random()*5);
excel+=12;
for(var j=0;j<excel;j++){
    var index=Math.floor(Math.random()*chars.length);
	if(Math.random() <0.5 && index < 26){
		pass += chars[index].toUpperCase();
	} else {
		pass +=chars[index];
		

	}
}
/*console.log(pass);
for(var row=0;row<5;row++){
	console.log("row");
	for(var col=0;col<10;col++){
		console.log("col");
	}
}*/
var myTable=document.getElementById("nestedtable");
for(var i=0;i<10;i++){
	var row=document.createElement("tr");
	myTable.append(row);
	for(var ii=0;ii<10;ii++){
		var col=document.createElement("td");
		col.setAttribute("class", "tabledata");
		row.append(col);
	}
}