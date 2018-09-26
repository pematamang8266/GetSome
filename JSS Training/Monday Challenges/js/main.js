"use strict";
//console.log("Hello from the other side");
 //function AreaOfCube(length, breadth, height){
	//console.log(length+ "cm");
		//console.log(breadth+ "cm");
		   //console.log(height+ "cm");
		 
		  // console.log(length*breadth*height + "cm");
//}

//AreaOfCube(4,5,6);
function PosOrNeg(num){
	if(num>0){
		console.log("Positive Number");
	}else if(num<0){
	console.log(num + " is Negative Number");
    }else{
    	return;
    }

	
}
 //PosOrNeg(-14);
function FindSum(arr){
	var sum=0;
	for(var i=0;i<arr.length;i++){
		sum +=arr[i];
	}
	console.log(sum);
}
 //FindSum([2,4, 6, 8]);
function FindAvg(arr){
	var sum=0;
	for(var i=0;i<arr.length;i++){
		sum +=arr[i];
	}
	console.log(sum);
	var avg=0;
	avg=sum/arr.length;
	console.log(avg)

}
 // FindAvg([1,3,4,6]);
 function ScoreCalculator(quesCorr, quesTotal){
 	return (quesCorr/quesTotal *100 );
 }
// ScoreCalculator(73,84);
var OurScore= ScoreCalculator(5,10);
//console.log(OurScore);
function  GradeCalculator(num){
      if(num <=100 & num>=90){
   	   console.log("The grade is :" + "S" + " Excellent")
       }else if (num<=90 & num>=80){
   	   	console.log("The grade is :" + "A")

   	   	}else if (num<=80 & num>=70){
   	   		   	console.log("The grade is :" + "B" + "")

   	   	}else if (num<=70 & num>=60){
   	   		   	console.log("The grade is :" + "C")

   	   	}else if (num<=60 &num>=50){
   	   		   	console.log("The grade is :" + "D")

   	   	}else if(num<=50 &num>=40){
   	   		   	console.log("The grade is :" + "E")
   	   	}else {
   	   		   console.log("The student is Fail")

   	   	}
   	   	


   }

  //GradeCalculator(95);
 var animals=["cat", "Dog","Hippo","Monkey","Elephant"];
 function FindLongestWord(arr){
 	var maxlength= -Infinity;
 	 var longestString= "";
 	for(var i=0; i<arr.length;i++){
 		if(arr[i].length>maxlength){
 		maxlength= arr[i].length;
        longestString=arr[i];
      }
    }
    console.log(longestString);
 	
 }  
    //FindLongestWord(animals);
 //function CelsiusToF(cel){
 	
 	//console.log((cel*9/5)+32 + "F");
 //}
 //CelsiusToF(12);
  //function CelsiusToKelvin(c){
  	//console.log(c+273.5 +"K");
  //}
  //CelsiusToKelvin(25);
  //function FocusInput(sender){
  //	sender.style.background="tomato";
 // }

  //function BlurInput(sender){
  	//sender.style.background="cyan";
 // }
//var wordCount=document.getElementById("WordCount");
//function CountLetters(sender){
	//wordCount.innerHTML= "Letter Count : " + sender.value.length
var mainImg=document.getElementById("mainImg");
function ChangePicture(sender){
	mainImg.src=sender.src;
}
var timer= document.getElementById("timer");
var minutes= 0;
var seconds=0;
function KeepTime(){
	if (seconds<10){
		var secondString= "0" +seconds;
	}else{
		secondString=seconds;
	}
	if (seconds>58){
		minutes++;
		seconds=0;

	}
	
	timer.innerHTML= "How long i have been here:"+minutes+":"+secondString;
	seconds++;
	setTimeout(KeepTime,1000);

}
KeepTime();
var subImgs=document.getElementsByClassName("smallImg");
var index=0;
function Carousel(){
	mainImg.src=subImgs[index].src;
	index++;
	if(index>=subImgs.length){
		index=0;
	}
	setTimeout(Carousel, 1000);

}
Carousel();