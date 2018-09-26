//DOM ------Document Object Model
"use strict";
console.log("test");
 /*var header = document.getElementById("header");
 console.log(header);
 header.innerHTML ="Changed form Javascript";

 var h2s=document.getElementByTagName("subHeader");
 console.log(h2s);
  var subHeaders= document.getElementByClassName("subHeader");
  console.log(subHeaders);
  for(var i=0;i<h2s.length;i++){


  	h2s[i].innerHTML="H2 number:" +(i+1);
  	
  }
  function Addstuff(){
  	 vartextNode= document.createTextNode("some text for our function");
  	 var h3= document.createElement("h3");
  	 h3.append(textNode);
  	 document.body.append(h3);
  }*/
  //Write a function that displays the date "num times";
  var dateContainer= document.getElementById("dateContainer");
  function DisplayDate(num){
  	for(var i=0;i<num;i++){
  	   var currentDate= new Date();
        var dateP= document.createElement("p");
      dateP.append(currentDate);
       dateContainer.append(dateP);
       if(i%2==0){
       	  dateP.setAttribute("class", "datePEven");

        }else{
        	       dateP.setAttribute("class", "datePOdd");

        }
    }
}
  DisplayDate(10);
   var animals= ["Horse", "Hippo","hyena", "Elephant", "Rhino", "Cat","Dog"]




   var testString= "abcdefghijklmnopqrstuvwxyz";
   console.log(animals[0].charAt(0));


function FindtheH(arr){
	for(var i=0;i< arr.length;i++){
		if(animals[i].charAt(0)=="H" || animals[i].charAt(0)=="h"){
			console.log(animals[i])
		}
	}
} 
FindtheH(animals);	

var message= document.getElementById("message");
 /*setTimeout(function(){
 	message.style.display= "block";
 }, 5000)
*/

 console.log("Hello");
 function closeMessage(){
 	message.style.display="none";
 }
 function BiggerNumber(){
      var a = window.prompt("Give a number");
      if (a==null){
        return;
      }
      while (isNaN(a) || a.length ==0){
        a=window.prompt("That's not a number. Please try again")
      }
      a= parseInt(a);
      //console.log(typeof a);
      var b = window.prompt("Give a number");
      if (b== null){
        return;
      }
      while(isNaN(b) || b.lentgh ==0){
        b=window.prompt("That's not a number. Please try again")

      }
      b=parseInt(b);
      //console.log(b);
      if(a>b){
        console.log(a+ "is the bigger number");
      } else if(b>a){
        console.log(b+ "is the bigger number");
      }else{
        console.log("They are equal");
      }

    }
    var clock= document.getElementById("clock");
    function KeepTime(){
      var timeOfDay= "am";
      var upDate= new Date();
      upDate= upDate.toString();
      upDate= upDate.slice(16, 24);
      var hour = upDate.slice(0,2);
      if (hour>12){
        timeOfDay = " pm"
        hour-=12;
      }
      var updatedTime=hour+ upDate.slice(2,9);
      clock.innerHTML= "Current Time: " + updatedTime + timeOfDay;
      setTimeout(KeepTime, 1000);
    }
    KeepTime();