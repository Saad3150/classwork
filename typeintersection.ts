
type studentDetails={
    name:string,
    age:number,
};
type academics={
    subject:string,
    marks:number,
};

let Person:studentDetails & academics={
name:"saad",
age:18,
subject:"sst",
marks:35,
};
console.log(Person.name,Person.marks);
