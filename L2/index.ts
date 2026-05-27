//object array tuple

const student:{
    name:string;
    age:number;
   xyz:{
        school:number [];  //if we want string we change it into string
    };
} ={
    name :"Anii",
    age:25,
    xyz:{
  school:[1,2,3] //number
    },
  
}
// console.log(student)

let productdata :any[]; //not good 
 productdata=["kaja",1,"3"]
 console.log(productdata)

 //!tuple  its kind of fixed size of array like here we are talking about no. and  string in a synchronuscity

 const person:{
    name:string;
    age:number;
    marks:number;
    class:[number,string];   //on the index of 0 should be number and second should be string means 1st index

 }={
    name:"kajol",
    age:29,
    marks:10,
    class:[10,"tenth"]
 }
 console.log(person)

enum Role{admin,user,readonly}
 const persondata:{
    name:string;
    age:number;
    marks:number;
    role:Role;
   
}={
   name:"kajol",
   age:10,
   marks:99,
   role:Role.user
    
}

if(persondata.role===Role.admin){
    console.log("admin")
}else if(persondata.role===Role.user){
    console.log("user")
}
else{
    console.log("read only")
}