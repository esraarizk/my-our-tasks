//project 1 :
var mystring="This is a string",
    convertarray=myString.split(" ");
console.log(convertarray);

//project 2:
x=myString.charCodeAt(3);
console.log(x);

//project 3:
bigg=myString.toUpperCase();
console.log(bigg);

//project 5:
//way 1:
y=myString.slice(-6);

//way 2:
y=myString.substr(10,6);

//way 3:
y=myString.substring(myString.length - 6);

//project 6:
x=myString.replace("a", "my");
console.log(x);

//project 7:
y=myString.charAt(6);
console.log(y);

//project 8:
var x = "108 $";
y=parseInt(x);
console.log(y);

//project 9:
x = Math.max(12,25,30,50,80,65,70);
console.log(x);

//project 10:
function evennumbers (number){
    "use strict";
    var i ;
	for(i = 0; i<= number;i++){
		if(i%2 == 0){
			console.log(i);
		}
}

evennumbers(35);
    
//project 11:
var x =" Hello   World  ";
y=x.trim();
console.log(y);
    