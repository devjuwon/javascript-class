// // const gmc = "softwareDevelopment"
// // Boolean(gmc)
// // console.log(Boolean(gmc));

// // const debtProfile = undefined

// // const tinubu = false
// // const obi = true
// // const atiku = undefined
// // tinubu$$obi


// concactenation
// const firstName = "juwon "
// const lastName = "kuzoma"
// const course = "software Development"
// const school = "gomycode"
// const job ="robotics engineer"

// const sentence = "my name is " + firstName + lastName + " i am a student of " + school + " i am currently studying " + course + " and i want to become a " + job
// console.log(sentence);


// console.log("hello world!");
// var firstName = "juwon"
// var accBalanceDetails = undefined
// var accBalanceDetails = 123456789

// const chief = "Mazi Caleb "
// const nod = 2 
// const daughter1 = "chelsea "
// const daughter2 = "chidebere "
// const age = 23
// const hobby = "sleeping "

// const sentence = chief + "has " + " " + nod +"daughters, " + "named " + daughter1 + "and " + daughter2 + "they are both " + age + "years old and they love " + hobby
// console.log(sentence);

// const sentence2 = `${chief} has ${nod} daughters named ${daughter1} and ${daughter2}, and they love ${hobby}`
// console.log(sentence2);

// functions
// function sayhello(){
//     return console.log("hello DevJuwon")
// }

// sayhello()

// function add(){
//     return console.log(10+10);
// }

// add()

// function profit(cp,sp){
//     let profitVar = sp - cp
//     return console.log(profitVar);
// }

// profit(10000,17500)

// function loss(cp,sp){
//     let lossVar = cp - sp
//     return console.log(lossVar);
// }

// loss(20000,10000)

// function pp(cp,sp){
//     let p = sp - cp
//     let pp = p/cp * 100
//     return console.log(pp);
// }

// pp(7500,20000)

// function area (r,l){
//     let ca = 22/7*(r)*(r+l)
//     return console.log(ca);
// }

// area(7,10)

// if:else topic
// let age = 17
// if(age<18){
//     console.log("you are a minor");
// } else{console.log("you are an adult");}

// let customer = "student"
// if(customer !== "student"){
//     console.log("pay 100%");
// }else {console.log("pay 50%");}

// function inecAgeChecker(age){
//     if(age<=17){
//         console.log("you are not eligible to vote");
//     } else{
//         console.log("you are eligible to vote");
//     }
// } 

// inecAgeChecker(16)

// let age = 24
// if(age >= 1 && age <= 10){
//     console.log("you've got 75% discount");
// }else if(age >= 11 && age <= 17){
//     console.log("you've got 50% discount");
// }else if(age >= 18 && age <= 29){
//     console.log("you've got 25% discount");
// }else {
//     console.log("you've got 0% discount");
// }

// arrays
// const softwareClass =["DevJuwon","Abiola","CM","DML","Oreva","steven"]
// console.log(softwareClass[0]);
// console.log(softwareClass[4]);

// updating array
// console.log(softwareClass[1]=false);
// array methods
// console.log(softwareClass.length);
// softwareClass.push("Olaitan")
// console.log(softwareClass);
// softwareClass.pop()
// console.log(softwareClass);
// softwareClass.shift()
// console.log(softwareClass);
// softwareClass.unshift("Olamide")
// console.log(softwareClass);

// javascript object object constructor
// let person = new Object()
// person.firstName = "DevJuwon"
// person.lastName = "Onifade"
// person.phone = 9058556770
// person.hobbies = ["coding","watching movies"]
// person.married = true
// person.debt =null
// console.log(person);

// javasript object literal
// let person = {
// firstName: "DevJuwon",
// lastName: "Onifade",
// sex: "female",
// phone: 9058556770,
// status: "married",
// hobbies: ["coding","watching movies"],
// debt: null,
// }
// console.log(person);




// accessing objects
// console.log(person.lastName);

// person.lastName = "kuzoma"
// console.log(person);

// person.hobbies[1]
// console.log(person.hobbies[1]);

// person.hobbies[1]= "gaming"
// console.log(person);



// properties and methods of javascript objects
// const staff ={
//     firstName: "DevJuwon",
//     lastName: "Onifade",
//     age: 15,
//     email: "devjuwon@gmail.com",
//     salaryPerDay: 5000,
//     numbersOfDaysPresent: 24,
//     salaryPerMonth: function(){return this.salaryPerDay * this.numbersOfDaysPresent}
// }
// console.log(staff.salaryPerMonth());


// the switch statement
// let cm = "director"
// switch(cm){
//     case(cm=="janitor"):
//     console.log("not my job");
//     break;

//     case(cm == "security"):
//     console.log("not my job");
//     break;

//     case(cm == "admin"):
//     console.log("not my job");
//     break;

//     default:
//     console.log("my job");
// }



// loops in javascript
// for(let i=0;i<9;i++){
// console.log(i);
// }

let i = 0
while(i<9){
    console.log(i);
    i+=3
}