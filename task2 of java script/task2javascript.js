/* project 1 : */
// way 1:
var WayOne = new Array();
WayOne[0]=200;
WayOne[1]="Ahmed";
WayOne[2]="Hi";
WayOne[3]="true";
WayOne[4]="false";
WayOne[5]="M";
WayOne[6]="css";
WayOne[7]="Hi";
// way 2:
new Array(200,"Ahmed","Hi","true","false","M","css","Hi")
//way 3:
var WayThree = [];
WayThree[0]=200;
WayThree[1]="Ahmed";
WayThree[2]="Hi";
WayThree[3]="true";
WayThree[4]="false";
WayThree[5]="M";
WayThree[6]="css";
WayThree[7]="Hi";
//way 4:
var WayFour = [ 200 , "Ahmed" , "Hi" , "true" , "false" , "M" , "css" , "Hi" ];
/*******/

/* project 2 : */
// way 1:
if(Array.isArray(WayThree[1])){
    console.log("Yes");
}else{
    console.log("No");
}

// way 2:
if(WayThree[1].constructor===Array){
    console.log("Yes");
}else{
    console.log("No");
}
/*******/

/* project 3 : */
// by using WayThree
console.log(WayThree.length);
/*******/

/* project 4 : */
// by using WayFour
var lastindex=WayFour.lastIndexOf("Hi");
console.log(lastindex);

/*******/

/* project 5 : */
// by using WayFour
var firstindex=WayFour.indexOf("Hi");
console.log(firstindex);
console.log(WayFour);   


/*******/

/* project 6 : */
// by using WayFour
// Way 1:
WayFour=WayFour.toString();
console.log(WayFour);

// Way 2:
WayFour=WayFour.toLocaleString();
console.log(WayFour);
/*******/

/* project 7 : */
// by using WayFour 
WayFour.shift(); //Will remove first element (WayFour[0])
WayFour.splice(3,4); //Will remove  element with index 3,4 (WayFour[3],WayFour[4])
WayFour.pop(); //Will remove last element (WayFour[7])
/*******/

/* project 8 : */
// by using WayFour 
WayFour.unshift("esraa"); //Will add  element at the beginning
WayFour.push("engineer"); //Will add  element at the end
WayFour[2]="rizk";//Will add  element at index2
/*******/

/* project 9 : */
// by using WayFour 
WayFour.sort();
console.log(WayFour);

/*******/

/* project 10 : */
// by using WayFour 
WayFour.reverse();
console.log(WayFour);

/*******/

/* project 11 : */
var arrrayy1 =[
    "esraa",
    "rizk",
    "engineer"];

var arrrayy2 =[
    "esraa2",
    "rizk2",
    "engineer2"];
var combinee=arrrayy1.concat(arrrayy2);
/*******/