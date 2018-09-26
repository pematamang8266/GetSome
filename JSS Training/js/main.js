"use strict";

//JavaScript Data Types
//Priomitive Variables
//Number

//var numberVar=7;
//console.log(typeof numberVar)
// String
//var stringVar="This is some text";
//console.log(typeof stringVar);

// Boolean
//var boolVar=true;
//console.log(typeof boolVar);

//Null
//var nullVar=null;
//console.log(typeof nullVar);

//Undefined--Do not ever use this

//var undVar=undefined;
//console.log(undVar);
//Object
//var objVar = {
	 // name :"Pema",
	//  age :24,
	 // likesTOcode : true,
	//  married : null
	//}
//console.log(objVar.name);
/* If Statement:
   If true, run the code, otherwise ignore
   ==, ===, >, <, <=, >=, != */
//if(4 !=0){
	//console.log("Its True")
	//}

	//While loop
	//var count = 0;
//	while(count <= 10){
		//console.log("count");
     //count+= 5; //count= count + 2
//}
	//console.log("current count value:" + count);
	// for(var i=0; i<=2;i++){
	 	//console.log("Forloop i: " + i);
	// }
	// var animals = ["Tiger", "Lion", "Zebra", "Elephant", "Horse"];
	 //console.log(animals.length);
	// console.log("--------");
	// for(var j= 0; j< animals.length; j++){
	 	//console.log(animals[j]);
	 //}
	 //function OurFirstFunction(name){
	 	//console.log("Hello from:" + name);
	 //}
	 //calls OurFirstFunction, with the value "Pema"
	 //OurFirstFunction(objVar.name);
	 //function TimesTen(num){
	 	//console.log(num *10)
	 	//return num* 10;

	 //}
	 // Multiply num,1 and num2
	// function multiply(num1, num2){
	  //return num1 * num2
	//}
	 // console.log(multiply(5,7));
	  //function add (num1, num2){
	  	//return num1 +num2
	 // }
	 // console.log(add(5,7));
	 
	 //function subtract(num1, num2){
	// 	return num1-num2
	/// }
	// console.log(subtract(5,7));
	 //function divide(num1, num2){
	 	//return num1/num2
	// }
	 //console.log(divide(15,3));
	 //var numbers1 =[24, 35, 46, 80, 79, 47, 51];
	 	 //var numbers2 =[24, 35, 46, 80, 79, 47, 51,62];

	 //console.log(numbers);

	 //function SumAll(arr){

	 //	var sum=0;
	 	//for(i=0;i< arr.length;i++){
	 		//sum+= arr[i];
	 		//console.log(sum);
	 //	}
	 //	return sum;
	 //}
	// SumAll(numbers1)
	 //function Average(arr){
	 	//var sum =0;
	 	//for(var i=0;i<arr.length;i++){
	 		//sum+=arr[i];
	 	//}
	 	//console.log(sum);
	 
	 //return sum/arr.length
	//}
	//Object Constructor
function Person(firstName, lastName, age, likesFootball){
	this.firstName= firstName,
	this.lastName= lastName,
	this.age= age,
	this.likesFootball= likesFootball

}
  var Pema= new Person("Pema", "Tamang", 24, true);
  console.log(Pema);
  //Concatenate three Strings
  console.log(Pema.firstName + " " +Pema.lastName);
  function FullName(obj){
  console.log(obj.firstName +" " + obj.lastName);
  }
  FullName(Pema)
  // Math Function
 var NewMath =
 {
 	SquareIt : function(num){
 		console.log(num *num)
 	}, 
 	EvenNumbers: function(num){
 		var arr=[];
 		for(var i=0; i<num; i++){
 			if(i%2==0){
        		arr.push(i);
 			}
 		}	
 		console.log(arr);

 	},
 	FindMax: function(arr){
 		var max= -Infinity;
 		for(var i= 0;i<arr.length;i++){
 			if(arr[i]>max){
 				max=arr[i];
 			}
 		}
 		console.log(max);
 	}, 
 	FindMin: function(arr){
 		var min= Infinity;
 		for(var i=0;i<arr.length;i++){
 			if(arr[i]<min){
 				min=arr[i];
 			}
 		}
 		console.log(min);
 	}, Power: function(base, power){
 		var output= base;{
 			for(var i=1;i<power;i++){
 				output *=base
 			}
 			console.log(output);
 		}
 	}
}
NewMath.Power(2,3);
//var checkMax=[10,20,30,40];
//NewMath.FindMin([10,20,30,40]);
//NewMath.FindMax(checkMax);
// NewMath.FindMax([10,20,30,40]);
 //NewMath.EvenNumbers(50);
 	//var arr=[0,1,2,3,4,5,6,7,8,9];



