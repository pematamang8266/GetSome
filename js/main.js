"use strict";
$(document).ready(function(){
//console.log("Wecome To The New Age");
//console.log(Math.ceil(Math.random()*25));
/*var data=[];
var chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];
var myTable=document.getElementById("nestedtable");
for(var i=0;i<4;i++){
	var row=document.createElement("tr");
	myTable.append(row);
	
	for(var ii=0; ii<4; ii++){
		var col=document.createElement("td");
		//Style rules for even rows
		if(i%2==0){			
			if(ii%2==0)
				col.setAttribute("class","tableData1");
			else
				col.setAttribute("class","tableData2");
		}
		//Style rules for odd rows
		else{
			if(ii%2 !=0)
				col.setAttribute("class" ,"tableData1");
			else
				col.setAttribute("class" ,"tableData2");				
		}
		data.push(col);

		row.append(col);
	}
}
var dataInd=0;
var randInd;
while(chars.length>0){
	var randInd=Math.floor(Math.random()*chars.length);
	data[dataInd].innerHTML=chars[randInd];
	chars.splice(randInd,1);
	dataInd++;
}

var tableindex;
  function randomcolor(){
  	tableindex=Math.floor(Math.random()*data.length);
  	var r=Math.floor(Math.random()*256);
  	var g=Math.floor(Math.random()*256);
  	var b=Math.floor(Math.random()*256);
  	data[tableindex].style.backgroundColor="rgb("+r+","+g+","+b+")";
  	setTimeout(randomcolor,0);
} randomcolor();*/
/*
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
console.log(pass);
for(var row=0;row<5;row++){
	console.log("row");
	for(var col=0;col<10;col++){
		console.log("col");
	}
}*/
var chars=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];

var arrNum=["1","2","3","4","5","6","7","8","9","10","11","12","13"];
var arrSpecial=["@","#","$","%","&"];
	
	
	var testString="abcd@efgh@ikjl";
	var testArray=testString.split("@");
	console.log(testArray);
	function Splitstring(str,splitAt){
		var output=[];
		var lastindex=0;
		for(var i=0;i<str.length;i++){
			if(str.charAt(i)==splitAt){
				var addstring=str.slice(lastindex,i);
				output.push(addstring);
				lastindex=i + 1;
			}
		}
		var lastString=str.slice(lastindex,i);
		if(lastString.length!=0)
			output.push(lastString);
		console.log(output);


	}Splitstring("catatatatatatutjkytjthadfg","a");
/* 	//Index---
 	
 	function Indexat(str,char){
 		for(var i=0;i<str.length;i++){
 			if(str.charAt(i)==char){
 		    	console.log(i);
 		    	break;
 			}
 		}
 	}
 	Indexat("pemaamamamamamamama","a");
 	//Include----
 	function include(str,char){
 		for(var i=0; i<str.length;i++){
 		if(str.charAt(i)==char)
 			return true;
 		
 		}
 		 	return false;


 	}
 	console.log(include("pema","s"));
 	//Slice----
 	function SliceString(str, start, stop){
 		var word="";
 		for(var i=start;i<=stop;i++){
 			word+=str[i];
 		}
 		console.log(word);

 	}
 	SliceString("apple",1,4);
 	//Replace---
 	function Replace(str,index, newchar){
 		var string1=str.slice(0, index);
 		var string2=str.slice(index+1,  str.length);
 		console.log(string1+ newchar +string2);

 	}
Replace("banana",1,"e");
// modString---
function modString(val){
	if (typeof val!="string") {
		console.log("please use a string");
		return;
	}
	this.val=val,
	this.modSlice=function(start, stop){
		var newVal="";
		for(var i=start;i<=stop;i++){
			newVal+=this.val[i];
		}

		this.val=newVal;

     },
     this.LastIndex=function(char){
     	for(var i=this.val.length;i>=0;i--){
     		if(this.val.charAt(i)==char){ 
     			console.log(i);
     			break;
     			
     	    }

        }
    },
    this.countLength=function(){
    	var count=0;
    	while(this.val[count]!=undefined){
    		count++;
    	}
    	console.log(count);
    	
    } 
}/*//*
var myString= new modString("This is my string");
var babycat=new modString("kitten");
babycat.countLength();
myString.LastIndex("m");
myString.modSlice(1,4);
console.log(myString.val);


$("#margin").click(function(){
	$("#test").toggle();
});


$(".temp").on("click",function(){
	alert("you entered P1");
});

$(".bg-color").click(function(){
			$(".grandules").css("background-color", "cyan")

});
var count=0;
$("#prac").click(function(){
	if(count%2==0){
		$("#currentdate").append("<p  class='odddate'>" + new Date()+ "</p>");
	}
	else
	$("#currentdate").append("<p class='evendate'>" + new Date() + "</p>");
	count++;

});
$("#try").click(function(){
	addDate();
});

function addDate(){
	if(count%10==0){
	$("#currentdate").empty();
}
var r= Math.floor(Math.random() *256);
var g= Math.floor(Math.random() *256);
var b= Math.floor(Math.random() *256);

	if(count%2==0)
	$("#currentdate").append("<p class='odddate' style= 'background-color:rgb(" + r +  ","+ g+ ","+ b + ")'>" + new Date()+ "</p>");
	
	else
	$("#currentdate").append("<p class='evendate' style= 'background-color:rgb(" + r +  ","+ g + ","+ b + ")'>" + new Date() + "</p>");
	
	count++;
	console.log("hi recursively");
	setTimeout(addDate,1000);
}

});*/
/*
function randomJumbler(){
	var char="fish";

}
*/

/*$("input").dblclick(function(){
	alert("you entered input is: " + $("#mesto").val());
});
//jumblewords
 String.prototype.Scramble = function(){
var str = this;
var arr = str.split("")
var jumbled = ""
console.log(this)
while (arr.length > 0)
{
var random = Math.floor(Math.random() * arr.length)
jumbled += arr[random];
arr.splice(random, 1)
}
console.log(jumbled);
}


var ourString = "fish";
ourString.Scramble();
var newArray = [];
	
 // Animate
 $("#pema").click(function(){
 	$("#panel").slideDown(5000);
 }); 
 $("#stop").click(function(){
 	$("#panel").stop();
 });
 
$("#same").click(function(){
	$("div").animate({left:'850px'});
});

//color change back and forth
	$("#change").click(function(){
// console.log($(".paraBg").css("background-color"))

if($(".para").css("background-color") == "rgba(0, 0, 0, 0)" ){

$(".para").css("background-color", "tomato")
}else{
$(".para").css("background-color", "rgba(0, 0, 0, 0)")
}

});*/
/*
 function RandomGenerator(){
 	var arr=[];
 	var randNum=Math.floor(Math.random()* 20) + 1;
 console.log(randNum);
 var count= 1;
 var Personguess=window.prompt(" guess a number between 1 and 20");
 while(Personguess != randNum){
 	if(isNaN(Personguess))
 		Personguess=window.prompt("Please enter a number");
 	if(Personguess==null){
    return; 	   
 	}
 	 else if (Personguess<randNum) {
 		alert("too low");
 		Personguess=window.prompt("Guess a number between 1 and 20");
 		count++;
 	}
 	else if (Personguess>randNum) {
 		alert("too high");
 		Personguess=window.prompt("guess a number between 1 and 20");
 		count++;
 	} 

 }
 		alert("Your Guess is correct");
     alert("your guess count:" +count);
     if(count>=1 &&count<=3){
     	alert("Great");
     }else if(count>=3 && count>7){
     	alert("good");
     }else{
     	alert("bad");
     }

}
     RandomGenerator();*/
//Palindrome check

 /*function Palindrome(str){
 	var arr=[];
    var revarr =[];
    str = str.toLowerCase();
    for(var i=0;i<str.length;i++){
    	arr.push(str.charAt(i));
    }
    	revarr=arr.reverse();
    	var str1= revarr.join("");
    
    if(str1==str){
    	return true;
    }else{
    	return false;
    }

 }
console.log(Palindrome("dg")); */

 //Full Form Validation
 //Email validation
 ///Firstname
  function CheckfName(str){
     	for(var i=0;i<str.length;i++){
         if(str.length>0){
         	return true;
         }else{
         	return false;
         }
     }
 }console.log(CheckfName("csadg"));
 //LastName
  function ChecklName(str){
    if(str.length>0){
       return true;
     }else{
         return false;
     }
     
 }console.log(ChecklName("csadg"));
 //Email validation
	function checkEmail(str){
		str=str.toLowerCase();
		if (str.charAt(0)=="@")
        return false;
		var arr1=str.split("@");
		if(arr1.length!=2)
			return false;
		if(arr1[0].includes("."))
			return false;
		if(!arr1[1].includes("."))
			return false;
	
	for(var i=0;i<26;i++){
		if(str.endsWith(chars[i]))
			return true;
	}
	return false;
}
console.log(checkEmail("pematamang@gmail.com"));
function EmailAlert(){
	if(checkEmail(document.getElementById("emailEntry").value))
		alert("good");
	else
		alert("Valid email Please");
}
	//Password validation
	function pass(str){

	var conditionmet=0;
	if(str.length >=8)
		conditionmet+=1;
	for(var i=0;i<arrNum.length;i++){
		if(str.includes(arrNum[i])){
			conditionmet +=1;
			break;
		}
	}
	for(var j=0;j<arrSpecial.length;j++){
		if(str.includes(arrSpecial[j])){
 			conditionmet+=1;
 			break;
		}
 	}
 		if (conditionmet==3)
 			return true;
 		else
 			return false;
	

	}
function checkPass(){
	var PassToCheck=document.getElementById("passCheck").value;
	var condMet=0;
	if(PassToCheck.length>=8)
		condMet+=1;
	for (var i=0;i<arrNum.length;i++){
		if(PassToCheck.includes(arrNum[i])){
			condMet+=1;
			break;
		}
	}for (var j=0;j<arrSpecial.length;j++)
	if(PassToCheck.includes(arrSpecial[j])){
		condMet +=1;
		break;
	}

    if(condMet==3)
		return true
 	else
 		return false                                                        
	
}
 
 	function CheckPhone(str){
 		for(var i=0;i<str.length;i++){
 			if(str.length==10){
 				return true;
 			}else{
 				return false;
 			}
 		}
 	}
     console.log(CheckPhone("123456789"));
    

     
  $(document).keyup(function(){
 	var fName=false;
 	var lName=false;
 	var phonenumber=false;
 	var email=false;
 	var password=false;
 	fName=CheckfName($("#fN").val());
 	lName=ChecklName($("#lN").val());
 	phonenumber=CheckPhone($("#phn").val());
 	email= checkEmail($("#emailEntry").val());
 	password=checkPass($("passCheck").val());

  if(fName && lName && phonenumber && email && password)
 {
 	$("#hey").removeAttr("disabled");
 }else{
 	$("#hey").attr("disabled","disabled")
 }
});


 });