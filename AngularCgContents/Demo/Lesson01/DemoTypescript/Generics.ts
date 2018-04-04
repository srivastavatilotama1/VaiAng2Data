function GetType<T>(val: T):string{
    return typeof(val);}
let ename="Abcd";
let one=10;
document.write("Call Generics "+GetType(ename)+" "+GetType(one));
//class -generics
class GetNumber<T>{
    add:(one:T,two:T)=>T;
}
var result=new GetNumber<number>();
result.add=function(x,y){
    return x+y;}
document.write("Addition of 5+2"+result.add(5,2));