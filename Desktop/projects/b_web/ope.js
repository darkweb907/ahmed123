console.log(this)
alert("css animation is so intresting and it is a great fun so learn it because no body is above learning")
var a=1;		
var b=3;
if (a==b) {
	document.write("the answer is;" + a)
}else if (a>b){
    document.write("a is greater than;" + b)
}else if (a>b) {
	document.write("a is less than" +b)
}else{
	document.write("the answer is " +b)
}
var date=new Date;
document.write("today is" + date)
var myHouse= new Object();
myHouse.colour="red";
myHouse.street="kalejaiye street mafoluku oshodi lagos state.";
myHouse.type=function() {
	console.log("bungalow with three bedroom flat and six toilet");
};
myHouse.type();
console.log(myHouse.street);
var myCar={
	maxspeed:70,
	driver:"now moving",
	drive:function(speed, time){
		console.log(speed+time)
	},
	test:function() {
		console.log(this)
	}
}
myCar.test()
myCar.drive(40,50)
console.log(myCar);
var myHouse={
	colour:"red",
	street:"abolaji street",
	type:function() {
		console.log("bungalow with three bedroom flat and six toilet");
	}
	
}
myHouse.type()
console.log(myHouse.colour)
 var myJob=document.getElementById("rob");
 myJob.textContent="hello baby"
 myJob.setAttribute("style","background-color:red;")
 var sunday=document.getElementById("sunday")
var goat=document.createElement("li")
sunday.appendChild(goat)
goat.innerHTML="hello baby"
var namew=document.createElement("h1")
sunday.appendChild(namew)
namew.innerHTML="what happen stand up nigeria produce by bunmi david"
namew.style.backgroundColor="blue"
namew.style.fontSize="50px"


