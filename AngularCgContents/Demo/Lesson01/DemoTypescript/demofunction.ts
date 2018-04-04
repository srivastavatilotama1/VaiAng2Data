
//2 parameter with number as return type
function getsum(numOne:number,numTwo:number):number{
    return numOne+numTwo;
}

let add=getsum(10,6);

document.write("Sum is "+add+" <br/>");

//any number of data--know as rest parameter 

function sumAll(...num:number[]){
    let sum:number=0;
    for (let data of num) {
        sum=sum+data;
	document.write("Addition of number "+data+"<br/>");
}
    document.write("Sum is "+sum+"<br/>")  
}

sumAll(6,7,8,9);

//Optional parameter----? for optional & Default parameter
function doGet(one:number,two=5,three?:number):void{
    //alert("hii");
    document.write(one.toString());
    document.write(two.toString());
    document.write(three.toString());
}

//doGet(10);
doGet(10);
